import React from "react";
import Button from "../util/button/Button";
import styles from "../../../lib/utils.module.css";
const Hero = () => {
	return (
		<>
			<div
				className={`${styles.flexCol} ${styles.wlg} ${styles.justifyCenter}`}
			>
				<h1 className={`${styles.lg} ${styles.bold}`}>Little Lemon</h1>
				<h3 className={`${styles.md} ${styles.regular} ${styles.mtb1}`}>
					Chicago
				</h3>
				<p className={`${styles.sm} ${styles.regular}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Laboriosam exercitationem blanditiis impedit delectus libero
					obcaecati, natus voluptas doloribus quos.
				</p>
				<Button text={"Order online"} />
			</div>
			<div
				className={`${styles.imagewrap} ${styles.flex} ${styles.centerall}`}
			>
				<img src="/hero.jpg" alt="" className={styles.imagelg} />
			</div>
		</>
	);
};

export default Hero;
