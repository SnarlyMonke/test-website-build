/** fello monitors the pages, and if they change he goes to the top */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TpToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return null;
}

export default TpToTop;
