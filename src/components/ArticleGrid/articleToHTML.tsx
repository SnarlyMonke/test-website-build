import styles from "./ArticleGrid.module.css"
import unclickableStyles from "./ArticleGridUnclickable.module.css"

import type { Article } from "./Article.type.ts"

import ImageHolder from "../ImageHolder/ImageHolder.tsx";

import Accordion from "react-bootstrap/Accordion";


function convertArticleWordsToHTML(articleEntries: Article[]) {
    return articleEntries.map((article) => ({
        title: article.titleHTML ?? <h3>{article.title}</h3>,

        image: article.image,

        shortDescription:
            article.shortDescriptionHTML ??
            (article.shortDescription != "" ? (
                <p>{article.shortDescription}</p>
            ) : null),

        dotPointPreface:
            article.dotPointPrefaceHTML ??
            (article.dotPointPreface ? (
                <h4>{article.dotPointPreface}</h4>
            ) : null),

        dotPoints:
            article.dotPointsHTML ??
            article.dotPoints?.map((dotPoint, index) =>
                <li key={index}>{dotPoint}</li>
            ) ?? [],
    }));
}



export function articleToHTML(rawArticleEntries: Article[]) {

    const articleEntries = convertArticleWordsToHTML(rawArticleEntries);

    const articleHTML = articleEntries.map((entry, index) => (
        <Accordion.Item eventKey={String(index)} key={index}> {/** every article */}
            <Accordion.Header>
                <div className={styles["clickable-box"]}>
                    <div className={styles["image-box"]}>

                        <ImageHolder
                            imagePNG={entry.image}
                            height="20rem"
                        /> {/** da image */}

                    </div>

                    <div className={styles["title-box"]}>

                        {entry.title} {/** da title */}

                        {entry.shortDescription} {/** only puts the short description there if its not blank */}

                    </div>
                </div>
            </Accordion.Header>
            
            {(entry.dotPointPreface || entry.dotPoints.length > 0) &&
                <Accordion.Body>
                    <div className={styles["dropdown-box"]}> {/** holds all the text below */}

                        {entry.dotPointPreface}

                        <ul> {/** dot points */}
                            {entry.dotPoints}
                        </ul>
                        
                    </div>
                </Accordion.Body>
            }
        </Accordion.Item>
    ));

    return (articleHTML);
}


export function articleToUnclickableHTML(rawArticleEntries: Article[]) {
    
    const articleEntries = convertArticleWordsToHTML(rawArticleEntries);

    const articleHTML = articleEntries.map((entry, index) => (
        <div className={unclickableStyles["unclickable-item"]} key={index}> {/** every article */}
            <div className={unclickableStyles["unclickable-header"]}>
                <div className={unclickableStyles["clickable-box"]}>
                    <div className={unclickableStyles["image-box"]}>

                        <ImageHolder
                            imagePNG={entry.image}
                            height="20rem"
                        /> {/** da image */}

                    </div>

                    <div className={unclickableStyles["title-box"]}>

                        {entry.title} {/** da title */}

                        {entry.shortDescription} {/** only puts the short description there if its not blank */}

                    </div>
                </div>
            </div>
            
            {(entry.dotPointPreface || entry.dotPoints.length > 0) &&
                <div className={unclickableStyles["unclickable-body"]}>
                    <div className={unclickableStyles["dropdown-box"]}> {/** holds all the text below */}

                        {entry.dotPointPreface}

                        <ul> {/** dot points */}
                            {entry.dotPoints}
                        </ul>

                    </div>
                </div>
            }
        </div>
    ));

    return (articleHTML);
}