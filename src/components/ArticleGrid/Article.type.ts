import type { ReactNode } from "react";

export type Article = {
    title?: string; /** just the text inside */
    titleHTML?: ReactNode; /** all the html, even wrapper */

    image: string;

    shortDescription?: string; /** just the text inside */
    shortDescriptionHTML?: ReactNode; /** all the html, even wrapper */

    dotPointPreface?: string; /** just the text inside */
    dotPointPrefaceHTML?: ReactNode; /** all the html, even wrapper */

    dotPoints?: string[]; /** just the text inside */
    dotPointsHTML?: ReactNode[]; /** all the html, even wrapper. DONT INCLUDE <ul></ul> */
}