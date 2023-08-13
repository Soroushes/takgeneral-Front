'use client';
import * as React from 'react';
import createCache from '@emotion/cache';
import {useServerInsertedHTML} from 'next/navigation';
import {CacheProvider} from '@emotion/react';
import {Provider} from "react-redux";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {store} from "@/redux/store";

export default function NextAppDirEmotionCacheProvider(props) {
    const options = {key: 'muirtl', stylisPlugins: [prefixer, rtlPlugin]}
    const {children} = props;
    const [{cache, flush}] = React.useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {cache, flush};
    });

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: options.prepend ? `@layer emotion {${styles}}` : styles
                }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <Provider store={store}>
                {children}
            </Provider>
        </CacheProvider>
    );
}