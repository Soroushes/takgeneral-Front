module.exports = {
    images: {
        domains: ['api.takgeneral.com', 'swiperjs.com' , 'logo.samandehi.ir' , 'trustseal.enamad.ir'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        nextScriptWorkers: true,
    },
    async redirects() {
        const staticRedirects = [{source : '/:path/' , destination : '/:path' , statusCode : 301}]
        const persianRegex = /[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF]/;
        const res = await fetch(`https://api.takgeneral.com/redirects/`, {cache: 'no-store'});
        if (!res.ok) {
            throw new Error('fail to fetch redirects');
        }
        const data = await res.json();
        const asyncRedirects = data.map((redirect) => {
            const finalSourceAddress = redirect.source.split('/').map((item)=>{
                if (persianRegex.test(item)){
                    return encodeURI(item)
                } else return item ;
            })
            return {
                source: `${finalSourceAddress.join('/')}`,
                destination: redirect.destination,
                statusCode: redirect.permanent ? 301 : 302
            }
        })
        return [...asyncRedirects , ...staticRedirects] ;
    },
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: {not: /url/}, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )
        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i
        return config
    },
}