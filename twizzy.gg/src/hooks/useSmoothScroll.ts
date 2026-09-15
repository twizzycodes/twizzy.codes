import { useEffect } from "react";
import { handleWheelScroll, initSmoothScroll, resetSmoothScroll } from "@/lib/smoothScroll";

export function useSmoothScroll(active: boolean) {
  useEffect(() => {
    if (!active) {
      resetSmoothScroll();
      return;
    }

    initSmoothScroll();

    const onWheel = (e: WheelEvent) => {
      if (handleWheelScroll(e.deltaY)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      resetSmoothScroll();
    };
  }, [active]);
}
