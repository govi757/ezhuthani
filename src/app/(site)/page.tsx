import { getAllWorks, Work } from "@/services/workService"
import Link from "next/link";


export default async function LibraryPage() {
    const works = await getAllWorks()||[];
    console.log(works.data,"Works from Strapi");
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-8xl mx-auto px-6 py-14">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Poems & Stories
          </h1>
          <p className="text-gray-500 mt-3">
            A collection of imagination, feelings and storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works?.data?.map((item: Work) => (
            <Link href={`/work/${item.slug}`} key={item.id}>
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              {/* Cover Image */}
              {"http://localhost:1337"+item?.coverImage?.url}
              <img
                src={"http://localhost:1337"+item?.coverImage?.url}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.work_type.workType === "Poem"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.work_type.workType}
                </span>

                <h2 className="text-xl font-semibold mt-4 text-gray-900">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                  <span>{item.author.authorName}</span>
                  <span>{item.readTimeInMinutes} min read</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}