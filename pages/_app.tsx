import type {AppProps} from 'next/app'
import Head from "next/head";
import Layout from "../components/layout";

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../styles/dashboard.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>My Dashboard</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
