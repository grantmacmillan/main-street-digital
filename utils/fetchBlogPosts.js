import matter from 'gray-matter';

export async function fetchBlogPosts() {
    const url = 'https://api.github.com/repos/grantmacmillan/main-street-digital/contents/blogPosts';

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const files = await res.json();

        const posts = await Promise.all(
            files.map(async (file) => {
                const res = await fetch(file.download_url);
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                }
                const content = await res.text();
                const { data, content: postContent } = matter(content);
                return { slug: file.name.replace(/\.md$/, ''), title: data.title, date: data.date, content: postContent };
            })
        );

        return posts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}