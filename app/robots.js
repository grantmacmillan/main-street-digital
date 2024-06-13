export default function robots() {
    const baseUrl = "https://lamplightweb.ca";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.js`,
    }
}