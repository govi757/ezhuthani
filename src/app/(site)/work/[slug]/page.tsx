import { getWorkBySlug } from "@/services/workService";
import { marked } from "marked";
import ReadingProgressBar from "@/components/progressbard/ReadingProgressbar";
import FontSizeControl from "@/components/fontsize-control/FontsizeControl";

export default async function WorkDetailPage({ params }: any) {
  console.log(params, "Params received in WorkDetailPage");
  const resolvedParams = await params;
  const work = await getWorkBySlug(resolvedParams.slug);
  console.log(work, "Work details from Strapi");
  const html = marked.parse(work.content);

  return (
    <div className="bg-stone-50 min-h-screen">
      <ReadingProgressBar />

      {/* Cover Image */}
      <div className="w-full h-[420px] overflow-hidden">
        <img
          src={"http://localhost:1337" + work.coverImage.url}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-12">

        {/* Content Section */}
        <div className="lg:col-span-2">

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {work.title}
          </h1>

          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500 flex gap-4">
              <span>{work.work_type.workType}</span>
              <span>{work.readTimeInMinutes} min read</span>
              {/* <span>{new Date(work.createdAt).toDateString()}</span> */}
            </div>

            <FontSizeControl />
          </div>

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed" id="reading-content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

        </div>

        {/* Author Sidebar */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 h-fit">

          <div className="flex items-center gap-4 mb-4">

            <img
              src={"http://localhost:1337" + work.author.authorImage.url}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-gray-900">
                {work.author.authorName}
              </h3>
              <p className="text-sm text-gray-500">Author</p>
            </div>

          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Writer contributing poems and stories exploring imagination,
            emotions and storytelling.
          </p>

        </div>

      </div>
    </div>
  );
}