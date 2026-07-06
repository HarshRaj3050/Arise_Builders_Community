"use client";
import CourseCard from "@/components/CourseCard";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import CourseRegistration from "@/components/CourseRegistration";
import Footer from "@/components/Footer";
import ScrollFloat from "@/components/ScrollFloat";

const Page = () => {
  const stats = [
    { value: "60", label: "Days" },
    { value: "100+", label: "Lectures" },
    { value: "1k+", label: "Questions" },
  ];

  const scrollToContact = () => {
    const section = document.getElementById("course-registration");
    if (!section) return;

    const navbarHeight = 120;
    const topPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-dvw h-auto">
      <div className="text-black">
        <NavBar className="bg-sky-500"></NavBar>
      </div>

      {/* course header */}
      <div className="w-full flex justify-center items-center  pt-40 pb-20 lg:px-20 ">
        <div className="max-w-7xl flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-10 text-white">
          <div className="lg:w-10/12 flex  flex-col gap-8 lg:gap-4">
            <h1 className="md:text-[3.8rem] text-[3rem] lg:text-start text-center leading-14 md:leading-17 font-bold">
              Job-Ready AI Powered Course
            </h1>
            <p className="lg:pr-30 px-8 lg:px-0">
              Build real scalable products used by thousands of users, learn AI
              engineering, full stack development, DevOps, system design, and
              startup building all inside one live Hindi couse
            </p>
          </div>
          <div className="">
            <CourseCard onJoinClick={scrollToContact}></CourseCard>
          </div>
        </div>
      </div>

      {/* Build Real Product */}
      <div className="flex justify-center h-auto mb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,transparent_65%)]" />

        <div className="relative z-10 text-center">
          <h1
            className="
                text-6xl
                md:text-9xl
                font-bold
                tracking-tight
                bg-linear-to-b
                from-sky-300
                via-blue-400
                to-blue-700
                bg-clip-text
                text-transparent"
          >
            Build Real Products
          </h1>

          <h3 className="mt-6 text-xl md:text-5xl font-light text-white">
            That Actually Matters To The World
          </h3>

          <motion.div
            className="mt-25 w-full flex justify-center"
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/buildRealProduct.png"
              width={900}
              height={300}
              alt="image"
            />
          </motion.div>
        </div>
      </div>

      <div className="min-h-auto bg-black flex items-center justify-center gap-3 md:gap-8 pb-10">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="
            lg:w-70 lg:h-65
            md:w-50 md:h-50
            w-27 h-25
            rounded-2xl
            md:rounded-[50px]
            border-2 border-blue-500
            bg-black
            flex flex-col items-center justify-center
            shadow-[0_0_30px_rgba(59,130,246,0.35)]
            transition-all duration-300
          "
          >
            <h2 className="lg:text-8xl md:text-7xl text-3xl font-bold text-blue-400 leading-none">
              {item.value}
            </h2>

            <p className="md:mt-4 lg:text-5xl text-lg md:text-3xl font-medium text-blue-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center pb-20">
        <div
          className="
            lg:w-230 lg:h-65
            md:w-165 md:h-50
            w-87 h-25
            rounded-2xl
            md:rounded-[50px]
            border-2 border-blue-500
            bg-black
            flex flex-col items-center justify-center
            shadow-[0_0_30px_rgba(59,130,246,0.35)]
            transition-all duration-300
          "
        >
          <h2 className="lg:text-7xl md:text-5xl text-2xl font-bold text-blue-400 leading-none">
            Funding Opportunity
          </h2>

          <p className="md:mt-4 lg:text-3xl text-xs md:text-2xl font-medium text-blue-400 mt-2">
            We fund projects if we believe they're worth investing in.
          </p>
        </div>
      </div>

      <CourseRegistration></CourseRegistration>

      {/* Footer */}
      <div className="relative md:h-160 h-230 overflow-hidden ">
        <Footer className="" />

        <div className="absolute md:top-90 sm:top-180 top-190 w-full flex justify-center ">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="start bottom+=200%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            ARISE
          </ScrollFloat>
        </div>
        <div className="h-200 bg-black"></div>
      </div>
    </div>
  );
};

export default Page;
