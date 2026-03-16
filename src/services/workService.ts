export async function getAllWorks() {
  const res = await fetch("http://localhost:1337/api/works?populate=*", {
    // next: { revalidate: 60 }, // cache for 60 seconds
  })

  if (!res.ok) {
    console.log(res)
    throw new Error("Failed to fetch works")
  }

  return res.json()
}

export async function getWorkBySlug(slug: string) {
    console.log(slug, "Fetching work with slug:") // Debug log to check the slug value
  const res = await fetch(
    `http://localhost:1337/api/works?filters[slug][$eq]=${slug}&populate[coverImage]=true&populate[work_type]=true&populate[author][populate][authorImage]=true`,
    {
      // next: { revalidate: 60 }
    }
  );

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch work");
  }

  const json = await res.json();

  // Strapi returns array for filters
  return json.data?.[0];
}

export interface Work {
    title: string,
    updatedAt: string,
    createdAt: string,
    id: number,
    documentId:string,
    content: string,
    work_type: {
        workType: string,
        id: number
    },
    coverImage: {
        url: string
    },
    author: {
        authorName: string,
        authorImage: {
            url: string
        },
    },
    excerpt: string,
    readTimeInMinutes: number,
    slug: string
}