// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./HomePage.module.css"

import tempImage from "../../assets/photos/temp_guy.png"
import dalveenPortraitPNG from "../../assets/photos/dalveen_portrait.png"
import dalveenDeskPNG from "../../assets/photos/dalveen_desk.png"

import { siteConfig } from '../../scripts/site.ts'
import type { Article } from "../../components/ArticleGrid/Article.type.ts"

import Splash from './Splash/Splash'
import ColourBox from "../../components/ColourBox/ColourBox"
import Acknowledgement from '../../components/Acknowledgement/Acknowledgement.tsx';
import LinkButton from '../../components/LinkButton/LinkButton.tsx'
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid.tsx";
import Sp from "../../components/Space.tsx";
import ImageText from "../../components/ImageText/ImageText.tsx"


const HomePage = () => {

    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    

    const articleEntries: Article[] = [
        {
            title: "Charity and not-for-profit law",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        <em>Charitable purposes</em>,{" "}
                                        <em>ACNC requirements</em>,{" "}
                                        <em>constitutional matters</em>,{" "}
                                        <em>regulatory compliance</em> and the legal issues arising from operating for{" "}
                                        <em>public</em> rather than{" "}
                                        <em>private</em> benefit.</p>,
        },
        {
            title: "Governance and boards",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        <em>Board structures and processes</em>,{" "}
                                        <em>directors' duties</em>,{" "}
                                        <em>conflicts of interest</em>,{" "}
                                        <em>related-party arrangements</em>,{" "}
                                        <em>delegations</em>,{" "}
                                        <em>governance frameworks</em> and{" "}
                                        <em>difficult board decisions</em>.</p>,
        },
        {
            title: "Aboriginal corporations",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        <em>CATSI Act governance</em>,{" "}
                                        <em>rule books</em>,{" "}
                                        <em>membership and board structures</em>,{" "}
                                        <em>regulatory matters</em> and{" "}
                                        <em>organisational change</em>.</p>,
        },
        {
            title: "Structures and organisational change",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        <em>New entities</em>,{" "}
                                        <em>subsidiaries</em>,{" "}
                                        <em>group structures</em>,{" "}
                                        <em>restructures</em>,{" "}
                                        <em>transfers of activities</em> and{" "}
                                        <em>strategic organisational change</em>.</p>,
        },
        {
            title: "Commercial arrangements",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        <em>Contracts</em>,{" "}
                                        <em>funding arrangements</em>,{" "}
                                        <em>service agreements</em>,{" "}
                                        <em>intellectual property</em> and other arrangements that need to work{" "}
                                        <em>practically</em> as well as{" "}
                                        <em>legally</em>.</p>,
        },
        {
            title: "Complex and sensitive matters",
            image: tempImage,
            shortDescriptionHTML:   <p>Advice to boards where{" "}
                                        <em>legal obligations</em>,{" "}
                                        <em>governance responsibilities</em>,{" "}
                                        <em>relationships</em>,{" "}
                                        <em>reputation</em> and{" "}
                                        <em>organisational purpose</em>{" "}
                                        <strong>intersect.</strong></p>,
        },
    ];


    return (
        <div className={appStyles["base-page"]}>
            
            <Splash/> {/** splash screen w stuff on it */}
            <ColourBox
                colour={"var(--bcolor-navy)"}
                height={"10px"}
            />
            <ColourBox
                colour={"var(--bcolor-denim)"}
                height={"10px"}
            />
            <ColourBox
                colour={"var(--bcolor-lime-green)"}
                height={"10px"}
            />

            <div className={appStyles["content-holder"]}>

                <Acknowledgement/>

                <ImageText
                    titleHTML={<h2>Legal advice for organisations doing important work</h2>}
                    imagePNG={dalveenDeskPNG}
                    height="35rem"
                >

                        <p><strong>{firmName}</strong> is a <strong>specialist Western Australian legal practice</strong> providing{" "}
                            <em>strategic</em>,{" "}
                            <em>practical</em> and{" "}
                            <em>commercially focused advice</em> to<Sp/>
                            <em>charities</em>,<Sp/>
                            <em>not-for-profit organisations</em>,<Sp/>
                            <em>Aboriginal corporations</em>,<Sp/>
                            <em>foundations</em><Sp/>and other<Sp/>
                            <em>social-purpose organisations</em>.</p>

                        <p>We work closely with<Sp/>
                            <em>boards</em>,<Sp/>
                            <em>executives</em><Sp/>and<Sp/>
                            <em>founders</em><Sp/>
                        to navigate complex legal and governance issues in a <em>clear and constructive way</em> —{" "}
                        keeping sight of both the organisation's legal obligations and the purpose it exists to serve.</p>

                </ImageText>

                <div>
                    <h2>Legal advice that understands the organisation behind the issue</h2>

                        <p>Charities and not-for-profit organisations can be <strong>complex</strong>.<Sp/>
                            They{" "}
                                <em>employ people</em>,{" "}
                                <em>receive government and philanthropic funding</em>,{" "}
                                <em>enter commercial arrangements</em>,{" "}
                                <em>manage assets and intellectual property</em>,{" "}
                                <em>work with regulators and stakeholders</em>, and are{" "}
                                <em>accountable to the communities they serve</em>.</p>
                        
                        <p>Good legal advice in this sector requires an understanding of <strong>all of those things.</strong><Sp/>
                            Our approach is to understand the organisation first:{" "}
                                <em>what</em> it is trying to achieve,{" "}
                                <em>how</em> it operates,{" "}
                                <em>where</em> the real risks lie and{" "}
                                <em>what matters</em> to the people responsible for making the decision.<Sp/>
                            From there, our aim is to provide advice that is legally sound, commercially realistic and useful.</p>

                </div>

                <div>
                    <h2>How we can help</h2>
                    <h3>{firmName} advises on:</h3>
                    <ArticleGrid
                        articles={articleEntries}
                        clickable={false}
                        columns={3}
                    />
                </div>

                <div>
                    <h2>Our approach</h2>
                    <p>Good governance should help an organisation achieve its purpose, not become an end in itself.<Sp/>
                        Sometimes a board needs <em>detailed legal analysis</em>.<Sp/>
                        Sometimes it needs someone to identify the few things that <em>really matter</em>.</p>
                    <p><strong>Knowing the difference is part of good legal advice.</strong></p>
                </div>

                <div>

                    <ImageText
                        titleHTML={<h2>Experience</h2>}
                        imagePNG={dalveenPortraitPNG}
                        height="25rem"
                        imagePlacementX="right"
                    >
                        <p>{firmName} is led by <strong>{contactName}</strong>, a corporate and governance lawyer with <strong>more than 30 years' experience</strong> advising organisations on{" "}
                            <em>governance</em>,{" "}
                            <em>corporate structures</em>,{" "}
                            <em>regulatory compliance</em>,{" "}
                            <em>commercial arrangements</em> and{" "}
                            <em>organisational change</em>.</p>
                        
                        <p>Clients have <strong>direct access</strong> to an experienced senior lawyer and advice that is{" "}
                            <em>clear</em>,{" "}
                            <em>thoughtful</em> and{" "}
                            <em>focused</em>{" "}
                        on finding a workable way forward</p>

                        <br/>
                        <div className={appStyles["center-div"]}>
                            <LinkButton link="/expertise/">
                                More on Expertise
                            </LinkButton>
                        </div>
                        
                    </ImageText>

                </div>

            </div> {/** content holder */}

		</div>
    );
}

export default HomePage