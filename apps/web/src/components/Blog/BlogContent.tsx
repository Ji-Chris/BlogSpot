"use client"
import Image from "next/image"
import { use, useState } from "react"
import TableOfContents from "@/components/Blog/TableOfContents"

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export function BlogContent({
  postPromise,
}: {
  postPromise: Promise<Post>
}) {
  const post = use(postPromise)

  return (
    <article className="blog-container mx-auto max-w-3xl flex flex-col gap-6 p-6">

      <header className="flex flex-col gap-4 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">

          {/* Category pill */}
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            General
          </span>

          {/* Author */}
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            User {post.userId}
          </span>

          {/* Date */}
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>

          {/* Read count - placeholder */}
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            128 views
          </span>

        </div>
      </header>

      <Image
        priority={true}
        src="/blogImage.svg"
        alt={post.title}
        width={1200}
        height={630}
        className="rounded-xl w-full h-auto"
      />

      <TableOfContents sections={["Introduction", "Main Content", "Key Takeaways", "Conclusion"]} />

      <section className="prose prose-lg">
        <p>{post.body}</p>
      </section>

    </article>
  )
}