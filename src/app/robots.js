export default function robots(){
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/login',
        },
        sitemap: 'https://takgeneral.com/sitemap.xml',
    }
}