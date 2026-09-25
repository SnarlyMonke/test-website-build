// import React from 'react'

import appStyles from "../../App.module.css"
// import styles from "./ClientsPage.module.css"

import { siteConfig } from '../../scripts/site.ts'
import Sp from "../../components/Space.tsx";


const ClientsPage = () => {
    
    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    
    return (
        <div className={appStyles["base-page"]}> {/** full page */}
            <div className={appStyles["content-holder"]}> {/** page limited to 1500px */}
                <h1>Organisations I work with</h1>
                <p>{firmName} works primarily with organisations established to achieve a public, charitable or community purpose.</p>

                <h2>Charities and not-for-profits</h2>
                <p>
                    From established national organisations to smaller charities experiencing significant growth, I advise on governance, structure, regulation and commercial arrangements.
                </p>

                <h2>Aboriginal organisations</h2>
                <p>
                    I work with Aboriginal corporations and organisations on governance, CATSI Act matters, structures, board and membership arrangements and organisational change.
                </p>

                <h2>Foundations and philanthropic organisations</h2>
                <p>
                    Advice may include governance arrangements, charitable structures, funding relationships and the legal framework supporting philanthropic activity.
                </p>

                <h2>Boards</h2>
                <p>
                    A significant part of my work is directly with boards and directors.<Sp/>
                    Boards often seek advice where an issue extends beyond the wording of a particular legal provision and requires an understanding of governance, risk and organisational context.
                </p>

                <h2>Founders and growing organisations</h2>
                <p>
                    Founder-led organisations can face particular challenges as they grow.<Sp/>
                    Informal arrangements that worked at an earlier stage may need to evolve into clearer governance, delegations, board structures and related-party arrangements.<Sp/>
                    The objective is not to remove what makes the organisation successful, but to develop governance capable of supporting its next stage.<Sp/>
                </p>

                <h2>Executives</h2>
                <p>
                    I also work closely with chief executives, general managers and senior teams who need practical legal advice that can be translated into workable organisational arrangements.
                </p>

            </div>
        </div>
    );
}

export default ClientsPage