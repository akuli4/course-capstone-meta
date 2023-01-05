import React from "react";
import styles from "../../../lib/utils.module.css";
const About = () => {
	return (
		<>
			<div className={` ${styles.wlg} ${styles.flexCol} ${styles.gap1}`}>
				<h1 className={styles.lg}>Little Lemon</h1>
				<h3 className={`${styles.mb2} ${styles.regular}`}>Chicago</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Dolore repellat, unde exercitationem debitis necessitatibus
					a porro quis. Blanditiis, dignissimos earum.
				</p>
			</div>
			<div className={`${styles.mwlg}`}>
				<div className={styles.f_i_mc}>
					<img
						src="/hero.jpg"
						alt="Top"
						className={`${styles.aboutImg} ${styles.top}`}
						id="top"
					/>

					<img
						src="/hero.jpg"
						alt="Bottom"
						className={`${styles.aboutImg} ${styles.bottom}`}
						id="bot"
					/>
				</div>
			</div>
		</>
	);
};

export default About;
