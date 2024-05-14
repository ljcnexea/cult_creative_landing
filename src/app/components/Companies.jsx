"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Companies = ({ title, companiesImages, rounded, imgStyle, type }) => {
  return (
    <section className="text-[#1340FF]">
      <div className="flex items-center gap-10 px-15">
        <h3 className="lg:text-3xl text-xl -tracking-[.1rem] font-bold">
          {title}
        </h3>
        {/* <h3 className="text-2xl -tracking-[.1rem] font-bold">{title}</h3> */}
        <hr className="grow border-2 border-[#1340FF]" />
      </div>
      {type === "companies" && (
        <div className="p-10 flex flex-nowrap overflow-hidden w-[90vw] mx-auto group">
          <div
            className={`flex gap-32 ${
              type === "companies" &&
              "animate-loop-scroll-companies group-hover:paused scroll-smooth"
            } `}
          >
            <div className="min-w-full flex space-x-24 justify-between">
              {companiesImages?.map((elem, i) => {
                return elem?.link ? (
                  // <Link key={i} href={elem.link}>
                  <Image
                    src={elem.path}
                    alt={elem.name}
                    width={100}
                    height={100}
                    className={`${rounded} ${imgStyle} object-contain`}
                  />
                ) : (
                  // </Link>
                  <Image
                    key={i}
                    src={elem.path}
                    alt={elem.name}
                    width={100}
                    height={100}
                    className={`${rounded} ${imgStyle} object-fit`}
                  />
                );
              })}
            </div>
            <div className="min-w-full flex space-x-24 justify-between">
              {companiesImages?.map((elem, i) => {
                return elem?.link ? (
                  // <Link key={i} href={elem.link}>
                  <Image
                    src={elem.path}
                    alt={elem.name}
                    width={100}
                    height={100}
                    className={`${rounded} ${imgStyle} object-contain`}
                  />
                ) : (
                  // </Link>
                  <Image
                    key={i}
                    src={elem.path}
                    alt={elem.name}
                    width={100}
                    height={100}
                    className={`${rounded} ${imgStyle} object-fit`}
                  />
                );
              })}
            </div>
            {/* {companiesImages?.map((elem, i) => {
              return elem?.link ? (
                // <Link key={i} href={elem.link}>
                <Image
                  src={elem.path}
                  alt={elem.name}
                  width={100}
                  height={100}
                  className={`${rounded} ${imgStyle} object-contain`}
                />
              ) : (
                // </Link>
                <Image
                  key={i}
                  src={elem.path}
                  alt={elem.name}
                  width={100}
                  height={100}
                  className={`${rounded} ${imgStyle}`}
                />
              );
            })} */}
          </div>
        </div>
      )}
      {type === "optics" && (
        <div className="p-10 flex justify-around flex-wrap gap-4">
          {companiesImages?.map((elem, i) => {
            return elem?.link ? (
              // <Link key={i} href={elem.link}>
              <Image
                src={elem.path}
                alt={elem.name}
                width={100}
                height={100}
                className={`${rounded} ${imgStyle} object-contain cursor-pointer`}
              />
            ) : (
              // </Link>
              <Image
                key={i}
                src={elem.path}
                alt={elem.name}
                width={100}
                height={100}
                className={`${rounded} ${imgStyle} object-fit cursor-pointer`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Companies;
