import { useEffect } from "react";

const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const smoothScrollTo = (targetY: number, duration = 800) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | null = null;

    const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);

        window.scrollTo(0, startY + diff * easeInOutQuad(percent));

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};

const SmoothScrollHandler = () => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const scrollToAttr =
                target.getAttribute("data-scroll-to") ||
                target.closest("[data-scroll-to]")?.getAttribute("data-scroll-to");

            if (scrollToAttr) {
                event.preventDefault();
                const el = document.getElementById(scrollToAttr);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 100;
                    smoothScrollTo(top, 2000);
                }
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return null; // Ten komponent nic nie renderuje
};

export default SmoothScrollHandler;
