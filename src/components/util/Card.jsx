import React from "react";
import Link from "../util/button/Link";

const Card = ({ data, children }) => {
	return (
		<li>
			<div className="image-wrapper">
				<img src={data.image} alt={data.dish.title} loading="lazy" />
			</div>
			<div className="wrapper">
				<div className="dish-info-wrapper">
					<div className="title">
						<h5>{data.dish.title}</h5>
						<p>{data.dish.price}</p>
					</div>
					<div className="description">
						<p>{data.dish.description}</p>
					</div>
					<div className="link">
						<Link to={data.page ?? "#"}>&rarr;</Link>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Card;
