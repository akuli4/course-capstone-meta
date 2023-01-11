import React from "react";
import Testimonial from "../util/testimonial/Testimonial";
import sectionStyles from "./sections.module.css";

const FAKE_RATINGS = [
	{
		id: "1",
		name: "Name",
		rating: "3",
		comment: "Review text",
	},
	{
		id: "2",
		name: "Name",
		rating: "5",
		comment: "Review text",
	},
	{
		id: "3",
		name: "Name",
		rating: "4.5",
		comment: "Review text",
	},
];

const Testimonials = () => {
	return (
		<section className={sectionStyles.testimonials}>
			<div className="wrapper">
				<div className="top">
					<h1>Testimonials</h1>
				</div>
				<div className="bottom">
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
