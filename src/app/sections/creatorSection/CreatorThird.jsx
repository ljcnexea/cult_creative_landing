"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

const CreatorThird = () => {
  return (
    <section className="p-8 bg-[#1340FF] text-[#F4F4F4]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row w-[87%] items-center content-center">
          <h2 className="xl:text-8xl lg:text-8xl text-7xl basis-1/2 m-2 -tracking-[.6rem] text-center">
            we’re{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-times italic font-light -tracking-[.4rem]"
            >
              different{" "}
            </motion.span>
          </h2>
          <p className="basis-1/2 lg:text-2xl text-xl">
            We make sure you get paid in 30 days. No paperwork, no hassle. Just
            focus on being creative.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row py-5">
          <div className="rounded-full  border-2 border-solid lg:p-5 p-3 my-4 mx-3 text-center">
            <p className="xl:text-7xl lg:text-6xl  text-3xl font-bold uppercase xl:-tracking-[.45rem] lg:-tracking-[.10rem] ">
              <CountUp start={0} end={50} /> completed campaigns
            </p>
          </div>
          <div className="rounded-full  border-2 border-solid lg:p-5 p-3 my-4  mx-3 text-center">
            <p className="xl:text-7xl lg:text-6xl text-3xl font-bold uppercase xl:-tracking-[.45rem] lg:-tracking-[.10rem] ">
              <CountUp start={0} end={2700} /> creators matched
            </p>
          </div>
        </div>
        <div className="py-9 text-center ">
          <p className="lg:text-7xl text-3xl basis-1/2">
            <span className="lg:-tracking-[.5rem]">RM230k</span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className=" lg:text-8xl text-3xl font-times font-light lg:-tracking-[.4rem]"
            >
              <span className="italic">creator</span> payments
            </motion.span>{" "}
            <span className="lg:-tracking-[.5rem]">processed</span>
          </p>
        </div>
        <div className="p-3">
          <Link href="/creators/contact">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="bg-slate-100 py-2 px-12 rounded-full text-[#1340FF] font-aileron font-bold uppercase"
            >
              Get Started As A Creator
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CreatorThird;
