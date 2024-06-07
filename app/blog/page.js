import { fetchBlogPosts } from '../../utils/fetchBlogPosts';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogPage() {
    const posts = await fetchBlogPosts();
    const defaultImage = '/images/no-thumbnail.jpg'; // Path to your default image

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <div>
                                <Image
                                    src={post.thumbnail || defaultImage}
                                    alt={post.title}
                                    width={150} // Adjust width as needed
                                    height={100} // Adjust height as needed
                                    objectFit="cover"
                                />
                                <h2>{post.title}</h2>
                                <p>{new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</p>
                                <p>{post.description}</p>
                                <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}