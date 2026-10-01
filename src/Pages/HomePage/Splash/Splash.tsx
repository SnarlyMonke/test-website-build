import styles from "./Splash.module.css"

import { siteConfig } from '../../../scripts/site.ts'
import Sp from "../../../components/Space.tsx";

import beachHousePhotoJPG from "../../../assets/photos/splash.png"
import beachHousePhotoWEBP from "../../../assets/photos/splash.webp"
import logo from "../../../assets/logos/logo.svg"


type Props = {}


function Splash({}: Props) {

    // const firmName = siteConfig.details.firmName;
    const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;

    return (
        <div className={styles["splash-container"]}>

            {/** bg picture */}
            <picture className={styles["splash-photo-crop"]}>
                <source
                    srcSet={beachHousePhotoWEBP}
                    type="image/webp"
                />
                
                <img
                    src={beachHousePhotoJPG}
                    alt=""
                    loading="lazy"
                    className={styles["splash-photo"]}
                />
            </picture>

            
            {/** logo in corner */}
            <img
                src={logo}
                alt={"AcQuity Legal Logo"}
                className={styles["corner-logo"]}
            />

            
            {/** words */}
            <div className={styles["title-container"]}>
                <h1 className={styles["title"]}>
                    <span className={styles["title-line1"]}>AcQuity</span>
                    <span className={styles["title-line2"]}>Legal</span>
                </h1>
                <p
                    className={`
                        ${styles["title-desc"]}
                        ${styles["title-desc1"]}
                    `}
                >
                    “a·kwuh·tee<Sp/>lee·gl”
                </p>
                <p
                    className={`
                        ${styles["title-desc"]}
                        ${styles["title-desc2"]}
                    `}
                >
                    <b>{firmNameFull}</b>
                </p>
            </div>

        </div>
    );
}

export default Splash