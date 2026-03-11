import Image from "next/image"

export default async function About(){
    return (
    <main className="min-h-screen py-16 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">

          {/* Header */}
          <div className="text-center flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
              Open Source
            </p>
            <h1 className="text-5xl font-bold">
              BlogSpot
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A place to write, share, and discover stories that matter.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/template.svg"
              alt="template image for about page"
              width={100}
              height={100}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* About Text */}
          <section className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              What is BlogSpot?
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                BlogSpot is an open source blogging platform built with Next.js and PostgreSQL,
                designed for writers to create, share, and discover blog posts.
              </p>
              <p>
                This project is actively being developed. More features coming soon.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">Built with</h2>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "better-auth", "Tailwind CSS", "Turborepo"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>
    </main>
  )
}