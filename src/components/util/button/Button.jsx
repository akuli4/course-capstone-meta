import React from "react";
import styles from "./button.module.css";
const Button = ({ text, variant = "primary", children }) => {
	if (variant === "nobg") {
		return (
			<div>
				<button
					className={`${styles.secondary} ${styles.mtsm} ${styles.btns}`}
				>
					{text}
					{children}
				</button>
			</div>
		);
	}

	return (
		<div>
			<button className={`${styles.primary} ${styles.mt1} ${styles.btn}`}>
				{text}
			</button>
		</div>
	);
};

export default Button;
