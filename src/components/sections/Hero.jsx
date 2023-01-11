import React from "react";
import Button from "../util/button/Button";
import sectionStyles from "./sections.module.css";

const Hero = () => {
	return (
		<section className={sectionStyles.home}>
			<div className="wrapper">
				<div className="home-left">
					<div className="text-box">
						<h1>Little Lemon</h1>
						<h3>Chicago</h3>
						<p>
							We are family owned Mediterranean restaurant,
							focused on traditional recipies served with a modern
							twist.
						</p>
					</div>
					<div className="hero-btn-box">
						<Button text={"Reserve a Table"} />
					</div>
				</div>
				<div className="home-right">
					<img
						src="/restauranfood.jpg"
						alt="Special dish"
						loading="lazy"
					/>
				</div>
				<div className="background"></div>
			</div>
		</section>
	);
};

export default Hero;
