import Link from 'next/link';
import { fetchBlogPosts } from '../../utils/fetchBlogPosts';

export default async function BlogPage() {
    const posts = await fetchBlogPosts();
    console.log('Posts:', posts); // Add this line to debug

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <div>
                                <h2>{post.title}</h2>
                                <p>{new Date(post.date).toLocaleDateString()}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}