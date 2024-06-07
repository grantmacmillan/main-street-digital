import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Helper function to read a file and return its content
function readFileContent(filePath) {
    return fs.promises.readFile(filePath, 'utf8');
}

// Fetch blog posts from local filesystem
export async function fetchBlogPosts() {
    const postsDirectory = path.join(process.cwd(), 'blogPosts');

    try {
        const filenames = await fs.promises.readdir(postsDirectory);
        const posts = await Promise.all(
            filenames.map(async (filename) => {
                const filePath = path.join(postsDirectory, filename);
                const fileContent = await readFileContent(filePath);
                const { data, content: postContent } = matter(fileContent);

                return {
                    slug: filename.replace(/\.md$/, ''),
                    title: data.title,
                    date: data.date,
                    description: data.description,
                    tags: data.tags || [],
                    thumbnail: data.thumbnail || '',
                    content: postContent
                };
            })
        );

        return posts.filter(post => post !== null);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}