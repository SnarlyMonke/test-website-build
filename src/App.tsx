import { Outlet } from "react-router-dom";
import styles from "./App.module.css"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import logoOminous from "./assets/logos/ominous_headon.svg"


function App() {

	return (
		<div className={styles["app"]}>
			<Header/>
			<Outlet/>
			<Footer/>

			<img src={logoOminous} alt="" className={styles["ominous-logo"]}/>
		</div>
	);
}

export default App