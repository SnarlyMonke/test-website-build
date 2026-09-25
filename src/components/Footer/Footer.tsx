import appStyles from "../../App.module.css"
import styles from "./Footer.module.css"

import { siteConfig } from "../../scripts/site.ts";

import LinkButton from '../../components/LinkButton/LinkButton.tsx'
import Sp from "../../components/Space.tsx";
import ClipboardCopy from "../ClipboardCopy/ClipboardCopy";

import logoImage from "../../assets/logos/logo.svg"


type Props = {}


function Footer({}: Props) {

    const firmName = siteConfig.details.firmName;
    const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    // const contactTitle = siteConfig.contact.title;
    const contactFullTitle = siteConfig.contact.fullTitle;
    const contactPhone = siteConfig.contact.phone;
    const contactEmail = siteConfig.contact.contactEmail;
    const contactLocation = siteConfig.contact.location;

    const date = new Date();
    const currYear = date.getFullYear();

    return (
        <footer className={styles["footer"]}>
            <div className={`${appStyles["content-holder"]} ${styles["footer-content"]}`}>
                <div className={styles["squiggly-guys"]}> {/** movinators */}

                    <div className={styles["squiggly-guy"]}> {/** regulatory info */}
                        <div className={styles["horizontal-divide"]}>
                        
                            <img src={logoImage} alt={`${firmName} Logo`} className={styles["logo"]}/> {/* just the logo */}

                            <div>
                                <h1 className={styles["fancy1"]}>
                                    <span className={styles["denim"]}>AcQuity</span>{" "}
                                    <span className={styles["lime-green"]}>Legal</span>
                                </h1>

                                <h1 className={styles["fancy2"]}>Pty Ltd</h1>
                            </div>
                        </div>
                    </div>

                    <div className={styles["squiggly-guy"]}> {/** contact stuff */}
                        <div className={styles["info-box"]}>
                            <h2>{contactName}</h2>
                            <h4>{contactFullTitle}</h4>
                            <ul>
                                <li>{contactPhone}<ClipboardCopy
                                    text={contactPhone}
                                    size={"1.4em"}
                                    translateY={"-0.1em"}
                                    baseCol={"var(--bcolor-navy)"}
                                    hoverCol={"var(--bcolore-dark-navy)"}
                                    transparent={true}
                                /></li>
                                <li>{contactEmail}<ClipboardCopy
                                    text={contactEmail}
                                    size={"1.4em"}
                                    translateY={"-0.1em"}
                                    baseCol={"var(--bcolor-navy)"}
                                    hoverCol={"var(--bcolore-dark-navy)"}
                                    transparent={true}
                                /></li>
                                <li>{contactLocation}<ClipboardCopy
                                    text={contactLocation}
                                    size={"1.4em"}
                                    translateY={"-0.1em"}
                                    baseCol={"var(--bcolor-navy)"}
                                    hoverCol={"var(--bcolore-dark-navy)"}
                                    transparent={true}
                                /></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles["squiggly-guy"]}> {/** contact stuff */}
                        <LinkButton
                            link="/contact/"
                            transparent={false}
                            className={styles["contact-button"]}
                        >
                            Contact Dalveen
                        </LinkButton>
                    </div>

                </div> {/** end of squiggly guys */}
            </div>

            <div className={styles["regulation-box"]}> {/** regulatory info */}
                <hr/>
                <div className={styles["text-holdinator"]}> {/** has a max width */}
                    <h4>Regulatory Information:</h4>
                    <p>{firmNameFull} is an Australian legal practice.<Sp/>
                        {firmName} is enrolled with AUSTRAC as a reporting entity under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006.<Sp/>
                        Where the firm provides services regulated under that legislation, clients may be required to provide identity, beneficial ownership, source of funds and other information.
                    </p>
                </div>
                <hr/>
            </div>

            <div className={styles["copyright-box"]}>
                <p className={styles["copyright-words"]}>&copy; Copyright {currYear} {firmName}. All Rights Reserved.</p> 
            </div>
        </footer>
    );
}

export default Footer