import React from "react";
import Button from "../util/button/Button";
import Card from "../util/Card";
import styles from "../../../lib/utils.module.css";
const Highlights = () => {
	return (
		<>
			<div
				className={`${styles.responsiveFlex} ${styles.w100} ${styles.flexGap} ${styles.alignCenter}`}
			>
				<h1 className={styles.lg}>Specials</h1>
				<Button text={"Browse menu"} />
			</div>
			<ul
				className={`${styles.responsiveFlex} ${styles.centerall} ${styles.gap5} ${styles.w100}  ${styles.h100}`}
			>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</ul>
		</>
	);
};

export default Highlights;
