// import React from 'react'

import appStyles from "../../App.module.css"
import styles from "./TermsConditionPage.module.css"

import banjoPNG from "../../assets/photos/bongo.png"
import banjoWEBP from "../../assets/photos/bongo.webp"

// import { siteConfig } from '../../scripts/site.ts'

import Sp from "../../components/Space.tsx";
import InlineSVG from "../../components/InlineSVG/InlineSVG.tsx";
import ImageHolder from "../../components/ImageHolder/ImageHolder.tsx"
import Break from "../../components/Break/Break.tsx";

import SVGArrowRight from "../../assets/svgs/arrow-right-svgrepo-com.svg";
import SVGClipboardAdd from "../../assets/svgs/clipboard-add.svg";
import SVGClipboardCheck from "../../assets/svgs/clipboard-check-svgrepo-com.svg"


const TermsConditionPage = () => {
    
    // const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactTitle = siteConfig.contact.title;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    
    return (
        <div className={appStyles["base-page"]}> {/** full page */}

            <div className={appStyles["content-holder"]}> {/** page limited to 1200px */}
                <h1>Terms & Conditions</h1>

                <Break/>

                <h2>CC Attribution</h2>

                    <h4>Arrow Right <InlineSVG svg={SVGArrowRight}/></h4>
                    <p><em>Arrow Right 166</em> by <em>Solar Icons</em>, from the <em>Solar Outline Icons</em> collection.<Sp/>
                    Licensed under <em>CC Attribution (CC BY)</em>.<Sp/>
                    Source: <a href="https://www.svgrepo.com/svg/523151/arrow-right">https://www.svgrepo.com/svg/523151/arrow-right</a></p>
                    <br/>

                    <h4>Clipboard Add <InlineSVG svg={SVGClipboardAdd}/></h4>
                    <p><em>Clipboard Add 13</em> by <em>Solar Icons</em>, from the <em>Solar Outline Icons</em> collection.<Sp/>
                    Licensed under <em>CC Attribution (CC BY)</em>.<Sp/>
                    Source: <a href="https://www.svgrepo.com/svg/522785/clipboard-add">https://www.svgrepo.com/svg/522785/clipboard-add</a></p>
                    <br/>

                    <h4>Clipboard Check <InlineSVG svg={SVGClipboardCheck}/></h4>
                    <p><em>Clipboard Check 19</em> by <em>Solar Icons</em>, from the <em>Solar Outline Icons</em> collection.<Sp/>
                    Licensed under <em>CC Attribution (CC BY)</em>.<Sp/>
                    Source: <a href="https://www.svgrepo.com/svg/522795/clipboard-check">https://www.svgrepo.com/svg/522795/clipboard-check</a></p>
                    <br/>
                
                <br/><Break/><br/>
                <ImageHolder
                    className={styles["chilling-image"]}
                    imagePNG={banjoPNG}
                    imageWEBP={banjoWEBP}
                />
                <p className={styles["chilling-quote"]}><em>“Rouf. Rourouuouououf...”</em> - <strong>Banjo</strong></p>
                <br/><Break/>

                <h2>Website Credit</h2>
                    <p style={{ textAlign: "center" }}>Website by James Chipper</p>
                <br/>

            </div>

        </div>
    );
}

export default TermsConditionPage