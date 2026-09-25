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
                    alt="House at the beach"
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
                <h1 className={styles["title"]}>AcQuity<br/>&nbsp;Legal</h1>
                <p className={styles["title-desc"]}>“a·kwuh·tee<Sp/>lee·gl”</p>
                <p className={styles["title-desc"]}><b><Sp/><Sp/>{firmNameFull}</b></p>
            </div>

        </div>
    );
}

export default Splash