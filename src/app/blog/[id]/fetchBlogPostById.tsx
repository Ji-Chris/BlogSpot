export async function fetchBlogPostById(id:string){
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {cache: "no-store"}
    )

    if(!posts.json) throw new Error("Failed to fetch post")
    
    return posts.json()
}
