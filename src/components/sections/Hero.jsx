import React from "react";
import Button from "../util/button/Button";
import sectionStyles from "./sections.module.css";
import styles from "../../../lib/hero.module.css";
const Hero = () => {
	return (
		<section className={sectionStyles.home}>
			<div className={styles.wrapper}>
				<div className={styles.homeLeft}>
					<div className={styles.textBox}>
						<h1>Little Lemon</h1>
						<h3>Chicago</h3>
						<p>
							We are family owned Mediterranean restaurant,
							focused on traditional recipies served with a modern
							twist.
						</p>
						<span className="background"></span>
					</div>
					<div className="hero-btn-box">
						<Button
							text="Reserve a Table"
							variant="primary"
							mt="1.5"
						/>
					</div>
				</div>
				<div className={styles.homeRight}>
					<img
						src="/restauranfood.jpg"
						alt="Special dish"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
