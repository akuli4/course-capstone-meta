import React from "react";
import styles from "../../../lib/header.module.css";

const Header = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>{children}</div>
		</header>
	);
};

export default Header;
