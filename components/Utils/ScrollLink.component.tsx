"use client";
import { type ReactNode, type MouseEvent } from "react";

function ScrollLink({
  link,
  title,
  children,
}: {
  link: string;
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  const scrollToElementStart = (
    element: HTMLElement,
    duration: number = 1000,
    offset: string = "1vh"
  ) => {
    const startPosition = window.pageYOffset;
    const targetPosition =
      element.getBoundingClientRect().top +
      startPosition -
      (window.innerHeight * parseFloat(offset)) / 100;

    const startTime = Date.now();

    const easeInOutQuad = (progress: number) => {
      return progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
    };

    const scrollStep = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(
        0,
        startPosition +
          (targetPosition - startPosition) * easeInOutQuad(progress)
      );

      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    scrollStep();
  };

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const link = e.currentTarget.getAttribute("href") || "";
    const targetId: string = link.startsWith("#") ? link.substring(1) : "";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      scrollToElementStart(targetElement);
    }
  };

  return (
    <a
      onClick={handleScroll}
      href={link}
      aria-label={`Learn more about ${title}`}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ScrollLink;