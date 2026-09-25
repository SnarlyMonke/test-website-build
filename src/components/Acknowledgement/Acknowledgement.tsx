import { siteConfig } from "../../scripts/site.ts";

import styles from "./Acknowledgement.module.css"

import Sp from "../../components/Space.tsx";

function Acknowledgement() {

    const firmName = siteConfig.details.firmName;

    return (
        <div className={styles["word-container"]}>
            <hr/>
            <p><em>
                {firmName} acknowledges the Traditional Owners of the lands on which we work and live across Australia, and recognise their continuing connection to the land and community.<Sp/>
                We pay respect to Elders past and present.
            </em></p>
            <hr/>
        </div>
    );
}

export default Acknowledgement