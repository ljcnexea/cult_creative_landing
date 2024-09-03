"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// # Components for subscription info

const Box = ({ children }) => (
  <motion.div
    whileHover={{
      scale: 1.1,
    }}
    className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-2xl"
  >
    <div className="flex flex-col gap-5 justify-center py-5">{children}</div>
  </motion.div>
);

const Label = ({ isHighlighted, children }) => (
  <div
    className={`border-2 border-[#8A5AFE] ${
      isHighlighted && "bg-[#8A5AFE]"
    } px-5 inline-block rounded-full text-center m-auto`}
  >
    <h3
      className={`text-md ${isHighlighted && "text-[#F4F4F4]"} font-semibold`}
    >
      {children}
    </h3>
  </div>
);

// Both arguments shall be strings
const Price = ({ price, validity }) => (
  <div className="text-center">
    <p className="text-2xl">
      <b>{price}</b>
    </p>
    <p>validity: {validity}</p>
  </div>
);

const Detail = ({ children }) => <p className="text-lg mx-5">{children}</p>;

const ValueAdd = () => (
  <p className="text-sm mx-5">
    Value Add: an in-depth performance report (metrics, audience sentiments &
    suggestions)
  </p>
);

// # Page

const FourthSection = () => {
  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]" id="solutions">
      <h2 className="text-center font-aileron text-7xl md:text-9xl -tracking-[.4rem]">
        find{" "}
        <span className="font-serif -tracking-[.6rem]">
          a <span className="italic">solution</span>
        </span>{" "}
        that <span className="font-serif italic -tracking-[.3rem]">fits</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 mt-16 my-6 px-9">
        <Box>
          <Label>Trial</Label>
          <Price price="RM2,800" validity="1 month" />
          <Detail>
            <b>5</b> UGC Credits
          </Detail>
          <Detail>
            <b>5</b> UGC Videos/Nano-Micro Creators
          </Detail>
          <Detail>
            <b>1</b> Campaign
          </Detail>
          <Detail>
            Credit Validity: <b>1</b> Month
          </Detail>
        </Box>
        <Box>
          <Label>Basic</Label>
          <Price price="RM8,000" validity="3 months" />
          <Detail>
            <b>15</b> UGC Credits
          </Detail>
          <Detail>
            <b>15</b> UGC Videos/Nano-Micro Creators
          </Detail>
          <Detail>
            Up to <b>3</b> Campaigns
          </Detail>
          <Detail>
            Credit Validity: <b>3</b> Months
          </Detail>
        </Box>
        <Box>
          <Label isHighlighted>Essential</Label>
          <Price price="RM15,000" validity="4 months" />
          <Detail>
            <b>30</b> UGC Credits
          </Detail>
          <Detail>
            <b>30</b> UGC Videos/Nano-Micro Creators
          </Detail>
          <Detail>
            Up to <b>6</b> Campaigns
          </Detail>
          <Detail>
            Credit Validity: <b>4</b> Months
          </Detail>
          <ValueAdd />
        </Box>
        <Box>
          <Label>Pro</Label>
          <Price price="RM23,000" validity="8 months" />
          <Detail>
            <b>50</b> UGC Credits
          </Detail>
          <Detail>
            <b>50</b> UGC Videos/Nano-Micro Creators
          </Detail>
          <Detail>
            Up to <b>10</b> Campaigns
          </Detail>
          <Detail>
            Credit Validity: <b>8</b> Months
          </Detail>
          <ValueAdd />
        </Box>
      </div>
      <div className="text-center">
        <div className="text-lg">
          <p className="my-4">
            *Additional charges apply for cross-posting videos and monthly
            ads-usage rights. Bulk price available.
          </p>
          <p className="my-2 font-bold">
            Looking for a better fit? We offer custom packages that can be
            tailored to your campaign needs. Contact us today to learn more.
          </p>
        </div>
        <Link
          href="https://calendly.com/danishmokhtar/30min?month=2024-03"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="uppercase bg-[#8A5AFE] py-2 px-12 rounded-full text-[#F4F4F4] font-aileron font-semibold"
          >
            Let’s Have A Quick Chat
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default FourthSection;
