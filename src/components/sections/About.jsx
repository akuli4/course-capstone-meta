import React from "react";
import sectionStyles from "./sections.module.css";

const About = () => {
	return (
		<section className={sectionStyles.about} id="about">
			<div className="wrapper">
				<div className="left">
					<div className="head">
						<h1>Little Lemon</h1>
						<p>Chicago</p>
					</div>
					<div className="body">
						<p>
							Little Lemon is a family owned Mediterranean
							restaurant, focused on traditional recipies served
							with a modern twist.
						</p>
					</div>
				</div>
				<div className="right">
					<div className="magic-box">
						<div className="top">
							<img
								loading="lazy"
								src="/Mario and Adrian A.jpg"
								alt="Mario and Adrian"
							/>
						</div>
						<div className="bottom">
							<img
								loading="lazy"
								src="restaurant chef B.jpg"
								alt="Little Lemon's Chef"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
