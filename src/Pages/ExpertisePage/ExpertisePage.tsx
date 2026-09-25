// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./ExpertisePage.module.css"

import { siteConfig } from '../../scripts/site.ts'
import Sp from "../../components/Space.tsx";


const ExpertisePage = () => {
    
    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;

    return (
        <div className={appStyles["base-page"]}> {/** full page */}
            <div className={appStyles["content-holder"]}> {/** page limited to 1500px */}
                <h1>Expertise</h1>
                <p>{firmName} provides specialist advice across charity, corporate and governance law.<Sp/>
                The practice has particular experience in matters where legal requirements need to be considered alongside governance, organisational relationships and practical implementation.</p>

                <h2>Charity and not-for-profit law</h2>
                <p>Advice includes:</p>
                <ul>
                    <li>charitable purposes and public benefit;</li>
                    <li>ACNC registration and compliance;</li>
                    <li>charity governance;</li>
                    <li>constitutional amendments;</li>
                    <li>deductible gift recipient and structural issues;</li>
                    <li>private benefit and related-party arrangements;</li>
                    <li>establishment of charitable entities;</li>
                    <li>legal issues affecting charitable activities and programs; and</li>
                    <li>regulator engagement.</li>
                </ul>

                <h2>Governance and board advice</h2>
                <p>I advise boards on both governance frameworks and individual decisions.</p>
                <p>This includes:</p>
                <ul>
                    <li>directors' duties;</li>
                    <li>board roles and responsibilities;</li>
                    <li>delegations;</li>
                    <li>reserved matters;</li>
                    <li>conflicts of interest;</li>
                    <li>related-party transactions;</li>
                    <li>board and committee structures;</li>
                    <li>governance policies;</li>
                    <li>founder and executive roles;</li>
                    <li>board decision-making;</li>
                    <li>board papers and resolutions;</li>
                    <li>governance reviews; and</li>
                    <li>responses to legal, financial, reputational and organisational risk.</li>
                </ul>

                <h2>Aboriginal corporations</h2>
                <p>Advice to Aboriginal corporations includes:</p>
                <ul>
                    <li>CATSI Act requirements;</li>
                    <li>rule books;</li>
                    <li>membership structures;</li>
                    <li>board composition and governance;</li>
                    <li>director and member rights;</li>
                    <li>ORIC compliance;</li>
                    <li>related entities;</li>
                    <li>organisational restructures; and</li>
                    <li>governance frameworks appropriate to the organisation and its community.</li>
                </ul>

                <h2>Corporate structures and organisational change</h2>
                <p>I advise organisations establishing, changing or simplifying their corporate structures.</p>
                <p>This can include:</p>
                <ul>
                    <li>incorporation;</li>
                    <li>subsidiaries;</li>
                    <li>group structures;</li>
                    <li>transfers of activities;</li>
                    <li>restructures;</li>
                    <li>mergers and collaborations;</li>
                    <li>governance relationships between related organisations;</li>
                    <li>service arrangements within groups; and</li>
                    <li>separation of charitable and commercial activities.</li>
                </ul>

                <h2>Commercial arrangements</h2>
                <p>Charities and not-for-profits enter commercial arrangements every day.</p>
                <p>I advise on:</p>
                <ul>
                    <li>funding agreements;</li>
                    <li>service agreements;</li>
                    <li>intellectual property arrangements;</li>
                    <li>collaborations and partnerships;</li>
                    <li>commercial contracts;</li>
                    <li>shared services;</li>
                    <li>arrangements between related organisations; and</li>
                    <li>contracts supporting new programs and activities.</li>
                </ul>

                <h2>Governance frameworks and organisational development</h2>
                <p>As organisations grow, informal ways of working often need to evolve.</p>
                <p>I assist organisations to develop governance arrangements including:</p>
                <ul>
                    <li>delegations frameworks;</li>
                    <li>authority matrices;</li>
                    <li>governance manuals;</li>
                    <li>conflicts policies;</li>
                    <li>related-party transaction policies;</li>
                    <li>board and committee terms of reference;</li>
                    <li>decision-making protocols;</li>
                    <li>risk escalation frameworks; and</li>
                    <li>governance training for boards, executives and staff.</li>
                </ul>

                <h2>Complex and sensitive matters</h2>
                <p>Some matters <strong>do not fit</strong> neatly within a conventional practice category.</p>
                <p>They may involve a combination of{" "}
                    <strong>legal risk</strong>,{" "}
                    <strong>governance responsibilities</strong>,{" "}
                    <strong>regulatory requirements</strong>,{" "}
                    <strong>relationships</strong> and{" "}
                    <strong>reputation</strong>.
                </p>
                <p>In these circumstances my role is to help boards and leaders{" "}
                    <strong>identify the issues that matter</strong>,{" "}
                    <strong>understand their options</strong> and{" "}
                    <strong>make a sound and defensible decision</strong>.
                </p>
            </div>
        </div>
    );
}

export default ExpertisePage