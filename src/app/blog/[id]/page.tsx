import { Suspense } from "react"
import { BlogContent } from "./BlogContent"

async function getBlogPostById(id: string){
  console.log("fetch id: ",id)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts${id}`,
    {cache: "no-store"}
  )

  if (!res.ok) {
    throw new Error("Fuck")
  }

  return res.json()
}

export default function BlogPage({
  params,
}: {
  params: {id: string}
}) {
  const {id} = await params;
  const postPromise = getBlogPostById({id})
  console.log(postPromise)

  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogContent postPromise={postPromise} />
    </Suspense>
  )
}






