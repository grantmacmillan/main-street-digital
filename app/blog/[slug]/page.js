import { fetchBlogPosts } from '../../../utils/fetchBlogPosts';
import { marked } from 'marked';

export async function generateMetadata({ params }) {
    const posts = await fetchBlogPosts();
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return {
            title: 'Post not found',
            description: 'This post could not be found.',
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            url: `https://mainstreetdigital.com/blog/${post.slug}`,

        },
    };
}

export default async function BlogPostPage({ params }) {
    const posts = await fetchBlogPosts();
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.slug}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
        </div>
    );
}