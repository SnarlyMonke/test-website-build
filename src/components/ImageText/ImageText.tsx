import type { ReactNode } from "react";

import styles from "./ImageText.module.css"

// import ImageHolder from "../../components/ImageHolder/ImageHolder"


type Props = {
    titleHTML: ReactNode;
    altText?: string;

    imagePNG: string;
    imageWEBP?: string;

    height?: string;
    imagePlacementX?: string;
    imagePlacementY?: string;

    children: ReactNode; /** text inside */
};

type CSSVariables = React.CSSProperties & {
    "--height": string;
    "--x-dir": string;
    "--y-dir": string;
};


function ImageText({
    titleHTML, altText="",
    imagePNG, imageWEBP,
    height="50rem", imagePlacementX="left", imagePlacementY="bottom",
    children
}: Props) {
    /** vars passed into css for flex direction */
    let xDirection: string;
    let yDirection: string;

    /** horizontal guy */
    if (imagePlacementX == "left" || imagePlacementX=="normal") {
        xDirection = "row";
    } else if (imagePlacementX == "right" || imagePlacementX=="reverse" || imagePlacementX=="reversed") {
        xDirection = "row-reverse";
    } else {
        throw new Error(`Invalid imagePlacementX: "${imagePlacementX}"`);
    }

    /** vertical guy */
    if (imagePlacementY == "top" || imagePlacementY=="normal") {
        yDirection = "column";
    } else if (imagePlacementY == "bottom" || imagePlacementY=="reverse" || imagePlacementY=="reversed") {
        yDirection = "column-reverse";
    } else {
        throw new Error(`Invalid imagePlacementX: "${imagePlacementX}"`);
    }
    
    const cssVarsToPass: CSSVariables = {
        "--height": height,
        "--x-dir": xDirection,
        "--y-dir": yDirection,
    }
    
    return (
        <div
            className={styles["imagetext-container"]}
            style={cssVarsToPass}
        >
            {/** picture */}
            <div className={styles["image-holder"]}>
                <picture className={styles["image-crop"]}>
                    {imageWEBP && (
                        <source
                            srcSet={imageWEBP}
                            type="image/webp"
                        />
                    )}
                    
                    <img
                        src={imagePNG}
                        alt={altText}
                        loading="lazy"
                        className={styles["image"]}
                    />
                </picture>
            </div>
            
            <div className={styles["text-box"]}>
                {/* <h1 className={styles["title"]}>{title}</h1> */}
                <div className={styles["title-container"]}>
                    {titleHTML}
                </div>

                <div className={styles["description"]}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ImageText;