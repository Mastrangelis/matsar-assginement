import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
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

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
