import React from "react";
import sectionStyles from "./sections.module.css";
import styles from "../../../lib/about.module.css";

const About = () => {
	return (
		<section className={sectionStyles.about} id="about">
			<div className={styles.wrapper}>
				<div className={styles.textBox}>
					<h1>Little Lemon</h1>
					<h3>Chicago</h3>
					<p>
						Little Lemon is a family owned Mediterranean restaurant,
						focused on traditional recipies served with a modern
						twist.
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.magicBox}>
						<div className={styles.top}>
							<div alt="Mario and Adrian"></div>
						</div>
						<div className={styles.bottom}>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
