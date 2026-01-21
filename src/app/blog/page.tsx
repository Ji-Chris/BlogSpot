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
        <div id="main-container" className="flex flex-row justify-start ">
            <section id="blog-list" className="flex flex-col  w-full p-6">
                <div className="flex justify-end gap-3 border border-black/50 p-3 m-5">

                    <button id="sort-button" className="border-2 p-2 rounded hover:bg-gray-100">
                        <Image src="/sort-icon.svg" alt="sort" width={12} height={12} />
                    </button>
                    <button id="filter-button" className="border-2 p-2 rounded hover:bg-gray-100">
                        <Image src="/filter-32.svg" alt="sort" width={12} height={12} />
                    </button>

                </div>

                <div className="blog-list m-5">
                    {posts.map((post)=>{
                        return(
                            <div key={post.id} className="individual-blog grid grid-cols-4 justify-start">
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
            
            </section>

        </div>      
        
    )
}