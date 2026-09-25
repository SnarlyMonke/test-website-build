import styles from "./ClipboardCopy.module.css"

import { useRef, useState } from "react"

// import clipboardAdd from "../../assets/svgs/clipboard-add.svg"
// import clipboardCheck from "../../assets/svgs/clipboard-check-svgrepo-com.svg"


type Props = {
    text: string; /** shming to copy */
    size?: string; /** size display info in css */
    translateY?: string; /** whats slapped into translatey */
    baseCol?: string;
    hoverCol?: string;
    transparent?: boolean
}

type CSSVariables = React.CSSProperties & {
    "--size": string,
    "--translate-y": string,
    "--base-col-txt": string,
    "--base-col-bg": string,
    "--hover-col-txt": string,
    "--hover-col-bg": string,
};


function ClipboardCopy({
    text,
    size="1em",
    translateY="0",
    baseCol="var(--bcolor-navy)", 
    hoverCol="var(--bcolor-lime-green)", 
    transparent=true
}: Props) {
    

    const [copy, setCopy] = useState(false); /** variable saying if the button clicked or na */
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); /** this sucker handles timeouts when u click */


    /** handle clicks */
    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(text);

            // Cancel the previous timer if there is one
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            setCopy(true);

            // Start a fresh 3-second timer
            timeoutRef.current = setTimeout(() => {
                setCopy(false);
                timeoutRef.current = null;
            }, 3000);

        } catch (error) {
            console.error("Failed to copy:", error);
        }
    }


    let cssVarsToPass: CSSVariables; /** declare it so its in scope of full function */

    if (transparent) { /** transparent bg */
        cssVarsToPass = {
            "--size": size, 
            "--translate-y": translateY,
            "--base-col-txt": baseCol,
            "--base-col-bg": "transparent",
            "--hover-col-txt": hoverCol,
            "--hover-col-bg": "rgba(0, 0, 0, 0.1)",
        }
    } else { /** coloured in bg */
        cssVarsToPass = {
            "--size": size, 
            "--translate-y": translateY,
            "--base-col-txt": "white",
            "--base-col-bg": baseCol,
            "--hover-col-txt": "white",
            "--hover-col-bg": hoverCol,
        }
    }

    return (
        <>
            <button
                className={`${styles["copy-button"]} ${styles["add"]} ${copy ? styles["hidden"] : styles["shown"]}`}
                aria-label="Copy"
                style={cssVarsToPass}
                onClick={handleCopy}
            />
            <button
                className={`${styles["copy-button"]} ${styles["check"]} ${copy ? styles["shown"] : styles["hidden"]}`}
                aria-label="Copied"
                style={cssVarsToPass}
                onClick={handleCopy}
            />
        </>
    );
}

export default ClipboardCopy