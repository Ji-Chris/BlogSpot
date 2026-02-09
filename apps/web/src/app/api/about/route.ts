
export async function GET(){

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?populate=image`,
        {
            headers:{
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
        }
    )
    console.log(res)

    if (!res.ok){
        return Response.json(
            { error: "Failed to fetch About from Strapi" },
            { status: 500 }
        )
    }

    const data = await res.json()
    console.log(data)
    return Response.json(data)
}