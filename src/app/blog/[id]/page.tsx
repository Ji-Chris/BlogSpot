'use client';
import Image from "next/image";
import { fetchBlogPostById } from "./fetchBlogPostById";
import {Blo "./BlogContent";
import { Suspense } from 'react';

function BlogSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-full" />
    </div>
  )
}


export default function BlogPage(){

    const promise = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json);
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Posts promise={promise} />
        </Suspense>
    )

}



/*
<article className="blog-container mx-auto max-w-3xl flex flex-col gap-6 p-6">
      
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">By {post.author}</p>
      </header>

      {post.image && (
        <Image
          src="/blogImage.svg"
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-lg"
        />
      )}

      <section className="prose prose-lg">
        <p>{post.content}</p>
      </section>

    </article>
 */


