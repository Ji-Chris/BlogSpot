import { db } from "@/lib/db"
import { user, blog } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params

  // fetch user by username slug
  const [profileUser] = await db
    .select()
    .from(user)
    .where(eq(user.username, username))
    .limit(1)

  if (!profileUser) notFound()

  // fetch their blog posts
  const posts = await db
    .select()
    .from(blog)
    .where(eq(blog.authorId, profileUser.id))

  // check if this is the logged-in user's own profile
  const session = await auth.api.getSession({ headers: await headers() })
  const isOwnProfile = session?.user.id === profileUser.id

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">

          {/* Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={profileUser.image ?? "/default-pfp.svg"}
              alt={profileUser.name}
              width={100}
              height={100}
              className="rounded-full object-cover border-4 border-gray-100 shadow-sm"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <h1 className="text-2xl font-bold text-gray-900">{profileUser.name}</h1>
              {/* ✅ show edit button only on own profile */}
              {isOwnProfile && (
                <Link
                  href="/settings"
                  className="text-xs px-3 py-1 border border-gray-200 rounded-full text-gray-500 hover:bg-gray-50 transition"
                >
                  Edit Profile
                </Link>
              )}
            </div>

            <p className="text-gray-500 text-sm">{profileUser.email}</p>
            <p className="text-gray-400 text-xs">@{profileUser.username}</p>

            {/* Join date */}
            <p className="text-gray-400 text-xs mt-1">
              Joined {new Date(profileUser.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* Stats */}
            <div className="flex gap-6 mt-3 justify-center sm:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-xl font-bold text-gray-900">{posts.length}</span>
                <span className="text-xs text-gray-500">Posts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {isOwnProfile ? "Your Posts" : `Posts by ${profileUser.name}`}
          </h2>

          {posts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-400">
              No posts yet.
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-2 hover:shadow-md hover:border-blue-100 transition-all"
                >
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <span className="text-xs text-blue-500 font-medium mt-1">Read more →</span>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  )
}