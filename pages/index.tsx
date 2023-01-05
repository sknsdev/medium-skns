import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import TextBanner from "../components/TextBanner";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TextBanner />
    </div>
  );
};

export default Home;
