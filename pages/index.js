import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Upload from "@/components/Upload";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			<Head>
				<title>IPFS File Uploader</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
			<Analytics />
				<h1 className="text-2xl text-center font-semibold mb-4">IPFS File Uploader</h1>
				<Upload />
			</main>
		</div>
	);
}
