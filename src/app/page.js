"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import stickerPeace from "../../public/image/sticker-peace.png";
import ariseLogo from "../../public/image/arise_logo.png";
import borderr from "../../public/image/Untitled.png";
import heroImage from "../../public/image/heroImage.jpeg";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

import SplitText from "../components/SplitText";
import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
import ScrollFloat from "../components/ScrollFloat";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navBar = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = navBar.current;

      let isHidden = false;

      gsap.set(element, {
        y: 0,
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",

        onUpdate: (self) => {
          // SCROLL DOWN
          if (self.direction === 1 && !isHidden) {
            isHidden = true;

            gsap.to(element, {
              y: -40,
              duration: 0.5,
              ease: "back.out",
            });
          }

          // SCROLL UP
          if (self.direction === -1 && isHidden) {
            isHidden = false;

            gsap.to(element, {
              y: 0,
              duration: 0.5,
              ease: "back.out",
            });
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const textRef = useRef(null);
  const indexRef = useRef(0);
  const tlRef = useRef(null);

  useEffect(() => {
    const words = ["Hello", "Development", "Community", "Hacker"];

    // Only initialize if ref exists
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      const animateText = () => {
        // Add null check to prevent errors
        if (!textRef.current) return;

        const tl = gsap.timeline({
          onComplete: () => {
            if (!textRef.current) return;

            indexRef.current = (indexRef.current + 1) % words.length;
            textRef.current.innerText = words[indexRef.current];
            animateText();
          },
        });

        tlRef.current = tl;

        tl.fromTo(
          textRef.current,
          {
            y: 120,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1)",
          },
        ).to(textRef.current, {
          y: -120,
          opacity: 1,
          scale: 0.8,
          duration: 0.2,
          delay: 2,
          ease: "power3.in",
        });
      };

      textRef.current.innerText = words[0];
      animateText();
    }, textRef);

    return () => {
      ctx.revert();
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  const handleEnter = (e) => {
    const element = e.currentTarget.querySelector(".nav-text");

    gsap.to(element, {
      y: "-50%",
      duration: 0.4,
      ease: "back.out",
    });
  };

  const handleLeave = (e) => {
    const element = e.currentTarget.querySelector(".nav-text");

    gsap.to(element, {
      y: "0%",
      duration: 0.4,
      ease: "back.out",
    });
  };

  return (
    <>
      <div className="w-screen h-auto pb-15 md:pb-30 relative  bg-[rgb(242,237,233)] text-black  rounded-t-2xl">
        <NavBar></NavBar>

        <div className="w-full bg-black h-15">
          <div className="w-full bg-black fixed h-18 z-11"> hello</div>
        </div>
        <div className="w-full px-5 md:px-14 pt-18 md:pt-35 relative bg-[rgb(242,237,233)] rounded-t-3xl">
          <div className="md:px-20">
            <div className="w-full h-30 flex items-center justify-center gap-8">
              <div className="md:w-[65%]  z-10">
                <h1 className=" text-[20vw] md:2xl:text-[12vw] md:text-[11vw] font-semibold font-bebas text-end ">
                  LET&apos;S CHANGE
                </h1>
              </div>
              <div className="hidden md:flex w-[35%] h-35 bg-[#CAF291] rounded-full relative z-10 items-center">
                <div className=" h-10 w-full relative overflow-hidden">
                  <h3
                    ref={textRef}
                    className="absolute left-[10%] text-4xl"
                  ></h3>
                </div>
                <Image
                  src={stickerPeace}
                  className=" absolute top-[-26] right-5 w-28"
                  alt="peace sticker"
                />
              </div>
            </div>
            <div className="z-5 absolute top-22 md:top-60 w-1/3 md:w-full mt-5 right-0">
              <div className="  flex justify-end">
                <h1 className=" text-[20vw] md:2xl:text-[12vw] md:text-[11vw] relative font-bold h-[26vw] md:h-[15vw] font-bebas bg-[rgb(242,237,233)] pl-3 md:pl-8 pr-6 mt-10 md:mt-0 md:pr-35 rounded-3xl md:rounded-bl-4xl">
                  DEVLOPER!
                  <Image
                    src={borderr}
                    alt="image"
                    className=" absolute w-12 md:w-20 left-[-43] md:left-[-71] top-7 md:top-9 rotate-90 border-4"
                  />
                  <Image
                    src={borderr}
                    alt="image"
                    className=" absolute w-12 md:w-20 right-3.5 md:right-12.5 bottom-[-43.5] md:bottom-[-76] rotate-90 border-4"
                  />
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-amber-900 w-full mt-[-10] md:mt-10 h-90 md:h-120 rounded-4xl overflow-hidden relative z-0">
            <Image
              src={heroImage}
              alt="hero image"
              fill
              objectFit="cover"
              objectPosition="center"
            />
            <div className=" ">
              <div className="left-top  "></div>
              <div className="right-bottom "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto pb-30 flex flex-col md:flex-row justify-center gap-10 bg-[rgb(242,237,233)] text-black px-5 md:px-15 rounded-b-4xl">
        <div className="md:w-1/3 flex justify-center">
          <h1 className=" text-[12vw] md:text-[6vw] leading-[0.9] font-semibold font-bebas">
            <div className="flex md:flex-col gap-2.5">
              <div>We are</div>
              <div>Developer</div>
            </div>
          </h1>
        </div>
        <div className="md:w-2/3 text-md md:text-2xl">
          <div>
            <SplitText
              text="ARISE is a technical community established under the School of Computer Science and Engineering at Lovely Professional University to create a collaborative and innovation-driven environment for students. The community bridges academic learning with practical implementation through real-world projects, technical exploration, and skill development while encouraging active learning and collaboration."
              className=""
              delay={50}
              duration={1}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback={false}
            />
          </div>
          <div className="mt-8">
            <SplitText
              text="ARISE promotes a culture of innovation, teamwork, and execution by connecting passionate learners, developers, designers, and aspiring innovators. Through workshops, technical events, and collaborative initiatives, the community encourages students to explore emerging technologies and build impactful solutions within the university ecosystem."
              className=""
              delay={50}
              duration={1}
              ease="power3.out"
              splitType="lines"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback={false}
            />
          </div>
        </div>
      </div>
      <div className="bg-black h-100 w-full"></div>

      {/* Innovative & Tech solutions */}
      <div className="bg-[rgb(242,237,233)] h-170 md:h-250 w-full rounded-t-4xl ">
        <div className="text-black text-7xl font-bold font-bebas w-full flex justify-center flex-col items-center pt-25">
          <h1>
            Innovative <span className="text-pink-300">Tech</span>
          </h1>
          <h1>Solutions</h1>
        </div>
        <div className="w-full">
          <AppleCardsCarousel></AppleCardsCarousel>
        </div>
      </div>

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
    </>
  );
}
