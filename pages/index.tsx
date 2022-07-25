import type {
  GetStaticProps,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";

import data from "../data/data.json";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { jobData } = props;
  console.log(jobData);
  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{}>
> => {
  return {
    props: {
      jobData: data,
    },
    revalidate: 60,
  };
};

export default Home;
