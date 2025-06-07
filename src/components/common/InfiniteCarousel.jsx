import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';


const InfiniteCarousel = ({ logos }) => {
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
