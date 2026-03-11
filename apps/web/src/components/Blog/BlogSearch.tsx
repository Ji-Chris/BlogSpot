"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function BlogSearchList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [query, setQuery] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        setError("Failed to load posts. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  )

  return(
    <div id="main-container" className="flex flex-row justify-start">
      <section id="blog-list" className="flex flex-col w-full p-6">
        <div className="flex justify-start gap-3 border border-black/50 p-3 m-5">
          <div className="p-6">
            <input
              type="text"
              placeholder="Search blogs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border p-2 w-full mb-6 rounded"
            />
          </div>
          <div className="ml-auto justify-end">
            <button className="sort-button border-2 p-2 rounded hover:bg-gray-100">
              <Image src="/sort-icon.svg" alt="sort" width={12} height={12} />
            </button>
            <button className="filter-button border-2 p-2 rounded hover:bg-gray-100">
              <Image src="/filter-32.svg" alt="filter" width={12} height={12} />
            </button>
          </div>
        </div>

        {loading && <p className="text-center text-gray-500 m-5">Loading posts...</p>}
        {error && <p className="text-center text-red-500 m-5">{error}</p>}

        <div className="blog-list m-5 gap-5">
          {filteredPosts.map((post: Post) => {
            return(
              <div key={post.id} className="individual-blog flex flex-row justify-start border 
                p-5 rounded-xl shadow-xl">
                <div className="flex flex-col items-start gap-4 m-4">
                  <Image 
                    src='/blogImage.svg'
                    alt="blog-image"
                    width={100}
                    height={100}
                  />
                  <div>
                    <Image 
                      src='/default-pfp.svg'
                      alt="author-image"
                      width={10}
                      height={10}
                    />
                    <h4>{post.userId}</h4>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-3">
                  <h2 className="font-bold text-xl">{post.title}</h2>
                  <p>{post.body}</p>
                  <Link href={`/blog/${post.id}`}>
                    <span className="text-blue-600 hover:text-blue-800 transition text-sm">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}

          {!loading && !error && filteredPosts.length === 0 && (
            <p className="text-center text-gray-500">No posts found.</p>
          )}
        </div>
      </section>
    </div>
  )
}