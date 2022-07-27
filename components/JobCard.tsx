import Image from "next/image";
import { iJobData } from "../interfaces";

interface JobCardProps {
  jobInfo: iJobData;
}

export default function JobCard({ jobInfo }: JobCardProps) {
  return (
    <div className="">
      <div className="relative h-12 w-12 -mb-6 ml-6 md:hidden">
        <Image
          src={jobInfo.logo.substring(1)}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className={`bg-white rounded p-6 pt-9 ${
          jobInfo.featured
            ? "border-l-[5px] border-desaturatedDarkCyan pl-[1.1875rem] md:pl-[2.1875rem]"
            : ""
        } md:flex items-center justify-between md:px-10 md:py-8`}
      >
        <div className="border-b-[1px] pb-3 md:pb-0 md:border-b-0 md:flex gap-6 items-center">
          <div className="relative hidden md:block h-[5.5rem] w-[5.5rem]">
            <Image
              src={jobInfo.logo.substring(1)}
              alt="logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-2 md:gap-1">
            <div className="flex items-center">
              <h1 className="text-15 font-bold text-desaturatedDarkCyan mr-6 md:text-lg">
                {jobInfo.company}
              </h1>
              <div className="flex gap-2">
                {jobInfo.new && (
                  <div className="rounded-full bg-desaturatedDarkCyan px-2 py-1 text-white font-bold text-sm">
                    NEW!
                  </div>
                )}
                {jobInfo.featured && (
                  <div className="rounded-full bg-veryDarkGrayishCyan px-2 py-1 text-white font-bold text-sm">
                    FEATURED
                  </div>
                )}
              </div>
            </div>
            <h2 className="text-15 font-bold text-veryDarkGrayishCyan md:text-[1.375rem]">
              {jobInfo.position}
            </h2>
            <div className="flex items-center gap-2 text-base text-darkGrayishCyan md:text-lg">
              <span className="">{jobInfo.postedAt}</span>
              <span className="">•</span>
              <span className="">{jobInfo.contract}</span>
              <span className="">•</span>
              <span className="">{jobInfo.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          {[
            jobInfo.role,
            jobInfo.level,
            ...jobInfo.languages,
            ...jobInfo.tools,
          ].map((tag, idx) => (
            <div
              key={idx}
              className="px-2 py-1 rounded text-desaturatedDarkCyan bg-lightGrayishCyanBg font-bold text-base"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
