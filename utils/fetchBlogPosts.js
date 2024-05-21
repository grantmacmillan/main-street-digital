export async function fetchBlogPosts() {
    const res = await fetch('https://api.github.com/repos/your-username/your-repo/contents/posts');
    const files = await res.json();

    const posts = await Promise.all(
        files.map(async (file) => {
            const res = await fetch(file.download_url);
            const content = await res.text();
            return { slug: file.name.replace(/\.md$/, ''), content };
        })
    );

    return posts;
}