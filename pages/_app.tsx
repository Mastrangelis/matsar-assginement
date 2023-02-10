import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components';

import '@/styles/globals.css';
import { SearchContextProvider } from '@/context/SearchContext';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    // This was needed due to hydration errors
    // caused with the use of localstorage for recent searches
    const [renderApp, setRenderApp] = useState<boolean>(false);

    useEffect(() => {
        setRenderApp(true);
    }, []);

    if (!renderApp) return null;

    return (
        <>
            <Head>
                <title>Mat-Spar | Nikos Mastrangelis</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <SearchContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SearchContextProvider>
        </>
    );
}
