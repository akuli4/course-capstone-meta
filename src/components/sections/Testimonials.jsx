import React from "react";
import Testimonial from "../util/testimonial/Testimonial";
import sectionStyles from "./sections.module.css";
import styles from "../../../lib/testimonials.module.css";

const FAKE_RATINGS = [
	{
		id: "1",
		name: "Judah",
		rating: "4",
		comment:
			"This is a pearl! The food is marvelous & the service is personal, engaging & excellent, having a good knowledge of what . . .",
		image: "/customer1.png",
	},
	{
		id: "2",
		name: "Darianna",
		rating: "5",
		comment:
			"We had the salmon and the deer and we loved both. Very good quality and kind service. We were happy with the total experience.",
		image: "/customer2.png",
	},
	{
		id: "3",
		name: "Kalisha",
		rating: "4.5",
		comment:
			"Had lunch at this cosy place on our last day of staying in Chicago. Tasty lunch and good service. We had a vegetarian and a . . .",
		image: "/customer3.png",
	},
];

const Testimonials = () => {
	return (
		<section className={sectionStyles.testimonials}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					<h1>Testimonials</h1>
					<ul>
						{FAKE_RATINGS.map((testimonial) => (
							<Testimonial
								data={testimonial}
								key={testimonial.id}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
