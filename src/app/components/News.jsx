import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = ({ image, date, link, title, source, type, path, author, authorImage }) => {
  const href = type === "resource" ? path : link;

  const imageWidthClass = type === "newsroom" ? "md:w-full" : "md:w-3/5";

  return (
    <div className={`flex flex-col md:${type === "newsroom" ? "flex-col" : "flex-row"} bg-stone-100 rounded-lg overflow-hidden p-3 mb-4 w-full`}>
      {/* Image Section */}
      <div className={`flex-shrink-0 w-full ${imageWidthClass} h-[300px] relative mb-3 md:mb-0`}>
        {image ? (
          <Link href={href} passHref>
            <div className="w-full h-full relative cursor-pointer">
              <Image
                src={image}
                alt={source}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </Link>
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg"></div>
        )}
      </div>

      {/* Text Section */}
      <div className="flex-grow flex flex-col justify-center p-3">
        <Link href={href} passHref>
          <div className="flex flex-col h-full text-black cursor-pointer">
            {type !== "resource" && (
              <div className="inline-flex gap-1 text-xs text-black mb-2 md:mb-3">
                <p className="font-semibold">Featured</p>
                <p>.</p>
                <p>{date}</p>
              </div>
            )}
            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 leading-tight">
              {title}
            </p>
            {author && (
              <div className="flex items-center text-[10px] md:text-xs text-gray-700 mb-2 md:mb-3">
                <Image
                  src={authorImage}
                  alt={author}
                  width={24} 
                  height={24} 
                  className="rounded-full mr-2"
                />
                <p>
                  Written by <span className="font-semibold">{author}</span>
                </p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default News;
