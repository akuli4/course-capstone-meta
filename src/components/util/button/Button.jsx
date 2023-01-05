import React from "react";
import styles from "./button.module.css";
const Button = ({ text }) => {
	return (
		<div>
			<button className={`${styles.primary} ${styles.mt1}`}>
				{text}
			</button>
		</div>
	);
};

export default Button;
