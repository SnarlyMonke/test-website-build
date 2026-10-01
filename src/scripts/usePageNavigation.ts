/** lower level in the code, actually moves tha page; also tucks with the view for the viewer to help accessibility */

import {
    useLocation,
    useNavigate,
    type To,
} from "react-router-dom";

export function usePageNavigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const goToPage = (to: To) => {
        const path =
            typeof to === "string"
                ? to
                : to.pathname ?? "/";

        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        } else {
            navigate(to);

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }
    };

    return { goToPage };
}
