import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components';
import { SearchContextProvider } from '@/context/SearchContext';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    // This ensures that data is not shared
    // between different users and requests
    const [queryClient] = useState(() => new QueryClient());
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

            <QueryClientProvider client={queryClient}>
                {/* Hydrate query cache */}
                <Hydrate state={pageProps.dehydratedState}>
                    <SearchContextProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </SearchContextProvider>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
