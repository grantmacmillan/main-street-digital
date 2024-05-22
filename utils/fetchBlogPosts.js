import matter from 'gray-matter';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchBlogPosts() {
    const url = 'https://api.github.com/repos/grantmacmillan/main-street-digital/contents/blogPosts';

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'X-GitHub-Api-Version': '2022-11-28',
                'Expires': '0'
            }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const files = await res.json();
        console.log('Fetched files:', files);

        const posts = await Promise.all(
            files.map(async (file) => {
                try {
                    const res = await fetch(file.download_url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/vnd.github+json',
                            'Authorization': `Bearer ${GITHUB_TOKEN}`,
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache',
                            'X-GitHub-Api-Version': '2022-11-28',
                            'Expires': '0'
                        }
                    });
                    if (!res.ok) {
                        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
                    }
                    const content = await res.text();
                    const { data, content: postContent } = matter(content);
                    return { slug: file.name.replace(/\.md$/, ''), title: data.title, date: data.date, description: data.description, tags: data.tags || [], content: postContent };
                } catch (error) {
                    console.error('Error fetching post content:', error, 'File:', file);
                    return null;
                }
            })
        );

        return posts.filter(post => post !== null);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}