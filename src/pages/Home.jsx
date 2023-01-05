import React from "react";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import Testimonials from "../components/sections/Testimonials";
import About from "../components/sections/About";
import styles from "../../lib/utils.module.css";

const Home = () => {
	return (
		<>
			<section className={`hero ${styles.flex}`}>
				<Hero />
			</section>

			<section
				className={`highlights ${styles.flexCol} ${styles.alignCenter} ${styles.w100} ${styles.h100} ${styles.mwp}`}
			>
				<Highlights />
			</section>

			<section
				className={`testimonials ${styles.flexCol} ${styles.centerall} ${styles.w100} ${styles.h100} ${styles.mwp}`}
			>
				<Testimonials />
			</section>

			<section
				className={`about ${styles.flex} ${styles.centerall} ${styles.w100} ${styles.h100} ${styles.mwp}`}
			>
				<About />
			</section>
		</>
	);
};

export default Home;
