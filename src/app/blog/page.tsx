import Image from "next/image"
import Link from "next/link";

export default function BlogPage(){

    const posts = [
        {
            id:1,
            title: "blog 1",
            authorName: "name 1",
            body: "body 1",
            pfpUrl: "default-pfp.svg",
            imageUrl: "/blogImage.svg"
        },
        {
            id:2,
            title: "blog 2",
            authorName: "name 1",
            body: "body 2",
            pfpUrl: "default-pfp.svg",
            imageUrl: "/blogImage.svg"
        },
        {
            id:3,
            title: "blog 3",
            authorName: "name 1",
            body: "body 3",
            pfpUrl: "default-pfp.svg",
            imageUrl: "/blogImage.svg"
        }
    ];

    return(
        <div className="blog-container ">
            <h1>Blog List</h1>

            <div className="">
                {posts.map((post)=>{
                    return(
                        <div className="individual-blog grid grid-cols-4 justify-start">
                            <div>
                                <Link href={`/blog/${post.id}`}>
                                    <Image 
                                    src={post.imageUrl}
                                    alt="blog-image"
                                    width={100}
                                    height={100}
                                    />
                                </Link>
                                
                                <div>
                                    <Image 
                                    src={post.pfpUrl}
                                    alt="author-image"
                                    width={10}
                                    height={10}
                                    />
                                    <h4>{post.authorName}</h4>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            
                        </div>
                        
                    );
                })}
            </div>
        </div>
        
    )
}