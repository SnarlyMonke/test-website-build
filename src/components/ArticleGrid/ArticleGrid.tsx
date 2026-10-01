import styles from "./ArticleGrid.module.css"

import Accordion from "react-bootstrap/Accordion";

import type { Article } from "../../components/ArticleGrid/Article.type.ts"
import { articleToHTML, articleToUnclickableHTML } from "../../components/ArticleGrid/articleToHTML.tsx";


type Props = {
    articles: Article[];
    clickable?: boolean;
    columns?: number;
};

function ArticleGrid({ articles, clickable=true, columns=2 }: Props) {

    /** formatting the articles into stuffgrid acceptable format */
    let articlesHTML: React.ReactNode[];

    if (clickable) { //clickable; eg expandable
        articlesHTML = articleToHTML(articles);
    }
    else { //cant click that foo
        articlesHTML = articleToUnclickableHTML(articles);
    }


    /** deciding mount of columns */
    let columnClassName: string;

    switch (columns) {
    case 1:
        columnClassName = styles["one-column"];
        break;
    case 2:
        columnClassName = styles["two-columns"];
        break;
    case 3:
        columnClassName = styles["three-columns"];
        break;
    default:
        columnClassName = styles["two-columns"];
        break;
    }


    return (
        <Accordion className={`${styles["article-holder"]} ${columnClassName}`}>
            {articlesHTML}
        </Accordion>
    );
}

export default ArticleGrid