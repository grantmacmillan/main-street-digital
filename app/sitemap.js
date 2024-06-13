import { fetchBlogPosts } from "@/utils/fetchBlogPosts"

export default async function sitemap() {
    const baseUrl = "https://lamplightweb.ca"

    let blogPosts = []

    try {
        const response = await fetchBlogPosts();
        blogPosts = response?.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            priority: 0.5,
        })) || [];
    } catch (error) {
        console.error("Error fetching blog posts:", error);
    }

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.8,
        },
        ...blogPosts,
    ]
}