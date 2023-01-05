import React from "react";
import styles from "./testimonial.module.css";
const Testimonial = () => {
	return (
		<li className={`${styles.box}`}>
			<h3>Rating</h3>
			<div className="client">
				<img src="#" alt="Happy Client" />
				<h3>Name</h3>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Veniam, repudiandae?
			</p>
		</li>
	);
};

export default Testimonial;
