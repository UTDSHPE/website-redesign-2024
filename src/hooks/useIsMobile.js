import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);
        checkScreen(); // Initial run
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, [breakpoint]);

    return isMobile;
};
export default useIsMobile;
