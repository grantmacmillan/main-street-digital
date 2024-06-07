import { fetchBlogPosts } from '../../utils/fetchBlogPosts';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default async function BlogPage() {
    const posts = await fetchBlogPosts();
    const defaultImage = '/images/no-thumbnail.jpg'; // Path to your default image

    return (
        <Container className="mt-5 blog-list-container">
            <h2 className="header">Latest Stories</h2>
            <Row className="postList">
                {posts.map((post) => (
                    <Col key={post.slug} sm={12} className="mb-4">
                        <Link href={`/blog/${post.slug}`} passHref>
                            <div className="postContent d-flex">
                                <div className="thumbnail me-3">
                                    <Image
                                        src={post.thumbnail || defaultImage}
                                        alt={post.title}
                                        width={150}
                                        height={100}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="textContent">
                                    <h2 className="postTitle">{post.title}</h2>
                                    <p className="postDescription">{post.description}</p>
                                    <div className="postMeta">
                                        <p className="postDate">{new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</p>
                                        <p className="postTags"><strong>Tags:</strong> {post.tags.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}