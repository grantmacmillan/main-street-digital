import matter from 'gray-matter';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchBlogPosts() {
    const url = 'https://api.github.com/repos/grantmacmillan/main-street-digital/contents/blogPosts';

    const headers = {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Cache-Control': 'no-cache'
    };

    try {
        const res = await fetch(url, { method: 'GET', headers });
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);

        const files = await res.json();
        const posts = await Promise.all(files.map(async (file) => {
            try {
                const contentRes = await fetch(file.download_url, { method: 'GET', headers });
                if (!contentRes.ok) throw new Error(`Failed to fetch: ${contentRes.status} ${contentRes.statusText}`);

                const content = await contentRes.text();
                const { data, content: postContent } = matter(content);
                return { slug: file.name.replace(/\.md$/, ''), title: data.title, date: data.date, description: data.description, tags: data.tags || [], content: postContent };
            } catch (error) {
                console.error('Error fetching post content:', error);
                return null;
            }
        }));

        return posts.filter(post => post !== null);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}