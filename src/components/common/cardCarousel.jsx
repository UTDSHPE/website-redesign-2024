import React, { useRef, useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import useIsMobile from '../../hooks/useIsMobile.js'
import clsx from 'clsx'
import Mailto from './Mailto.jsx'

const bulletText = [
    "General Meeting Presentation",
    "Social Media Spotlight",
    "Invitation to Annual Gala",//all
    "Invitation to Señoritas Dinner",
    "Website Recognition",//silver,gold,plat
    "Resume Book",//gold,plat
    "Gala Speech (Optional)",
    "Networking Mixer"//platinum
];


const sponsorshipTiers = [
    { id: 1, title: "Platinum", color: "bg-[#C5C5C5]", price:"$2000+",bullets: bulletText },
    { id: 2, title: "Gold", color: "bg-[#EFBF04]", price: "$1500+",bullets: bulletText.slice(0, 6) },
    { id: 3, title: "Silver", color: "bg-[#BCC6CC]", price: "$1000+", bullets: bulletText.slice(0, 5) },
    { id: 4, title: "Bronze", color: "bg-[#CE8946]", price: "$500+", bullets: bulletText.slice(0, 3) }
];

const BulletPoint = ({ text }) => {
    const isMobile = useIsMobile(); 
    return (
        <div className="flex items-start gap-2 w-full min-w-0 my-1">
            <img
                src="/logos/shpe_logo.png"
                alt="bullet"
                className={clsx('flex-shrink-0', isMobile ? "h-5 w-5" : "h-7 w-7")}
            />
            <span className={clsx("text-left flex-1 whitespace-normal break-words font-medium font-interTight leading-snug",isMobile?"text-md":"text-lg")}>
                {text}
            </span>
        </div>
    );
};



export default function CardCarousel() {
    const isMobile = useIsMobile(); 
    const containerRef = useRef(null);                // ref to the scrollable container
    const [activeIndex, setActiveIndex] = useState(0); // index of the centered card

    const scrollToIndex = (newIndex) => {
        if (
            !containerRef.current ||                      // if no container or index out of bounds, abort
            newIndex < 0 ||
            newIndex >= sponsorshipTiers.length
        )
            return;

        const container = containerRef.current;
        const targetCard = container.children[newIndex]; // target card element

        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
        setActiveIndex(newIndex);                        // update active index
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;                          // if no container, do nothing

        const handleScroll = () => {
            const cards = Array.from(container.children);  // array of card elements
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(cardCenter - containerCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== activeIndex) {
                setActiveIndex(closestIndex);                // update if a different card is closest
            }
        };

        container.addEventListener("scroll", handleScroll);  // listen for manual scroll
        return () => container.removeEventListener("scroll", handleScroll); // cleanup
    }, [activeIndex]);

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4"> {/* main wrapper */}
            <div className="flex items-center gap-4 mb-6"> {/* navigation row */}
                {/* Left Arrow */}
                <button
                    onClick={() => scrollToIndex(activeIndex - 1)} // scroll to previous
                    disabled={activeIndex === 0}                   // disable at first
                    aria-label="Previous"
                    className=" p-0 m-0 bg-transparent border-none focus:outline-none focus-visible:outline-none"                  // remove default focus ring on button
                >
                    <FaArrowAltCircleLeft
                        className={`w-7 h-7 ${activeIndex === 0
                            ? "text-gray-300 cursor-not-allowed"     // disabled: gray + no pointer
                            : "text-black hover:text-gray-500 cursor-pointer" // active: black, lighten on hover
                            }`}
                    />
                </button>

                <span className="text-sm text-gray-600 font-medium">
                    {activeIndex + 1} of {sponsorshipTiers.length}   {/* position indicator */}
                </span>

                {/* Right Arrow */}
                <button
                    onClick={() => scrollToIndex(activeIndex + 1)} // scroll to next
                    disabled={activeIndex === sponsorshipTiers.length - 1} // disable at last
                    aria-label="Next"
                    className="p-0 m-0 bg-transparent border-none focus:outline-none focus-visible:outline-none"
                >
                    <FaArrowAltCircleRight
                        className={`w-7 h-7 ${activeIndex === sponsorshipTiers.length - 1
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-black hover:text-gray-500 cursor-pointer"
                            }`}
                    />
                </button>
            </div>
            {/*cards */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 w-full" /* carousel container */
                style={{
                    scrollbarWidth: "none",              // Firefox: hide scrollbar
                    msOverflowStyle: "none",             // IE/Edge: hide scrollbar
                    paddingLeft: "calc(50% - 128px)",     // center first card (half container – half card)
                    paddingRight: "calc(50% - 128px)",    // center last card
                }}
            >
                {sponsorshipTiers.map((item, idx) => (
                    <div
                        key={item.id}
                        onClick={() => scrollToIndex(idx)}
                        className={`
                     relative overflow-hidden snap-center flex-shrink-0 min-w-0 mx-2 w-72 min-h-fit rounded-lg text-white
                     ${item.color} flex flex-col items-start justify-start p-4
                     transform transition-all duration-300 shadow-lg 
                     ${idx === activeIndex ? "z-10 shadow-2xl" : "z-0"}
                   `}
                    >
                        {/* Shine overlay */}
                        <div className="absolute inset-0 before:absolute before:inset-y-0 before:left-0 before:w-1/3 before:bg-white before:opacity-20 before:blur-md before:animate-shimmer pointer-events-none" />
                 
                        <h3 className={clsx(" text-center w-full font-interTight font-semibold",isMobile?"text-2xl":"text-3xl")}>
                            {item.title}
                        </h3>
                        <p className={clsx("text-center w-full font-medium",isMobile ? "text-md" : "text-lg")}>
                            {item.price}
                        </p>
                        {/*Map bullets and list them out */}
                        <div className="my-2 w-full min-w-0">
                            {item.bullets?.map((text, index) => (
                                <BulletPoint text={text} />
                            ))
                            }
                        </div>
                    </div>

                ))}
            </div>

            <div className="flex gap-2 mt-4"> {/* dot indicators */}
                {sponsorshipTiers.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToIndex(idx)}  // click dot to center card
                        className={`w-1.5 h-3 rounded-full transition-all duration-200 ${idx === activeIndex
                            ? "bg-blue-500 scale-125"       // active dot: blue + larger
                            : "bg-gray-300 hover:bg-gray-400" // inactive: gray + hover
                            }`}
                    />
                ))}
            </div>
            <h3 className={clsx('text-black my-4 text-left self-center',isMobile?'text-sm':'text-xl')}>
                Are these tiers not what you're looking for? No problem! You can choose to sponsor 
                a specific event/workshop, sponsor a student, or even offer a company tour! Contact our {' '}
                <Mailto email="utdshpe@gmail.com" subject="" body="" className=" font-bold hover:scale-105">
                    Corporate Liason
                </Mailto> for more information.
            </h3>
        </div>
    );
}