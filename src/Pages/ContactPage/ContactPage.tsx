// import React from 'react'

import appStyles from "../../App.module.css"
import styles from "./ContactPage.module.css"

import { siteConfig } from "../../scripts/site.ts"

import BusinessCard from '../../components/BusinessCard/BusinessCard.tsx'

import sunsetImagePNG from "../../assets/photos/sunset.png"
import sunsetImageWEBP from "../../assets/photos/sunset.webp"


const ContactPage = () => {
    
    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    const contactPhone = siteConfig.contact.phone;
    const contactEmail = siteConfig.contact.contactEmail;
    
    return (
        <div className={appStyles["base-page"]}> {/** full page */}
            <div className={appStyles["content-holder"]}> {/** page limited to 1500px */}
                <h1>Contact {firmName}</h1>
                <p>If your organisation is dealing with a legal or governance issue, or you would like to discuss whether {firmName} may be able to assist, <strong>please get in touch.</strong></p>

                <ul>
                    <li><strong>Name:</strong> {contactName}</li>
                    <li><strong>Number:</strong> {contactPhone}</li>
                    <li><strong>Email:</strong> {contactEmail}</li>
                </ul>

                <div className={styles["business-card-container"]}>

                    {/** bg picture */}
                    <picture className={styles["bg-photo-crop"]}>
                        <source
                            srcSet={sunsetImageWEBP}
                            type="image/webp"
                        />
                        
                        <img
                            src={sunsetImagePNG}
                            alt=""
                            loading="lazy"
                            className={styles["bc-bg-image"]}
                        />
                    </picture>

                    {/** actual business card */}
                    <div className={styles["business-card"]}>
                        <BusinessCard
                            frontSide={false}
                            textSize={1}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactPage