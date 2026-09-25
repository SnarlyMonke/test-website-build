// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./AboutPage.module.css"

import { siteConfig } from '../../scripts/site.ts'

// import ImageText from '../../components/ImageText/ImageText.tsx'


const AboutPage = () => {
    
    const firmName = siteConfig.details.firmName;
    const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    const contactTitle = siteConfig.contact.title;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    
    return (
        <div className={appStyles["base-page"]}> {/** full page */}
            <div className={appStyles["content-holder"]}> {/** page limited to 1500px */}
                <h1>About Dalveen</h1>
                    <ul>
                        <li>I established {firmName} to provide experienced, practical legal and governance advice to organisations whose work has a broader purpose.</li>
                        <li>I have spent more than 30 years working in corporate law and governance. Over time, I found myself increasingly drawn to working with charities, not-for-profit organisations and Aboriginal organisations.</li>
                        <li>What I value about this work is its practical purpose.</li>
                        <li>Behind every organisation is a group of people trying to achieve something worthwhile, often while navigating complicated legal, governance and commercial issues.</li>
                        <li>My role is to help make those issues clearer and more manageable so that boards and leaders can make sound decisions and concentrate on the work their organisation exists to do.</li>
                        <li>Charities are not simple organisations. They can be substantial employers and businesses. They manage funding, contracts, intellectual property, regulatory obligations, relationships and risk. At the same time, every decision ultimately needs to remain connected to charitable purpose and public benefit.</li>
                        <li>I enjoy working at that intersection.</li>
                        <li>I am most comfortable working alongside my clients — understanding what they are trying to achieve, identifying the issues that genuinely matter and helping them find practical solutions.</li>
                        <li>That is why I chose to establish a legal practice focused on this sector.</li>
                    </ul>

                <h2>Experience and perspective</h2>
                    <ul>
                        <li>My background in corporate law and governance allows me to bring a commercial and structural perspective to charity and not-for-profit matters.</li>
                        <li>I regularly work with boards, senior executives and founders, particularly where organisations are:</li>
                        <ul>
                            <li>growing or changing;</li>
                            <li>reconsidering governance structures;</li>
                            <li>managing relationships between related entities;</li>
                            <li>establishing subsidiaries or new activities;</li>
                            <li>dealing with conflicts or related-party arrangements;</li>
                            <li>responding to legal, regulatory or organisational risk; or</li>
                            <li>facing a decision where there is no obvious or simple answer.</li>
                        </ul>
                        <li>My approach is careful and pragmatic.</li>
                        <li>The aim is not to create governance for governance's sake. It is to put in place legal and governance arrangements that are proportionate, capable of being implemented and appropriate for the organisation concerned.</li>
                    </ul>

                <h2>Professional background</h2>
                    <p>{contactName} <br/>
                    {contactTitle}, {firmNameFull}</p>

                    <p>Bachelor of Laws <br/>
                    Bachelor of Jurisprudence <br/>
                    University of Western Australia</p>

                    <p>Fellow, Governance Institute of Australia <br/>
                    Member, Law Society of Western Australia <br/>
                    Member, Charity Law Association of Australia and New Zealand</p>

            </div>
        </div>
    );
}

export default AboutPage