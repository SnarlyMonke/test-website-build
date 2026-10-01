import styles from "./LinkButton.module.css"

import Ar from "../Arrow.tsx";
import PageLink from "../PageLink.tsx";


type Props = { /** question marks make it so they dont need to be given */
    children?: React.ReactNode;
    link: string;
    baseCol?: string;
    hoverCol?: string;
    transparent?: boolean

    className?: string; /** slaps a classname in there for additional tinkering */
}

type CSSVariables = React.CSSProperties & {
    "--base-col-button": string,
    "--hover-col-button": string,
    "--base-col-txt": string,
    "--hover-col-txt": string,
    "--base-col-bg": string,
    "--hover-col-bg": string,
};


function LinkButton({
    children,
    link,
    baseCol="var(--color-button)",
    hoverCol="var(--color-button-hover)",
    transparent=true,
    className = "",
}: Props) {
    
    let cssVarsToPass: CSSVariables; /** declare it so its in scope of full function */

    if (transparent) { /** transparent bg */
        cssVarsToPass = {
            "--base-col-button": baseCol,
            "--hover-col-button": hoverCol,
            "--base-col-txt": baseCol,
            "--hover-col-txt": hoverCol,
            "--base-col-bg": "transparent",
            "--hover-col-bg": "transparent",
        }
    } else { /** coloured in bg */
        cssVarsToPass = {
            "--base-col-button": baseCol,
            "--hover-col-button": hoverCol,
            "--base-col-txt": "white",
            "--hover-col-txt": "white",
            "--base-col-bg": baseCol,
            "--hover-col-bg": hoverCol,
        }
    }
    
    return (
        <PageLink
            to={link}
            className={`${styles["link-button"]} ${className}`}
            style={cssVarsToPass}
        >{children} <Ar/></PageLink>
    );
}

export default LinkButton