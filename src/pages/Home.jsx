import React from "react";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import Testimonials from "../components/sections/Testimonials";
import About from "../components/sections/About";
import styles from "../../lib/utils.module.css";

const Home = () => {
	return (
		<>
			<Hero />

			<Highlights />

			<Testimonials />

			<About />
		</>
	);
};

export default Home;
