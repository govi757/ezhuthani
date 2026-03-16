type Content = {
  id: number
  title: string
  author: string
  category: "Poem" | "Story"
  excerpt: string
  readTime: string
  image: string
}

const contents: Content[] = [
  {
    id: 1,
    title: "The Silent Moon",
    author: "Govind",
    category: "Poem",
    excerpt:
      "The moon whispers softly across the silent sky, carrying dreams of forgotten nights.",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 2,
    title: "The Old Banyan Tree",
    author: "Govind",
    category: "Story",
    excerpt:
      "In a quiet village stood a banyan tree that had witnessed generations of secrets.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    id: 3,
    title: "Echoes of Rain",
    author: "Govind",
    category: "Poem",
    excerpt:
      "Raindrops fall like poetry, each one telling a story of the wandering clouds.",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: 4,
    title: "The Last Letter",
    author: "Govind",
    category: "Story",
    excerpt:
      "A letter arrives years too late, bringing with it memories that were never meant to fade.",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800",
  },
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">
            Poems & Stories
          </h1>
          <p className="text-gray-500 mt-3">
            A collection of imagination, feelings and storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              {/* Cover Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.category === "Poem"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.category}
                </span>

                <h2 className="text-xl font-semibold mt-4 text-gray-900">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                  <span>{item.author}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}