import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FilterTags, Footer, JobCard } from "../components";

import data from "../data/data.json";
import { iJobData } from "../interfaces";

const Home: NextPage<{ jobData: iJobData[] }> = (props: {
  jobData: iJobData[];
}) => {
  const { jobData } = props;

  const [filters, setFilters] = useState<string[]>([]);

  const filteredJobData = jobData.filter((job) => {
    if (filters.length <= 0) {
      return job;
    } else if (
      filters.every((tag) =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(tag)
      )
    ) {
      return job;
    }
  });

  const handleAddFilter = (tag: string) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters((prev) => [...prev, tag]);
  };

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

      <main
        className={`relative z-50 px-6 py-8 md:px-0 md:py-[4.6875rem] ${
          filters.length > 0 ? "pt-0 md:pt-0" : ""
        }`}
      >
        <div className="max-w-[69.375rem] mx-auto">
          {filters.length > 0 && (
            <FilterTags
              filters={filters}
              clearFilters={() => setFilters([])}
              removeFilterTag={(tagToRemove: string) =>
                setFilters((prev) => prev.filter((tag) => tag !== tagToRemove))
              }
            />
          )}
          <div className="grid gap-4 md:gap-6">
            {filteredJobData.map((job) => (
              <JobCard
                key={job.id}
                jobInfo={job}
                handleAddFilter={handleAddFilter}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
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
