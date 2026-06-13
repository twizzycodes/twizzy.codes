import { useEffect, useRef } from "react";
import { scrollToSection } from "@/lib/smoothScroll";

export function useSectionScroll(active: boolean) {
  const scrolling = useRef(false);
  const cooldown = useRef(false);

  useEffect(() => {
    if (!active) return;

    const handleWheel = (e: WheelEvent) => {
      if (scrolling.current || cooldown.current) {
        e.preventDefault();
        return;
      }

      const portfolio = document.getElementById("portfolio");
      if (!portfolio) return;

      const portfolioTop = portfolio.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const onProfile = scrollY < portfolioTop * 0.4;
      const nearPortfolioTop = scrollY >= portfolioTop - 80 && scrollY <= portfolioTop + 120;

      const goingDown = e.deltaY > 25;
      const goingUp = e.deltaY < -25;

      if (onProfile && goingDown) {
        e.preventDefault();
        scrolling.current = true;
        scrollToSection("portfolio", 1800).finally(() => {
          scrolling.current = false;
          cooldown.current = true;
          setTimeout(() => { cooldown.current = false; }, 400);
        });
      } else if (nearPortfolioTop && goingUp) {
        e.preventDefault();
        scrolling.current = true;
        scrollToSection("profile", 1800).finally(() => {
          scrolling.current = false;
          cooldown.current = true;
          setTimeout(() => { cooldown.current = false; }, 400);
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [active]);
}
