import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import * as schema from "@/lib/schema";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

export const auth = betterAuth({

  database: drizzleAdapter(db,{
    provider: "pg" ,
    schema,
  }),
  emailAndPassword: { enabled:true },

  user: {
    additionalFields: {
      username: {
        type: "string",
        required: false,
        input: false, // not supplied by user directly
      },
    },
  },

  //autogenerate slug from name
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              username: generateSlug(user.name),
            },
          }
        },
      },
    },
  },
  
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID!, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET!, 
    },
    google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }
  },

  secret: process.env.AUTH_SECRET,
})