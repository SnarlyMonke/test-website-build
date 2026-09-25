import styles from "./BusinessCard.module.css"

import businessCardFront from "../../assets/logos/business_card_front_tp.svg"
import logoImageClipped from "../../assets/logos/logo-clipped.svg" /** just the logo, but blank space around edges is gone (coo fo positioning) */

import { siteConfig } from "../../scripts/site";

import ClipboardCopy from "../ClipboardCopy/ClipboardCopy";



type Props = {
    frontSide: boolean; /** true is front, false is back */
    textSize?: number; /** scale of content inside */

    className?: string; /** slaps a classname in there for additional tinkering */
};


type CSSVariables = React.CSSProperties & {
    "--text-size": number;
};



function BusinessCard({
    frontSide,
    textSize=1,
    className = "",
}: Props) {

    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    // const contactTitle = siteConfig.contact.title;
    const contactFullTitle = siteConfig.contact.fullTitle;
    const contactPhone = siteConfig.contact.phone;
    const contactEmail = siteConfig.contact.contactEmail;
    // const contactLocation = siteConfig.contact.location;


    const cssVarsToPass: CSSVariables = {
        "--text-size": textSize
    }

    
    let cardHTML; /** initialise scope for whole function for card */


    if (frontSide) { /** displaying the front side of the card */
        cardHTML = <div
            className={`${styles["card-base"]} ${className}`}
            style={cssVarsToPass}
        >
            <img
                src={businessCardFront}
                alt={`${firmName} Business Card`}
                className={styles["bc-front-logo"]}
            />
        </div>


    } else { /** displaying the back side of the card */
        cardHTML = <div
            className={`${styles["card-base"]} ${className}`}
            style={cssVarsToPass}
        >
            <img
                src={logoImageClipped}
                alt={`${firmName} Business Card`}
                className={styles["bc-back-logo"]}
            />

            <div className={styles["text-content"]}>
                <div className={styles["title-container"]}>
                    <h1>{contactName}</h1>
                    <h4>&nbsp;&nbsp;{contactFullTitle}</h4>
                </div>

                <div className={styles["info-container"]}>
                    <ul>
                        <li>{contactPhone} <ClipboardCopy
                            text={contactPhone}
                            size={"3cqw"}
                            translateY={"-0.2cqw"}
                            baseCol={"var(--colorbc-subtext)"}
                            hoverCol={"var(--colorbc-text)"}
                            transparent={true}
                        /></li>
                        <li>{contactEmail} <ClipboardCopy
                            text={contactEmail}
                            size={"3cqw"}
                            translateY={"-0.2cqw"}
                            baseCol={"var(--colorbc-subtext)"}
                            hoverCol={"var(--colorbc-text)"}
                            transparent={true}
                        /></li>
                        <li>{webURL} <ClipboardCopy
                            text={webURL}
                            size={"3cqw"}
                            translateY={"-0.2cqw"}
                            baseCol={"var(--colorbc-subtext)"}
                            hoverCol={"var(--colorbc-text)"}
                            transparent={true}
                        /></li>
                    </ul>
                </div>
            </div>
        </div>
    }

    
    return (
        cardHTML
    );
}

export default BusinessCard