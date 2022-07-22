import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-500">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Job Listing</title>
      </Head>
    </div>
  );
};

export default Home;
