import React from "react";
import Button from "../util/button/Button";
import Card from "../util/Card";
import sectionStyles from "./sections.module.css";

const CARD_CONTENT = [
	{
		id: "1",
		dish: {
			title: "Greek Salad",
			description:
				"The famous greek salad of crispy lettuce, peppers, olives and our Chicago garlic and rosemary croutons.",
			price: "$12.99",
		},
		image: "/greek salad.jpg",
	},
	{
		id: "2",
		dish: {
			title: "Bruschetta",
			description:
				"Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
			price: "$5.99",
		},
		image: "/bruchetta.svg",
	},
	{
		id: "3",
		dish: {
			title: "Lemon Dessert",
			description:
				"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
			price: "$5.00",
		},
		image: "/lemon dessert.jpg",
	},
];

const Highlights = () => {
	return (
		<section className={sectionStyles.specials}>
			<div className="wrapper">
				<div className="top">
					<h1>This weeks specials!</h1>
					<Button text={"Online menu"} />
				</div>
				<ul className="bottom">
					{CARD_CONTENT.map((data, index) => (
						<Card data={data} key={data.id} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Highlights;
