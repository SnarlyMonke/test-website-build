// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./HomePage.module.css"

import { siteConfig } from '../../scripts/site.ts'

import Splash from './Splash/Splash'
import ColourBox from "../../components/ColourBox/ColourBox"
import Acknowledgement from '../../components/Acknowledgement/Acknowledgement.tsx';
import LinkButton from '../../components/LinkButton/LinkButton.tsx'


const HomePage = () => {

    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    
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

                <div>
                    <h2>Legal advice for organisations doing important work</h2>
                    <p>{firmName} is a specialist Western Australian legal practice providing strategic, practical and commercially focused advice to charities, not-for-profit organisations, Aboriginal corporations, foundations and other social-purpose organisations.</p>
                    <p>I work closely with boards, executives and founders to navigate complex legal and governance issues in a clear and constructive way — keeping sight of both the organisation's legal obligations and the purpose it exists to serve.</p>
                </div>

                <div>
                <h2>Legal advice that understands the organisation behind the issue</h2>
                    <ul>
                        <li>Charities and not-for-profit organisations can be complex.</li>
                        <li>They employ people, receive government and philanthropic funding, enter commercial arrangements, manage assets and intellectual property, work with regulators and stakeholders, and are accountable to the communities they serve.</li>
                        <li>Good legal advice in this sector requires an understanding of all of those things.</li>
                        <li>My approach is to understand the organisation first: what it is trying to achieve, how it operates, where the real risks lie and what matters to the people responsible for making the decision.</li>
                        <li>From there, my aim is to provide advice that is legally sound, commercially realistic and useful.</li>
                    </ul>
                </div>

                <div>
                <h2>How I can help</h2>
                <p>{firmName} advises on:</p>
                <ul>
                    <li>Charity and not-for-profit law</li>
                    <ul>
                        <li>Charitable purposes, ACNC requirements, constitutional matters, regulatory compliance and the legal issues arising from operating for public rather than private benefit.</li>
                    </ul>
                    <li>Governance and boards</li>
                    <ul>
                        <li>Board structures and processes, directors' duties, conflicts of interest, related-party arrangements, delegations, governance frameworks and difficult board decisions.</li>
                    </ul>
                    <li>Aboriginal corporations</li>
                    <ul>
                        <li>CATSI Act governance, rule books, membership and board structures, regulatory matters and organisational change.</li>
                    </ul>
                    <li>Structures and organisational change</li>
                    <ul>
                        <li>New entities, subsidiaries, group structures, restructures, transfers of activities and strategic organisational change.</li>
                    </ul>
                    <li>Commercial arrangements</li>
                    <ul>
                        <li>Contracts, funding arrangements, service agreements, intellectual property and other arrangements that need to work practically as well as legally.</li>
                    </ul>
                    <li>Complex and sensitive matters</li>
                    <ul>
                        <li>Advice to boards where legal obligations, governance responsibilities, relationships, reputation and organisational purpose intersect.</li>
                    </ul>
                </ul>
                </div>

                <div>
                <h2>My approach</h2>
                    <ul>
                        <li>Good governance should help an organisation achieve its purpose, not become an end in itself.</li>
                        <li>Sometimes a board needs detailed legal analysis.</li>
                        <li>Sometimes it needs someone to identify the few things that really matter.</li>
                        <li>Knowing the difference is part of good legal advice.</li>
                    </ul>
                </div>

                <div>
                <h2>Experience</h2>
                    <ul>
                        <li>{firmName} is led by {contactName}, a corporate and governance lawyer with more than 30 years' experience advising organisations on governance, corporate structures, regulatory compliance, commercial arrangements and organisational change.</li>
                        <li>Clients have direct access to an experienced senior lawyer and advice that is clear, thoughtful and focused on finding a workable way forward</li>
                    </ul>
                </div>
                <LinkButton link="/expertise/">
                    More on Experience
                </LinkButton>

            </div> {/** content holder */}

		</div>
    );
}

export default HomePage