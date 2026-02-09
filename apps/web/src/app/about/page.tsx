import Image from "next/image"


export default async function About(){
    const res = await fetch("http://localhost:3000/api/about")
    console.log(res.json())

    if (!res.ok){
        throw new Error("Loading About page failed")
    }
    

    const {data} = await res.json()
    const {title, body , image} = data.attributes

    const imageUrl = image?.data?.attributes?.url 
    const altText = image?.data?.attributes?.alternativeText || "About image"

    return (
    <main className="p-8 max-w-3xl mx-auto">
        <section className="prose mb-8">
            <div
            dangerouslySetInnerHTML={{ __html: title }}
            />
        </section>

        {imageUrl && (
            <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                alt={altText}
                width={800}
                height={500}
                className="rounded-lg mb-8"
            />
        )}

      
        <section className="prose prose-lg italic border-l-4 pl-4">
            <div
                dangerouslySetInnerHTML={{ __html: body }}
            />
        </section>
    </main>
  )
}





