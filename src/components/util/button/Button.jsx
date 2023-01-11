import React from "react";
import styles from "./button.module.css";
const Button = ({ text, variant = "primary", mt = "0", children }) => {
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
		<div style={{ marginTop: `${mt}rem` }}>
			<button className={`${styles.primary}`}>{text}</button>
		</div>
	);
};

export default Button;
