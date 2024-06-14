import { fetchBlogPosts } from '../../../utils/fetchBlogPosts';
import { marked } from 'marked';


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


// Helper function to fetch post data and metadata

// Helper function to fetch post data and metadata
export async function getPostData(slug) {
    const posts = await fetchBlogPosts();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return {
            post: null,
            metadata: {
                title: 'Post not found',
                description: 'The post you are looking for does not exist.',
            }
        };
    }

    const metadata = {
        title: post.title,
        description: post.description,
        keywords: post.tags.join(', '),
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `${BASE_URL}/blog/${post.slug}`,
        },
        twitter: {
            title: post.title,
            description: post.description,
        },
        alternates: {
            canonical: `${BASE_URL}/blog/${post.slug}`
        }
    };

    return { post, metadata };
}

// Export metadata function
export async function generateMetadata({ params }) {
    const { metadata } = await getPostData(params.slug);
    return metadata;
}

export default async function BlogPostPage({ params }) {
    const { post } = await getPostData(params.slug);

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

export async function generateStaticParams() {
    const posts = await fetchBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}