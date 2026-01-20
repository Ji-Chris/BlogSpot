import Image from "next/image"

export default function Blog(){
    return(
        <div className="blog-container font-serif">
            <section className="blog-header flex flex-row gap-3 ">
                <div className="author-pfp flex flex-col ">
                    <Image src="/default-pfp.svg"
                    alt="pfp" 
                    width={40} 
                    height={40}
                    className="rounded-full" /> 
                    <h1 className="text-xs">noName</h1>
                </div>
                <div className="blog-title text-xl">
                    Lorem Ipsum
                </div>
            </section>
            <section className="blog-body justify-start flex flex-col w-1200 gap-7">
                <Image src="/blogImage.svg" 
                alt="Image"
                width={1200}
                height={675}
                className="justify-center"/>                
                <p className="w-1200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ante ac felis varius elementum. Aliquam quam ante, vulputate id metus id, euismod ornare ipsum. Aenean dictum neque ac nisi volutpat, vel ullamcorper mi accumsan. Nunc sed pulvinar urna, mattis aliquam diam. Etiam ut aliquam neque. Vestibulum quis molestie lorem, quis suscipit purus. Aenean rhoncus leo nec erat tristique ullamcorper. Donec eu placerat lorem, non sollicitudin eros.Aliquam sollicitudin, leo at congue pharetra, ante metus lobortis ex, pretium varius nisi nulla a odio. Nunc mollis neque nulla, id consectetur nulla suscipit sed. Nam eu tempus ipsum. Donec lobortis, est eu facilisis pulvinar, turpis diam ullamcorper nisi, eu convallis neque erat vel elit. Nulla ac maximus velit, eu sollicitudin lacus. Sed suscipit dapibus quam, eget maximus lacus venenatis sed. Pellentesque ex ex, placerat sed ipsum quis, tempor elementum odio. Aenean gravida gravida justo, elementum lobortis nisi gravida a. Phasellus consectetur massa faucibus, pharetra metus sit amet, dignissim nulla. Praesent tristique mattis gravida. Etiam iaculis faucibus tellus, non tristique nisl pellentesque a. Quisque dignissim tellus id quam tincidunt sodales. Ut egestas purus nisi, eu tincidunt quam placerat id.
                    Duis varius molestie lectus, posuere gravida lacus mollis sed. Nulla facilisi. Quisque lorem dolor, scelerisque eu enim ut, sollicitudin varius mi. Vestibulum a augue imperdiet, consequat eros ut, blandit risus. Aenean gravida mauris sed justo pulvinar commodo. Fusce sit amet feugiat tortor. Nunc enim orci, sagittis quis elit et, pharetra porta ipsum. Mauris faucibus viverra faucibus. Suspendisse laoreet eleifend orci eu fermentum. Vivamus libero nibh, egestas non justo ac, eleifend hendrerit turpis. Sed dapibus egestas mi in vulputate.
                    Integer fermentum quis leo vel pulvinar. Ut semper elit felis, eget imperdiet dui feugiat quis. Ut iaculis mi eget pretium feugiat. Nullam porttitor quam ac enim blandit dapibus. Nulla neque velit, eleifend pharetra consectetur id, convallis vitae dolor. Morbi auctor nisl quam, vel tempor eros euismod ullamcorper. Morbi sit amet dignissim magna, id commodo urna. Maecenas cursus ultrices magna, nec lacinia nibh. Aliquam at quam egestas felis ullamcorper pretium eget vitae nulla. Aenean euismod egestas sapien. Fusce non pharetra ligula.
                    Pellentesque vel faucibus ante, vel ultrices odio. Aliquam consectetur ante eget nisl imperdiet, et condimentum diam gravida. Nam justo enim, rutrum vitae tellus a, bibendum tristique eros. In ut enim in elit mollis maximus. Aliquam efficitur odio sed mi ultricies tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sit amet elementum urna. Donec facilisis nisi sit amet ipsum sodales, sit amet mattis nisi eleifend. Duis sit amet rhoncus orci. Nunc eget purus in nulla cursus malesuada. Proin ullamcorper leo nunc, nec lacinia risus dapibus id. Nunc vel lectus elit. Donec eu ex a lorem finibus iaculis vitae id diam. Maecenas consequat, sem at feugiat euismod, tortor nisl bibendum sapien, sed semper orci risus sit amet libero. Donec condimentum commodo ex vitae auctor. 
                </p>
            </section>
        </div>
    )
}