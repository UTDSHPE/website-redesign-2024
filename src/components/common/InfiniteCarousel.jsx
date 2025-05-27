import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Logos live in public/, so these paths resolve at runtime
const defaultLogos = [
    { src: "/photos/ScrollLogos/CapitalOne.png", url: "https://www.capitalone.com/" },
    { src: "/photos/ScrollLogos/chase_300x300.png", url: "https://www.chase.com/" },
    { src: "/photos/ScrollLogos/emerson.png", url: "https://www.emerson.com/en-us" },
    { src: "/photos/ScrollLogos/Geico.png", url: "https://www.geico.com/" },
    { src: "/photos/ScrollLogos/Microsoft.png", url: "https://www.microsoft.com/en-us/" },
    { src: "/photos/ScrollLogos/qorvo-logo.png", url: "https://www.qorvo.com/" },
    { src: "/photos/ScrollLogos/TI-logo.png", url: "https://www.ti.com/" },
    { src: "/photos/ScrollLogos/goldman-sachs.png", url: "https://www.goldmansachs.com/" },
];

const InfiniteCarousel = ({ logos = defaultLogos }) => {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const inner = scroller.querySelector('.scroll_inner');
        if (!inner || inner.dataset.cloned === 'true') return;

        // Clone each item *twice* so we have three sets back-to-back
        const items = Array.from(inner.children);
        items.forEach(item => inner.appendChild(item.cloneNode(true)));
        items.forEach(item => inner.appendChild(item.cloneNode(true)));

        inner.dataset.cloned = 'true';
    }, []);

    return (
        <div ref={scrollerRef} className="scroller max-w-[1200px] overflow-hidden">
            <div className="scroll_inner flex flex-nowrap gap-3 ">
                {logos.map((logo, i) => (
                    <Link key={i} to={logo.url} className="flex-none">
                        <img
                            src={logo.src}
                            alt={`logo ${i + 1}`}
                            className="h-28 object-contain"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
