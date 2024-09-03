"use client";

import Header from "@/app/components/Header.jsx";
import LastSection from "@/app/sections/brandsection/LastSection.jsx";
import Image from "next/image";
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";

// Components for resource pages
// Recommended: import * as rp

// children should contain the elements defined here
// keywords shall be an array of strings
export const Page = ({ children, keywords = [], relatedResources = [], latestResources = [] }) => {
  // Limit the number of latest resources shown to 5
  const desktopResourceLimit = 5;
  const displayedResources = latestResources.slice(0, desktopResourceLimit);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <div className="text-center py-10 bg-[#8A5AFE]">
          <p className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 bg-slate-50 text-gray-500">
          {/* Content */}
          <div className="col-span-1 md:col-span-2 text-pretty text-[1.1rem]">
            {children}
          </div>

          {/* Keywords */}
          <div className="col-span-1 p-5">
            <div className="mt-8">
              <p className="text-start text-xl md:text-2xl font-semibold text-black">You’ll Also Like</p>
              <div className="flex flex-wrap gap-2 my-4">
                {relatedResources.length > 0 ? (
                  relatedResources.map((relatedResource) => (
                    <div key={relatedResource.path} className="flex flex-col gap-2 mb-4 sm:flex-row sm:gap-4">
                      <Link href={relatedResource.path}>
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 cursor-pointer overflow-hidden">
                          <Image
                            src={relatedResource.image}
                            alt={relatedResource.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                          />
                        </div>
                      </Link>
                      <div className="flex flex-col justify-center">
                        <Link href={relatedResource.path} passHref>
                          <p className="text-sm sm:text-base font-medium text-black no-underline cursor-pointer">
                            {relatedResource.title}
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No related resources available.</p>
                )}
              </div>
            </div>
            <p className="text-start text-xl md:text-2xl font-semibold text-pretty text-black">
              Keywords
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              {keywords.map((elem, i) => (
                <div key={i} className="p-2 bg-[#DFD4FA] text-[#8A5AFE] rounded-full text-xs font-semibold">
                  {elem}
                </div>
              ))}
            </div>
          </div>
          {/* The Latest */}
          <div className="col-span-1 md:col-span-3">
            <div className="mt-8">
              <p className="text-start text-xl md:text-2xl font-times font-semibold text-black">
                The <i className="font-times italic text-[1.5rem] md:text-[1.75rem]">latest</i>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedResources.length > 0 ? (
                  displayedResources.map((latestResource) => (
                    <div key={latestResource.path} className="flex flex-col gap-4">
                      <Link href={latestResource.path}>
                        <div className="relative w-full h-56 flex-shrink-0 cursor-pointer overflow-hidden">
                          <Image
                            src={latestResource.image}
                            alt={latestResource.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                          />
                        </div>
                      </Link>
                      <div className="flex flex-col items-center">
                        <Link href={latestResource.path} passHref>
                          <p className="text-lg font-medium text-black text-center no-underline cursor-pointer">
                            {latestResource.title}
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No latest resources available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <LastSection color="#1340FF" />
    </>
  );
};

export const h1 = ({ children }) => (
  <h1 className="text-start text-3xl md:text-4xl font-semibold text-pretty text-black mb-8 md:mb-10" style={{ lineHeight: 1.2 }}>
    {children}
  </h1>
);

export const h2 = ({ children }) => (
  <h2 className="text-start text-xl md:text-2xl font-semibold text-pretty text-black my-6 md:my-10">
    {children}
  </h2>
);

export const h3 = ({ children }) => (
  <h3 className="text-start text-lg md:text-xl font-semibold text-pretty text-black my-6 md:my-10">
    {children}
  </h3>
);

export const p = ({ children }) => (
  <p className="my-3 text-base md:text-lg">
    {children}
  </p>
);

export const ol = ({ children }) => (
  <ol className="list-decimal ml-8 md:ml-10 my-5 text-base md:text-lg">
    {children}
  </ol>
);

export const ul = ({ children }) => (
  <ul className="list-disc ml-8 md:ml-10 my-5 text-base md:text-lg">
    {children}
  </ul>
);

export const li = ({ children }) => (
  <li className="my-3 text-base md:text-lg">
    {children}
  </li>
);

export const a = ({ href, children }) => (
  <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-base md:text-lg" href={href}>
    {children}
  </a>
);

export const IgEmbed = ({ url }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <InstagramEmbed url={url} />
  </div>
);
