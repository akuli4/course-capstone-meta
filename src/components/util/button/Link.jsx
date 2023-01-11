import React from "react";
import { Link as ReactLink } from "react-router-dom";
import styles from "./link.module.css";

const Link = ({ to, variant, children }) => {
	return (
		<ReactLink to={to} className={styles[variant]}>
			{children}
		</ReactLink>
	);
};

export default Link;
