import matter from 'gray-matter';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchFromGitHub(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate', // Ensure no-store to prevent caching
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    return response;
}

export async function fetchBlogPosts() {
    const timestamp = new Date().getTime(); // Add a timestamp to force refresh
    const repoUrl = `https://api.github.com/repos/grantmacmillan/main-street-digital/contents/blogPosts?timestamp=${timestamp}`;

    try {
        const res = await fetchFromGitHub(repoUrl);
        const files = await res.json();
        console.log('Fetched files:', files);

        const posts = await Promise.all(
            files.map(async (file) => {
                try {
                    const contentResponse = await fetchFromGitHub(file.download_url);
                    const content = await contentResponse.text(); // Use text() instead of json()
                    console.log('Content of file:', file.name, content);
                    const { data, content: postContent } = matter(content);
                    console.log('Parsed content:', { data, postContent });

                    return {
                        slug: file.name.replace(/\.md$/, ''),
                        title: data.title,
                        date: data.date,
                        description: data.description,
                        tags: data.tags || [],
                        content: postContent
                    };
                } catch (error) {
                    console.error(`Error fetching content for file ${file.name}:`, error);
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