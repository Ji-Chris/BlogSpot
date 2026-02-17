import Image from "next/image"



export default async function About(){

    return (
    <main className="min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-1 py-5">
            Blogging Website by jiChris
          </h1>

          <div className="overflow-hidden rounded-2xl shadow-xl mb-12">
            <Image
              src="/template.svg"
              alt="template image for about page"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <section className="bg-white p-8 md:p-10 text-gray-700">
            <div className="space-y-4 text-lg">
              This is a Blogging Website name 
              NextJS(web) + Strapi(cms)//not using this now to learn more about apis
              for learning how a full stack project works with learning SEO optimization later.

              Features to implement:-
              -Adding a functional "Save Post" button
              -Adding Session Manager and cookies to store user data for the entire session
              -Making a Subscription Service
              -Adding a Login normally and then using a MagicLInk
              -Profile Page
              -Sorting & Filter Buttons on the Blogs List Page
              -Better Navbar
              -Better Footer
            </div>
          </section>

        </div>
    </main>
  )
}





