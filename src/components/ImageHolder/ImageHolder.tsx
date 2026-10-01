import styles from "./ImageHolder.module.css"


type Props = {
    imagePNG: string;
    imageWEBP?: string;
    altText?: string;

    height?: string;

    className?: string; /** slaps a classname in there for additional tinkering */
}

type CSSVariables = React.CSSProperties & {
    "--height": string;
};


function CroppableImage({
    imagePNG, imageWEBP,
    altText="", height="",
    className = "",
}: Props) {

    const cssVarsToPass: CSSVariables = {
        "--height": height,
    }

    return (
        <picture className={`${styles["image-crop"]} ${className}`} style={cssVarsToPass}>
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
    );
}

export default CroppableImage