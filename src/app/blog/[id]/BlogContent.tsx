import Image from "next/image"
import { use } from "react"



export default function blogContent({
  postPromise,
}: {
  postPromise: Promise<any>
}) {
  const post = use(postPromise)

  return (
    <article className="blog-container mx-auto max-w-3xl flex flex-col gap-6 p-6">
      
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">By {post.author}</p>
      </header>

        <Image
            src="/blogImage.svg"
            alt={post.title}
            width={1200}
            height={630}
            className="rounded-lg"
        />

      <section className="prose prose-lg">
        <p>{post.body}</p>
      </section>

    </article>
  )
}