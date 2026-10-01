// import React from 'react'

import appStyles from "../../App.module.css"
import styles from "./ClientsPage.module.css"

import tempImage from "../../assets/photos/temp_guy.png"

import { siteConfig } from '../../scripts/site.ts'
import type { Article } from "../../components/ArticleGrid/Article.type.ts"

import Sp from "../../components/Space.tsx";
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid.tsx";


const ClientsPage = () => {
    
    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;
    

    const articleEntries: Article[] = [
        {
            title: "Charities and not-for-profits",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        From established national organisations to smaller charities experiencing significant growth, I advise on{" "}
                                            <em>governance</em>,{" "}
                                            <em>structure</em>,{" "}
                                            <em>regulation</em> and{" "}
                                            <em>commercial arrangements</em>.
                                    </p>,
        },
        {
            title: "Aboriginal organisations",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        I work with Aboriginal corporations and organisations on{" "}
                                            <em>governance</em>,{" "}
                                            <em>CATSI Act matters</em>,{" "}
                                            <em>structures</em>,{" "}
                                            <em>board and membership arrangements</em> and{" "}
                                            <em>organisational change</em>.
                                    </p>,
        },
        {
            title: "Foundations and philanthropic organisations",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        Advice may include{" "}
                                            <em>governance arrangements</em>,{" "}
                                            <em>charitable structures</em>,{" "}
                                            <em>funding relationships</em> and the legal framework{" "}
                                            <em>supporting philanthropic activity</em>.
                                    </p>,
        },
        {
            title: "Boards",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        A significant part of my work is directly with boards and directors.<Sp/>
                                        Boards often seek advice where an issue extends <em>beyond</em> the wording of a particular legal provision and requires an understanding of{" "}
                                            <em>governance</em>,{" "}
                                            <em>risk</em> and{" "}
                                            <em>organisational context</em>.
                                    </p>,
        },
        {
            title: "Founders and growing organisations",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        Founder-led organisations can face particular challenges as they grow.<Sp/>
                                        Informal arrangements that worked at an earlier stage may need to evolve into{" "}
                                            <em>clearer governance</em>,{" "}
                                            <em>delegations</em>,{" "}
                                            <em>board structures</em> and{" "}
                                            <em>related-party arrangements</em>.<Sp/>
                                        The objective is <em>not</em> to remove what makes the organisation successful, but to <em>develop governance</em> capable of <em>supporting its next stage</em>.<Sp/>
                                    </p>,
        },
        {
            title: "Executives",
            image: tempImage,
            shortDescriptionHTML:   <p>
                                        I also work closely with{" "}
                                            <em>chief executives</em>,{" "}
                                            <em>general managers</em> and{" "}
                                            <em>senior teams</em>{" "}
                                        who need practical legal advice that can be translated into workable organisational arrangements.
                                    </p>,
        },
    ];


    return (
        <div className={appStyles["base-page"]}> {/** full page */}
            <div className={appStyles["content-holder"]}> {/** page limited to 1500px */}

                <h1 className={styles["top-title"]}>Who I Help</h1>
                <h3 className={styles["bottom-title"]}><em>(Organisations I work with)</em></h3>

                <p>{firmName} works primarily with organisations established to achieve a{" "}
                    <strong>public</strong>,{" "}
                    <strong>charitable</strong> or{" "}
                    <strong>community</strong> purpose.
                </p>

                <ArticleGrid articles={articleEntries} clickable={false}/>

            </div>
        </div>
    );
}

export default ClientsPage