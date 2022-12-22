import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Layout from "@/components/Layout";

const alaskaFont = localFont({
    src: [
        {
            path: "./../fonts/Alaska Trial WOFF2/AlasTrial-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./../fonts/Alaska Trial WOFF2/AlasTrial-Medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout className={alaskaFont.className}>
            <Component {...pageProps} />
        </Layout>
    );
}
