import Link from 'next/link';
import { fetchBlogPosts } from '../../utils/fetchBlogPosts';

export default async function BlogPage() {
    const posts = await fetchBlogPosts();

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <a>
                                <h2>{post.title}</h2>
                                <p>{new Date(post.date).toLocaleDateString()}</p>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}