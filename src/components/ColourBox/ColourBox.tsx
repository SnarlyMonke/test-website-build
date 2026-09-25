import styles from "./ColourBox.module.css"


type Props = { /** question marks make it so they dont need to be given */
    colour?: string;
    width?: string;
    height?: string;
}


type CSSVariables = React.CSSProperties & {
    "--col": string;
    "--width": string;
    "--height": string;
};


function ColourBox({colour="var(--bcolor-navy)", width="100%", height="100px"}: Props) {
    const cssVarsToPass: CSSVariables = {
        "--col": colour,
        "--width": width,
        "--height": height,
    }

    return (
        <div 
            className={styles["colour-box"]}
            style={cssVarsToPass}
        />
    );
}

export default ColourBox