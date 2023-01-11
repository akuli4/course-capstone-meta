import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../lib/header.module.css";

const APP_LINKS = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About",
		url: "#",
	},
	{
		title: "Menu",
		url: "#",
	},
	{
		title: "Reservations",
		url: "/booking",
	},
	{
		title: "Order online",
		url: "#",
	},
	{
		title: "Login",
		url: "#",
	},
];
const Nav = () => {
	return (
		<nav className={styles.navList}>
			<ul>
				{APP_LINKS.map((link, index) => (
					<li key={index} className={styles.navLink}>
						<Link to={link.url}>{link.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
