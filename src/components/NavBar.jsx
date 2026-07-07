"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import ariseLogo from "../../public/image/arise_logo.png";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function NavBar() {
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

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "TEAMS", href: "/teams" },
    { name: "COURSE & BOOTCAMP", href: "/course" },
  ];

  const pathname = usePathname();

  const navBarColor = [
    {
      path: "/",
      color: "bg-[rgb(242,237,233)] text-black",
    },
    {
      path: "/course",
      color: "bg-blue-500 text-black",
    },
  ];

  const currentNavColor =
    navBarColor.find((item) => item.path === pathname)?.color ||
    "bg-white text-black";

  return (
    <div className="fixed w-full z-20 rounded-t-2xl">
      <div className=" bg-black text-white h-9  flex justify-between items-center px-5 md:px-26 z-0">
        <div className="flex gap-4 ">
          <span>
            <a
              href="https://www.linkedin.com/company/arise-builders-community/posts/?feedView=all"
              target="_blank"
            >
              <li
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="h-5 overflow-hidden cursor-pointer"
              >
                <div className="nav-text ">
                  <div className="p-1">
                    <FaLinkedin />
                  </div>
                  <div className="p-1 text-[#CAF291]">
                    <FaLinkedin />
                  </div>
                </div>
              </li>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/arise_builders_community/" target="_blank">
              <li
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="h-5 overflow-hidden cursor-pointer"
              >
                <div className="nav-text ">
                  <div className="p-1">
                    <FaInstagram />
                  </div>
                  <div className="p-1 text-[#CAF291]">
                    <FaInstagram />
                  </div>
                </div>
              </li>
            </a>
          </span>
        </div>
        <div className="cursor-pointer">Arise Builder Community</div>
      </div>
      <div
        id="navColor"
        ref={navBar}
        className={`z-50 w-full rounded-t-3xl transition-colors duration-300 ${currentNavColor}`}
      >
        <nav className="flex justify-between w-full h-15 pt-6 font-oswald font-semibold text-[18px] relative">
          {/* ── DESKTOP: Left links ── */}
          <div className="hidden md:flex w-1/3">
            <ul className="flex w-full justify-center gap-6 lg:gap-15 h-full items-center">
              <li
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="h-5 overflow-hidden cursor-pointer"
              >
                <div className="nav-text leading-[1.1]">
                  <div>
                    <Link href="/">HOME</Link>
                  </div>
                  <div>
                    <Link href="/">HOME</Link>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="h-5 overflow-hidden cursor-pointer"
              >
                <div className="nav-text leading-[1.1]">
                  <div>
                    <Link href="/about">ABOUT</Link>
                  </div>
                  <div>
                    <Link href="/about">ABOUT</Link>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="h-5 overflow-hidden cursor-pointer"
              >
                <div className="nav-text leading-[1.1]">
                  <div>
                    <Link href="/teams">TEAMS</Link>
                  </div>
                  <div>
                    <Link href="/teams">TEAMS</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Logo (always visible, centered on desktop / left on mobile) ── */}
          <div className="flex w-1/3 md:justify-center justify-start h-full items-center">
            <Image src={ariseLogo} className="w-35 pb-1" alt="logo" />
          </div>

          {/* ── DESKTOP: Right links ── */}
          <div className="hidden md:flex w-1/3">
            <ul className="flex w-full justify-center h-full items-center gap-6 lg:gap-15">
              <li
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="h-5 overflow-hidden cursor-pointer"
              >
                <div className="nav-text leading-[1.1]">
                  <div>
                    <Link href="/course">COURSE & BOOTCAMP</Link>
                  </div>
                  <div>
                    <Link href="/course">COURSE & BOOTCAMP</Link>
                  </div>
                </div>
              </li>
              <div className="bg-pink-300 px-6 py-2 border-2 text-black rounded-4xl">
                <li
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className="h-5 overflow-hidden cursor-pointer"
                >
                  <div className="nav-text leading-[1.1]">
                    <div>JOIN US</div>
                    <div>JOIN US</div>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          {/* ── MOBILE: Hamburger button ── */}
          <div className="flex md:hidden w-1/3 justify-end items-center px-10">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center gap-1.25 w-8 h-8 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
              />
            </button>
          </div>

          {/* ── MOBILE: Dropdown menu ── */}
          {menuOpen && (
            <div className="md:hidden absolute top-full mt-4 left-0 w-full bg-white z-50 shadow-lg py-6 flex flex-col items-center gap-6 font-oswald font-semibold text-[18px]">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="list-none h-5 overflow-hidden cursor-pointer"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <Link href={item.href}>
                    <div className="nav-text leading-[1.1]">
                      <div>{item.name}</div>
                      <div>{item.name}</div>
                    </div>
                  </Link>
                </li>
              ))}

              <Link href="/join-us">
                <div className="bg-pink-300 px-6 py-2 border-2 text-black rounded-4xl">
                  <li
                    className="list-none h-5 overflow-hidden cursor-pointer"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    <div className="nav-text leading-[1.1]">
                      <div>JOIN US</div>
                      <div>JOIN US</div>
                    </div>
                  </li>
                </div>
              </Link>
            </div>
          )}
        </nav>

        <div className="w-full flex justify-center">
          <div className="w-full mx-14  border-b-2 pt-5"></div>
        </div>
      </div>
    </div>
  );
}
