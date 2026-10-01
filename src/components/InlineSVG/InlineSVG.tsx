import styles from "./InlineSVG.module.css";


type Props = {
    svg: string;
}

type CSSVariables = React.CSSProperties & {
    "--svg-file": string;
};


function InlineSVG({ svg }: Props) {

    const cssVarsToPass: CSSVariables = {
        "--svg-file": `url("${svg}")`,
    }

    return (
        <span
            className={styles["svg"]}
            style={cssVarsToPass}
        ></span>
    );
}

export default InlineSVG;