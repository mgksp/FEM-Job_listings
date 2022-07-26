import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { JobCard } from "../components";

import data from "../data/data.json";
import { iJobData } from "../interfaces";

const Home: NextPage<{ jobData: iJobData[] }> = (props: {
  jobData: iJobData[];
}) => {
  const { jobData } = props;

  return (
    <div className="min-h-screen bg-lightGrayishCyanBg">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Job Listing</title>
      </Head>

      <div className="relative w-full h-[9.75rem] bg-desaturatedDarkCyan">
        <div className="h-full w-full md:hidden">
          <Image
            src="/images/bg-header-mobile.svg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="hidden md:block h-full w-full">
          <Image
            src="/images/bg-header-desktop.svg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <main className="px-6 py-8">
        <div className="grid gap-4">
          {jobData.map((job) => (
            <JobCard key={job.id} jobInfo={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ jobData: iJobData[] }>
> => {
  return {
    props: {
      jobData: data,
    },
    revalidate: 60,
  };
};

export default Home;
