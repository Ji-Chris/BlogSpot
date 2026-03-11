import Image from "next/image"
import Link from "next/link"

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export default async function HomePage(){
    const posts: Post[] = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())

    return (
        <div className="main-container">
          <section className="text-center py-20 flex flex-col gap-6">
              <h1 className="text-5xl font-bold">BlogSpot</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  A place to write, share, and discover stories that matter.
              </p>
              <div className="flex justify-center gap-4">
                  <Link href="/blog" className="px-6 py-3 bg-black text-white rounded-lg">
                      Read Blogs
                  </Link>
                  <Link href="/about" className="px-6 py-3 border rounded-lg">
                      About Project
                  </Link>
              </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16">
              <h2 className="text-3xl font-semibold mb-8">Latest Posts</h2>
          
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post: Post) => (
                  <article
                    key={post.id}
                    className="border rounded-xl p-5 flex flex-col gap-4 hover:shadow-lg transition"
                  >
                    <Image
                      src="/blogImage.svg"
                      alt={post.title}
                      width={400}
                      height={200}
                      className="rounded-lg w-full h-auto"
                    />
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{post.body}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-semibold text-blue-600"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
          </section>

          <section className="py-20 text-center">
              <h2 className="text-3xl font-semibold">Stay Updated</h2>
              <p className="text-gray-600 mt-3">
                  Get notified when new blogs are published.
              </p>
              <div className="mt-6 flex justify-center gap-2">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="border px-4 py-2 rounded-lg w-64"
                  />
                  <button className="px-5 py-2 bg-black text-white rounded-lg">
                      Subscribe
                  </button>
              </div>
          </section>
        </div>
    )
}