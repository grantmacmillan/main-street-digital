import { fetchBlogPosts } from '../../../utils/fetchBlogPosts';

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    const posts = await fetchBlogPosts();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.slug}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}