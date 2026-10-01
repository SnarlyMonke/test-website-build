// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./ExpertisePage.module.css"

import tempImage from "../../assets/photos/temp_guy.png"
import beachSide from "../../assets/photos/beach_side_2.png"

import { siteConfig } from '../../scripts/site.ts'
import type { Article } from "../../components/ArticleGrid/Article.type.ts"

import Sp from "../../components/Space.tsx";
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid.tsx";
import ImageText from "../../components/ImageText/ImageText.tsx";


const ExpertisePage = () => {
    
    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;


    const articleEntries: Article[] = [
        {
            title: "Charity and not-for-profit law",
            image: tempImage,
            shortDescription: "",
            dotPointPreface: "Advice includes:",
            dotPointsHTML: [
                <li><em>charitable purposes and public benefit</em>;</li>,
                <li><em>ACNC registration and compliance</em>;</li>,
                <li><em>charity governance</em>;</li>,
                <li><em>constitutional amendments</em>;</li>,
                <li><em>deductible gift recipient and structural issues</em>;</li>,
                <li><em>private benefit and related-party arrangements</em>;</li>,
                <li><em>establishment of charitable entities</em>;</li>,
                <li><em>legal issues affecting charitable activities and programs</em>; and</li>,
                <li><em>regulator engagement</em>.</li>,
            ],
        },
        {
            title: "Governance and board advice",
            image: tempImage,
            shortDescription: "I advise boards on both governance frameworks and individual decisions.",
            dotPointPreface: "This includes:",
            dotPointsHTML: [
                <li><em>directors' duties</em>;</li>,
                <li><em>board roles and responsibilities</em>;</li>,
                <li><em>delegations</em>;</li>,
                <li><em>reserved matters</em>;</li>,
                <li><em>conflicts of interest</em>;</li>,
                <li><em>related-party transactions</em>;</li>,
                <li><em>board and committee structures</em>;</li>,
                <li><em>governance policies</em>;</li>,
                <li><em>founder and executive roles</em>;</li>,
                <li><em>board decision-making</em>;</li>,
                <li><em>board papers and resolutions</em>;</li>,
                <li><em>governance reviews</em>; and</li>,
                <li><em>responses to legal, financial, reputational and organisational risk</em>.</li>,
            ],
        },
        {
            title: "Aboriginal corporations",
            image: tempImage,
            shortDescription: "",
            dotPointPreface: "Advice to Aboriginal corporations includes:",
            dotPointsHTML: [
                <li><em>CATSI Act requirements</em>;</li>,
                <li><em>rule books</em>;</li>,
                <li><em>membership structures</em>;</li>,
                <li><em>board composition and governance</em>;</li>,
                <li><em>director and member rights</em>;</li>,
                <li><em>ORIC compliance</em>;</li>,
                <li><em>related entities</em>;</li>,
                <li><em>organisational restructures</em>; and</li>,
                <li><em>governance frameworks appropriate to the organisation and its community</em>.</li>,
            ],
        },
        {
            title: "Corporate structures and organisational change",
            image: tempImage,
            shortDescription: "I advise organisations establishing, changing or simplifying their corporate structures.",
            dotPointPreface: "This can include:",
            dotPointsHTML: [
                <li><em>incorporation</em>;</li>,
                <li><em>subsidiaries</em>;</li>,
                <li><em>group structures</em>;</li>,
                <li><em>transfers of activities</em>;</li>,
                <li><em>restructures</em>;</li>,
                <li><em>mergers and collaborations</em>;</li>,
                <li><em>governance relationships between related organisations</em>;</li>,
                <li><em>service arrangements within groups</em>; and</li>,
                <li><em>separation of charitable and commercial activities</em>.</li>,
            ],
        },
        {
            title: "Commercial arrangements",
            image: tempImage,
            shortDescription: "Charities and not-for-profits enter commercial arrangements every day.",
            dotPointPreface: "I advise on:",
            dotPointsHTML: [
                <li><em>funding agreements</em>;</li>,
                <li><em>service agreements</em>;</li>,
                <li><em>intellectual property arrangements</em>;</li>,
                <li><em>collaborations and partnerships</em>;</li>,
                <li><em>commercial contracts</em>;</li>,
                <li><em>shared services</em>;</li>,
                <li><em>arrangements between related organisations</em>; and</li>,
                <li><em>contracts supporting new programs and activities</em>.</li>,
            ],
        },
        {
            title: "Governance frameworks and organisational development",
            image: tempImage,
            shortDescription: "As organisations grow, informal ways of working often need to evolve.",
            dotPointPreface: "I assist organisations to develop governance arrangements including:",
            dotPointsHTML: [
                <li><em>delegations frameworks</em>;</li>,
                <li><em>authority matrices</em>;</li>,
                <li><em>governance manuals</em>;</li>,
                <li><em>conflicts policies</em>;</li>,
                <li><em>related-party transaction policies</em>;</li>,
                <li><em>board and committee terms of reference</em>;</li>,
                <li><em>decision-making protocols</em>;</li>,
                <li><em>risk escalation frameworks</em>; and</li>,
                <li><em>governance training for boards, executives and staff</em>.</li>,
            ],
        },
    ];


    return (
        <div className={appStyles["base-page"]}> {/** full page */}
            <div className={appStyles["content-holder"]}> {/** page limited to 1500px */}

                <h1>Expertise</h1>
                    <p>{firmName} provides specialist advice across <strong>charity, corporate and governance law.</strong><Sp/>
                    The practice has particular experience in matters where legal requirements need to be considered alongside{" "}
                        <em>governance</em>,{" "}
                        <em>organisational relationships</em> and{" "}
                        <em>practical implementation</em>.</p>

                <ArticleGrid articles={articleEntries}/>

                <ImageText
                    titleHTML={<h2>Complex and sensitive matters</h2>}
                    imagePNG={beachSide}
                    height="20rem"
                    imagePlacementX="right"
                >

                    <p>Some matters <strong>do not fit neatly</strong> within a conventional practice category.</p>
                    <p>They may involve a combination of{" "}
                        <em>legal risk</em>,{" "}
                        <em>governance responsibilities</em>,{" "}
                        <em>regulatory requirements</em>,{" "}
                        <em>relationships</em> and{" "}
                        <em>reputation</em>.
                    </p>

                    <p>In these circumstances my role is to help boards and leaders{" "}
                        <em>identify the issues that matter</em>,{" "}
                        <em>understand their options</em> and{" "}
                        <em>make a sound and defensible decision</em>.
                    </p>

                </ImageText>

            </div>
        </div>
    );
}

export default ExpertisePage