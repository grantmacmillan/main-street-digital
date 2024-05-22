import { fetchBlogPosts } from '../../../utils/fetchBlogPosts';
import { marked } from 'marked';

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    const posts = await fetchBlogPosts();
    const post = posts.find((post) => post.slug === slug);
    console.log('Fetched post:', post); // Log the post to ensure it is fetched

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
            <div>
                <strong>Tags:</strong> {post.tags.join(', ')}
            </div>
        </div>
    );
}