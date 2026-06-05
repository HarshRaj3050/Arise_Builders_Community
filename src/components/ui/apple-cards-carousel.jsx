"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import Image from "next/image";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isJumping = useRef(false);

  // Triple the items for infinite loop: [clone | original | clone]
  const tripled = [...items, ...items, ...items];
  const sectionCount = items.length;

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  // On mount, silently jump to the middle copy
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    // Calculate the width of one full section (items.length cards)
    const cardWidth = isMobile() ? 234 : 392; // card + gap
    const midOffset = cardWidth * sectionCount;
    el.scrollLeft = midOffset;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el || isJumping.current) return;

    const cardWidth = isMobile() ? 234 : 392;
    const sectionWidth = cardWidth * sectionCount;
    const { scrollLeft, scrollWidth, clientWidth } = el;

    // If scrolled into the last clone, jump back to middle copy
    if (scrollLeft >= sectionWidth * 2) {
      isJumping.current = true;
      el.scrollLeft = scrollLeft - sectionWidth;
      isJumping.current = false;
    }
    // If scrolled into the first clone, jump forward to middle copy
    if (scrollLeft <= 0) {
      isJumping.current = true;
      el.scrollLeft = scrollLeft + sectionWidth;
      isJumping.current = false;
    }
  }, [sectionCount]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full bg-[rgb(242,237,233)]">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto pt-10 [scrollbar-width:none] md:pt-10 pb-5"
          ref={carouselRef}
          onScroll={handleScroll}>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
            )}>
            {tripled.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.05 * (index % sectionCount),
                    ease: "easeOut",
                  },
                }}
                key={"card-" + index}
                className="rounded-3xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 cursor-pointer "
            onClick={scrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-200" />
          </button>
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 cursor-pointer"
            onClick={scrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-gray-200" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-[rgb(242,237,233)] backdrop-blur-lg" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-60 mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-[rgb(242,237,233)] p-4 font-sans md:p-10 dark:bg-neutral-900">
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}>
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white">
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-64 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[512px] md:w-96 dark:bg-neutral-900">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-linear-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-balance text-white md:text-3xl">
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest} />
  );
};
