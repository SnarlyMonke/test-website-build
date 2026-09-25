import styles from "./Header.module.css"
import burgerStyles from "./Hamburger.module.css"

import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Fade as HamburgerIcon } from 'hamburger-react'

import { siteConfig } from "../../scripts/site.ts";
import type {Page} from "./Page.type.ts";

import logoImage from "../../assets/logos/logo.svg"
import logoText from "../../assets/logos/AcQuityLegal_text_only_tp.svg"
import logoTextFolded from "../../assets/logos/AcQuityLegal_text_only_folded_tp.svg"


type Props = {}


function Header({}: Props) {

    const firmName = siteConfig.details.firmName;
    // const firmNameFull = siteConfig.details.firmNameFull;
    // const webURL = siteConfig.details.websiteURL;

    // const contactName = siteConfig.contact.name;
    // const contactPhone = siteConfig.contact.phone;
    // const contactEmail = siteConfig.contact.contactEmail;

    //#region usestates
    const containerRefs = useRef<Record<string, HTMLElement | null>>({}); /** holds the widths of the header elements */

    const [useOptions, setUseOptions] = useState(true); /** whether or not the options should be displayed */
    const [useHamburger, setUseHamburger] = useState(false); /** whether or not the hamshmurger should be displayed */
    const [useLogoImage, setUseLogoImage] = useState(true); /** whether or not the logo image should be displayed */
    const [useLogoText, setUseLogoText] = useState(true); /** whether or not the logo text should be displayed */
    const [useLogoTextFolded, setUseLogoTextFolded] = useState(false); /** whether or not the folded up logo text should be displayed */

    const [rootFontSize, setRootFontSize] = useState(parseFloat(getComputedStyle(document.documentElement).fontSize));

    //#endregion


    //#region options
    const headerOptions: Page[] = [
        {id: 0, namedId: "home", link: "/", name: "Home", style: "page-link"},
        {id: 1, namedId: "about", link: "/about/", name: "About", style: "page-link"},
        {id: 2, namedId: "expertise", link: "/expertise/", name: "Expertise", style: "page-link"},
        {id: 3, namedId: "clients", link: "/clients/", name: "Who I Help", style: "page-link"},
        {id: 4, namedId: "contact", link: "/contact/", name: "Get In Touch", style: "page-link-bold"},
    ];

    /** formatting options at the top bar */
    const headerList = headerOptions.map(option => <li key={option.id} value={option.link} className={styles["page-box"]}>
        <Link to={option.link} className={styles[option.style]}>
            <b id={option.namedId}>{option.name}</b>
        </Link>
    </li>); //maps food (every item in foods) into list brackets

    /** formatting options at the top bar (but for murger instead) */
    const burgerList = headerOptions.map(option => <li key={option.id} value={option.link}
        className={`${burgerStyles["page-box"]} ${option.style === "page-link-bold" ? burgerStyles["page-link-bold-li"] : ""}`} /** adds the bottom-link class to the li instead of the a */
    >
        <Link to={option.link} className={burgerStyles[option.style]}>
            <b>{option.name}</b>
        </Link>
    </li>); //maps food (every item in foods) into list brackets



    /** hamburger management */
    const [open, setOpen] = useState(false);

    const flipOpen = () => { /** triggers when the burger menu is clicked */
        console.log(`schmidt is ${!open}`); /** tells what the state is */
        
        setOpen(!open); /* flips the state */
    }

    //#endregion


    //#region HTML

    /** html icon for shmurger */
    const hamburgerHTML = <HamburgerIcon 
        toggled={open} toggle={flipOpen}
        size={1.56*rootFontSize} direction="right" color="var(--bcolor-navy)"
        duration={0.3}
    />


    /** used for measuring the width of boxes */
    const hiddenHeader = 
        <header
            className={`${styles["header"]} ${styles["hidden-header"]}`}
            ref={(element) => {containerRefs.current["hidden_header"] = element;}}
        > {/** snatches css of header, then hides it with hidden-header */}

            {/** corner logo */}
            <Link to="/" className={styles["logo-container"]}
                id="container_logo" ref={(element) => {containerRefs.current["container_logo"] = element;}}
            >

                <img src={logoImage} alt={`${firmName} Logo`}
                    className={styles["logo"]}
                    id="container_logo_image"
                    ref={(element) => {containerRefs.current["container_logo_image"] = element;}}
                ></img> {/* just the logo */}


                <img src={logoText} alt={firmName}
                    className={styles["logo-text"]}
                    id="container_logo_text"
                    ref={(element) => {containerRefs.current["container_logo_text"] = element;}}
                ></img> {/* long text */}


                <img src={logoTextFolded} alt={firmName}
                    className={styles["logo-text-folded"]}
                    id="container_logo_text_folded"
                    ref={(element) => {containerRefs.current["container_logo_text_folded"] = element;}}
                ></img> {/* smooshed text */}

            </Link>

            {/** header options */}
            <nav
                className={styles["navigation-box"]}
                id="container_options"
                ref={(element) => {containerRefs.current["container_options"] = element;}}
            >
                {headerList}
            </nav>

            {/** hamburger icon */}
            <div
                className={styles["hamburger"]}
                id="container_hamburger"
                ref={(element) => {containerRefs.current["container_hamburger"] = element;}}
            >
                {hamburgerHTML}
            </div>
        </header>


    /** tha actual header shown on the page */
    const shownHeader =
        <header className={styles["header"]}>

            {/** corner logo */}
            <Link to="/" className={styles["logo-container"]}
                id="container_logo" ref={(element) => {containerRefs.current["container_logo"] = element;}}>

                <img src={logoImage} alt={`${firmName} Logo`}
                    className={`${styles["logo"]} ${useLogoImage ? styles["use-logo-image"] : styles["remove-logo-image"]}`}
                ></img> {/* just the logo */}


                <img src={logoText} alt={firmName}
                    className={`${styles["logo-text"]} ${useLogoText ? styles["use-logo-text"] : styles["remove-logo-text"]}`}
                ></img> {/* long text */}


                <img src={logoTextFolded} alt={firmName}
                    className={`${styles["logo-text-folded"]} ${useLogoTextFolded ? styles["use-logo-text-folded"] : styles["remove-logo-text-folded"]}`}
                ></img> {/* smooshed text */}

            </Link>


            {/** header options */}
            <nav className={`${styles["navigation-box"]} ${useOptions ? styles["use-options"] : styles["remove-options"]}`}>
                {headerList}
            </nav>


            {/** hamburger icon */}
            <div className={`${styles["hamburger"]} ${useHamburger ? styles["use-hamburger"] : styles["remove-hamburger"]}`}>
                {hamburgerHTML}
            </div>

        </header>


    /** drop down menu for options (thin display only) */
    const dropDownMenu =
        <div className={`${burgerStyles["hamburger-popup"]}
        ${open ? burgerStyles["open"] : burgerStyles["closed"]}
        ${useHamburger ? styles["use-hamburger"] : styles["remove-hamburger"]}`}>
            <nav className={burgerStyles["navigation-box"]}>
                {burgerList}
            </nav>
        </div>
    
    //#endregion


    //#region murger size
    useEffect(() => {
        const root = document.documentElement;

        const updateFontSize = () => {
            const size = parseFloat(getComputedStyle(root).fontSize);
            setRootFontSize(size);
        };

        updateFontSize();

        const observer = new ResizeObserver(updateFontSize);
        observer.observe(root);

        window.addEventListener("resize", updateFontSize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateFontSize);
        };
    }, []);

    //#endregion


    //#region width calc
    /** measuring window width, and passing it into the css */

    useEffect(() => {

        const measure = () => {
            const optionsRef = containerRefs.current["container_options"];
            const hamburgerRef = containerRefs.current["container_hamburger"];
            const logoImageRef = containerRefs.current["container_logo_image"];
            const logoTextRef = containerRefs.current["container_logo_text"];
            const logoTextFoldedRef = containerRefs.current["container_logo_text_folded"];

            const optionsW = optionsRef?.getBoundingClientRect().width ?? 0;
            const hamburgerW = hamburgerRef?.getBoundingClientRect().width ?? 0;
            const logoIW = logoImageRef?.getBoundingClientRect().width ?? 0;
            const logoTW = logoTextRef?.getBoundingClientRect().width ?? 0;
            const logoTFW = logoTextFoldedRef?.getBoundingClientRect().width ?? 0;

            /** console shlog */
            // console.log(`Options: ${optionsW} ... ${useOptions}`);
            // console.log(`Hamburger: ${hamburgerW} ... ${useHamburger}`);
            // console.log(`logoImageRef: ${logoIW} ... ${useLogoImage}`);
            // console.log(`logoTextRef: ${logoTW} ... ${useLogoText}`);
            // console.log(`logoTextFoldedRef: ${logoTFW} ... ${useLogoTextFolded}`);

            const screenWidth = window.innerWidth; /** get screen width */
            // console.log("screen width:", screenWidth);

            const ITOLimit = (logoIW + logoTW + optionsW + 25); /** limit with logo, large text AND options */
            const ITFOLimit = (logoIW + logoTFW + optionsW + 15); /** limit with logo, folded text AND options */
            const IOLimit = (logoIW + optionsW + 15); /** limit with logo, folded text AND options */
            const ITHLimit = (logoIW + logoTW + hamburgerW + 25); /** limit with logo, large text AND options */
            const ITFHLimit = (logoIW + logoTFW + hamburgerW + 25); /** limit with logo, folded text AND options */
            // const IHLimit = (logoIW + hamburgerW + 15); /** limit with logo, folded text AND options */
            
            /** change whats visible and whats not */
            if (screenWidth > ITOLimit) { /** the largest display fits */
                /** I */  setUseLogoImage(true);
                /** T */  setUseLogoText(true);
                /** TF */ setUseLogoTextFolded(false);
                /** O */  setUseOptions(true);
                /** H */  setUseHamburger(false);
            } else if (screenWidth > ITFOLimit) { /** the folded text */
                /** I */  setUseLogoImage(true);
                /** T */  setUseLogoText(false);
                /** TF */ setUseLogoTextFolded(true);
                /** O */  setUseOptions(true);
                /** H */  setUseHamburger(false);
            } else if (screenWidth > IOLimit) { /** logo w options fits */
                /** I */  setUseLogoImage(true);
                /** T */  setUseLogoText(false);
                /** TF */ setUseLogoTextFolded(false);
                /** O */  setUseOptions(true);
                /** H */  setUseHamburger(false);
            } else if (screenWidth > ITHLimit) { /** big text w shmurger fits */
                /** I */  setUseLogoImage(true);
                /** T */  setUseLogoText(true);
                /** TF */ setUseLogoTextFolded(false);
                /** O */  setUseOptions(false);
                /** H */  setUseHamburger(true);
            } else if (screenWidth > ITFHLimit) { /** folded w murger fits */
                /** I */  setUseLogoImage(true);
                /** T */  setUseLogoText(false);
                /** TF */ setUseLogoTextFolded(true);
                /** O */  setUseOptions(false);
                /** H */  setUseHamburger(true);
            } else { /** just logo n murger, FINAL CASE*/
                /** I */  setUseLogoImage(true);
                /** T */  setUseLogoText(false);
                /** TF */ setUseLogoTextFolded(false);
                /** O */  setUseOptions(false);
                /** H */  setUseHamburger(true);
            }

        };


        const hiddenHeader = containerRefs.current["hidden_header"]; /** gets the hidden header */

        if (!hiddenHeader) return;

        const resizeObserver = new ResizeObserver(() => { measure(); }); /** makes a resize observer guy */
        resizeObserver.observe(hiddenHeader); /** observes him */

        // Also handle normal browser resizing
        window.addEventListener("resize", measure); /** this is just normal browser resizing */

        measure();

        return () => { /** removes everything to listen when done */
            resizeObserver.disconnect();
            window.removeEventListener("resize", measure);
        };


    }, []);

    //#endregion


    //#region final return
    return (<>
        {hiddenHeader}
        {shownHeader}
        {dropDownMenu}
        <div className={styles["header-break"]}></div> {/** fills in the area where the header would take up space */}
    </>);
    //#endregion
}

export default Header