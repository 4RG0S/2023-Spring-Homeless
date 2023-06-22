import { useRef, useCallback, useEffect } from "react";


type useScrollFadeProps = {
  duration: number;
};

const useScrollFade = ({ duration }: useScrollFadeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((entries: IntersectionObserverEntry[]) => {
    const { current } = ref;

    if (current) {
      const entry = entries[0];
      const brightness = entry.isIntersecting
        ? Math.pow(entry.intersectionRatio, 10) * 100
        : 0;

      current.style.filter = `brightness(${brightness}%)`;
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null;
    const { current } = ref;

    if (current) {
      current.style.transition = `filter ${duration}s cubic-bezier(0, 0, 0.2, 1)`;

      observer = new IntersectionObserver(handleScroll, {
        rootMargin: "50%",
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      });

      observer.observe(current);

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [handleScroll, duration]);

  return {
    ref,
    style: {
      opacity: 1,
    },
  };
};

export default useScrollFade;
