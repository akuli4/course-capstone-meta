import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../lib/header.module.css";
import { useLocation } from "react-router-dom";

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
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();
	console.log(location.pathname, APP_LINKS[0].url);
	function handleMenu() {
		setIsOpen((prev) => !prev);
	}
	return (
		<nav className={styles.navList}>
			<ul className={styles.desktopMenu}>
				{APP_LINKS.map((link, index) => (
					<li
						key={index}
						className={
							location.pathname === link.url
								? `${styles.navLink} ${styles.active}`
								: styles.navLink
						}
					>
						<Link to={link.url}>{link.title}</Link>
					</li>
				))}
			</ul>
			<div className={styles.mobileNav}>
				<button
					type="button"
					onClick={handleMenu}
					aria-pressed={isOpen ? "true" : "false"}
				>
					<img src="/icons/ham.svg" alt="Open menu" />
				</button>
				{isOpen && (
					<div
						className={styles.mobileMenu}
						aria-expanded={isOpen ? "true" : "false"}
					>
						<ul>
							<button
								type="button"
								onClick={handleMenu}
								style={{ fontSize: "14pt" }}
								aria-pressed={isOpen ? "true" : "false"}
							>
								&#10060;
							</button>
							{APP_LINKS.map((link, index) => (
								<li
									key={index}
									className={
										location.pathname === link.url
											? `${styles.navLink} ${styles.active}`
											: styles.navLink
									}
								>
									<Link to={link.url}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
