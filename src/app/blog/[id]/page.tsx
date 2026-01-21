import Image from "next/image"

const BlogPage = async ({params}: {params: {id: string}}) => {
    const { id } = await params

    return <div> SinglePage: {id} </div>
}




export default BlogPage;
