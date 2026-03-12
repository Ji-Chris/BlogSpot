import { pgTable, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";


//user
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  username: text("username").unique(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

//better auth session
export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
});

//better auth account
export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

//better auth verification table
export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const blog = pgTable("blog", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),                    // URL slug
  content: text("content").notNull(),
  excerpt: text("excerpt"),                                 // short preview shown on blog list page
  coverImage: text("cover_image"),                          // URL to cover image
  published: boolean("published").notNull().default(false), // draft vs published
  views: integer("views").notNull().default(0),             // view counter
  authorId: text("author_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const tag = pgTable("tag", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
});

// many-to-many junction for linking blogs to tags
export const blogTag = pgTable("blog_tag", {
  blogId: text("blog_id").notNull().references(() => blog.id, { onDelete: "cascade" }),
  tagId: text("tag_id").notNull().references(() => tag.id, { onDelete: "cascade" }),
});

//comments on blogs
export const comment = pgTable("comment", {
  id: text("id").primaryKey(),
  content: text("content").notNull(),
  authorId: text("author_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  blogId: text("blog_id").notNull().references(() => blog.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});