import React from "react";
const Testimonial = ({ data }) => {
	return (
		<li>
			<div className="top">
				<h3>{data.rating}</h3>
			</div>
			<div className="mid">
				<div className="image-box">
					<img src={data.image} alt={data.name} loading="lazy" />
				</div>
				<div className="name">
					<p>{data.name}</p>
				</div>
			</div>
			<div className="bot">
				<div className="comment">
					<p>{data.comment}</p>
				</div>
			</div>
		</li>
	);
};

export default Testimonial;
