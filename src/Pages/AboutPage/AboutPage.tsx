// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./AboutPage.module.css"

import dalveenBanjoPNG from "../../assets/photos/dalveen_bongo.png"
import dalveenBanjoWEBP from "../../assets/photos/dalveen_bongo.webp"
import dalveenDeskSeriousPNG from "../../assets/photos/dalveen_desk_2.png"
import dalveenDeskSeriousWEBP from "../../assets/photos/dalveen_desk_2.webp"

import { siteConfig } from '../../scripts/site.ts'

import ImageText from '../../components/ImageText/ImageText.tsx'
import Sp from "../../components/Space.tsx"
import Break from "../../components/Break/Break.tsx"


const AboutPage = () => {
    
    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    const contactTitle = siteConfig.contact.title;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    
    return (
        <div className={appStyles["base-page"]}> {/** full page */}

            <div className={appStyles["free-content-holder"]}>

                <ImageText
                    titleHTML={<h1>About Dalveen</h1>}
                    altText="Picture of Dalveen (and Banjo)"
                    imagePNG={dalveenBanjoPNG}
                    imageWEBP={dalveenBanjoWEBP}
                    height={"30rem"}
                >
                    <p>I established <em>{firmName}</em> to provide experienced, practical legal and governance advice to organisations whose work has a broader purpose.</p>
                    <p>I have spent more than 30 years working in corporate law and governance.<Sp/>
                        Over time, I found myself increasingly drawn to working with charities, not-for-profit organisations and Aboriginal organisations.</p>
                    <p>What I value about this work is its <strong>practical purpose.</strong><Sp/>
                        Behind every organisation is a group of people trying to achieve something worthwhile, often while navigating complicated legal, governance and commercial issues.</p>
                </ImageText>

            </div>

            <div className={appStyles["content-holder"]}> {/** page limited to 1200px */}
                
                <div> {/** extra info from da intro stuff */}
                    <p>My role is to help make those issues clearer and more manageable so that boards and leaders can make sound decisions and concentrate on the work their organisation exists to do.<Sp/>
                        <strong>Charities are not simple organisations.</strong><Sp/>
                        They can be substantial employers and businesses.<Sp/>
                        They manage{" "}
                            <em>funding</em>,{" "}
                            <em>contracts</em>,{" "}
                            <em>intellectual property</em>,{" "}
                            <em>regulatory obligations</em>,{" "}
                            <em>relationships</em> and{" "}
                            <em>risk</em>.<Sp/>
                        At the same time, every decision ultimately needs to remain connected to charitable purpose and public benefit.<Sp/>
                        <strong>I enjoy working at that intersection.</strong></p>

                    <p>I am most comfortable working alongside my clients — understanding <em>what</em> they are trying to achieve, identifying the issues that <em>genuinely matter</em> and helping them find practical solutions.<Sp/>
                        That is why I chose to establish a legal practice focused on this sector.</p>
                </div>

                <br/><Break/>

                <h2>Experience and perspective</h2>
                    <p>My background in corporate law and governance allows me to bring a commercial and structural perspective to charity and not-for-profit matters.</p>
                    <p>I regularly work with boards, senior executives and founders, particularly where organisations are:</p>
                    <ul>
                        <li>growing or changing;</li>
                        <li>reconsidering governance structures;</li>
                        <li>managing relationships between related entities;</li>
                        <li>establishing subsidiaries or new activities;</li>
                        <li>dealing with conflicts or related-party arrangements;</li>
                        <li>responding to legal, regulatory or organisational risk; or</li>
                        <li>facing a decision where there is no obvious or simple answer.</li>
                    </ul>
                    <p>My approach is careful and pragmatic.<Sp/>
                        The aim is not to create governance for governance's sake.<Sp/>
                        It is to put in place legal and governance arrangements that are proportionate, capable of being implemented and appropriate for the organisation concerned.</p>

                <br/><Break/>

                <ImageText
                    titleHTML={<h2>Professional background and History</h2>}
                    imagePNG={dalveenDeskSeriousPNG}
                    imageWEBP={dalveenDeskSeriousWEBP}
                    height="30rem"
                    imagePlacementX="right"
                >
                    <p><strong>{contactName} {contactTitle}, {firmName}</strong></p>

                    <p>Dalveen established <em>AcQuity Legal</em> on 1 July 2025.</p>
                    <p>From 2011 to 2025, Dalveen was a consultant at Gilbert + Tobin, working in its Charities and Not-for-Profit and Energy and Resources practices.<Sp/>
                        Before that, she was a partner and subsequently a consultant at Perth firm Blakiston & Crabb, which joined Gilbert + Tobin in 2011.<Sp/>
                        She began her legal career at Mallesons Stephen Jaques.</p>
                    <p>Dalveen holds a Bachelor of Laws and a Bachelor of Jurisprudence from the University of Western Australia, awarded in 1990.<Sp/>
                        She is a Fellow of the Governance Institute of Australia and a member of the Law Society of Western Australia and the Charity Law Association of Australia and New Zealand.</p>
                    <p>Dalveen is a director of Central Desert Native Title Services Limited and The Gilbert and Tobin Foundation.<Sp/>
                        She is a management committee member of SSJG Ministries Inc and a State committee member of the Governance Institute of Australia.</p>

                </ImageText>

            </div>
        </div>
    );
}

export default AboutPage