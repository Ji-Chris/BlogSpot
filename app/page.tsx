import "./globals.css"
import Image from "next/image"

export default function HomePage(){
    return(
        <div id="main-container" className="flex flex-row justify-start ">
            <section id="blog-list" className="grid-cols-1  w-full p-6">
                <div className="flex justify-end gap-3 border border-black/50 p-3">

                    <button id="sort-button" className="border-2 p-2 rounded hover:bg-gray-100">
                        <Image src="/sort-icon.svg" alt="sort" width={12} height={12}
                        ></Image>
                    </button>
                    <button id="filter-button" className="border-2 p-2 rounded hover:bg-gray-100">
                        <Image src="/filter-32.svg" alt="sort" width={12} height={12}
                        ></Image>
                    </button>

                </div>

                <div>
                    <p>Blog List</p>
                </div>
            </section>

        </div>
    )
}