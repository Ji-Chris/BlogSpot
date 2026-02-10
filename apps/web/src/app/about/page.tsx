import Image from "next/image"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"


export default async function About(){
    const res = await fetch("http://localhost:1337/api/about?populate=image")

    if (!res.ok){
        throw new Error("Loading About page failed")
    }
    

    const {data} = await res.json()
    const {title, body, image} = data
    console.log("data fetched",data)

    const imageUrl = image?.url
    const fullImageUrl = imageUrl
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`
        : "/blogImage.svg"
    const altText = image?.alternativeText || "About Page"
    console.log("url of image",imageUrl)
    console.log("alt text of image",altText)

    return (
    <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
            {title}
        </h1>

        <Image
            src={fullImageUrl}
            alt={altText}
            width={800}
            height={500}
            className="rounded-lg mb-8"
        />

      
        <section className="prose prose-lg italic border-l-4 pl-4">
            <BlocksRenderer content={body} />
        </section>
    </main>
  )
}





