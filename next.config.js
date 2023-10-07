module.exports = {
    images: {
        domains: ['sahm.soroushes.tk' , 'swiperjs.com' , 'api.soroushes.tk'],
    },
    experimental : {
        appDir : true
    } ,
    async redirects() {
        const res = await fetch(`https://sahm.soroushes.tk/redirects/` ,{cache: 'no-store'}) ;
        if (!res.ok){
            throw new Error('fail to fetch redirects') ;
        }
        const data = await res.json() ;
        return data.map((redirect)=>({source : redirect.source , destination : redirect.destination , permanent : redirect.permanent }))
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
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )
        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i
        return config
    },
}