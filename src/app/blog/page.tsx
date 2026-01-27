import Image from "next/image"
import Link from "next/link";

export default async function BlogPage(){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    

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

                <div className="blog-list m-5 gap-5">
                    {/* any type to be resolved later */}
                    {posts.map((post:any)=>{
                        return(
                            <div key={post.id} className="individual-blog flex flex-row justify-start border 
                            p-5 rounded-xl shadow-xl">
                                <div className="flex flex-col items-start gap-4 m-4">
                                    <Image 
                                        src='/blogImage.svg'
                                        alt="blog-image"
                                        width={100}
                                        height={100}
                                    />

                                    <div>
                                        <Image 
                                        src='/default-pfp.svg'
                                        alt="author-image"
                                        width={10}
                                        height={10}
                                        />
                                        <h4>{post.userId}</h4>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 p-3">
                                    <h2 className="font-bold text-xl">{post.title}</h2>
                                    <p>{post.body}</p>
                                    <Link href={`/blog/${post.id}`}>
                                        <h6 className="text-blue-600 text-blue-600 hover:text-blue-800 transition">
                                            Read More
                                        </h6>
                                    </Link>
                                </div>

                            </div>

                        );
                    })}
                </div>
            
            </section>

        </div>      
        
    )
}