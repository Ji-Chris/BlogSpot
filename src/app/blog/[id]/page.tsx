import { Suspense } from "react"
import { BlogContent } from "../../../components/Blog/BlogContent"

async function getBlogPostById(id: string){

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  //console.log("Response status:", res.status)

  if (!res.ok) {
    throw new Error("Fuck")
  }

  return res.json()
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{id: string}>
}) {
  const { id } = await params;
  const postPromise = getBlogPostById(id)
  console.log("params object:", id)

  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogContent postPromise={postPromise} />
    </Suspense>
  )
}






