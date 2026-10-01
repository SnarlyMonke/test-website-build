/** use this when linking to a different page, tbf got no clue how it actually works */

import { Link, type LinkProps } from "react-router-dom";
import { usePageNavigation } from "../../src/scripts/usePageNavigation";

type PageLinkProps = LinkProps & {
    ref?: React.Ref<HTMLAnchorElement>;
};

function PageLink({ to, children, onClick, ref, ...props }: PageLinkProps) {
    const { goToPage } = usePageNavigation();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        goToPage(to);

        onClick?.(event);
    };

    return (
        <Link
            ref={ref}
            to={to}
            {...props}
            onClick={handleClick}
        >
            {children}
        </Link>
    );
}

export default PageLink;