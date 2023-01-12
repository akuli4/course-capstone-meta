import React from "react";
import styles from "./testimonial.module.css";

const Testimonial = ({ data }) => {
	return (
		<li className={styles.wrapper}>
			<div className={styles.top}>
				<h3>{data.rating}</h3>
				<img src="/icons/star.png" alt="" />
			</div>
			<div className={styles.mid}>
				<div className="image-box">
					<img src={data.image} alt={data.name} loading="lazy" />
				</div>
				<div className={styles.name}>
					<p>{data.name}</p>
				</div>
			</div>
			<div className={styles.bot}>
				<p>{data.comment}</p>
			</div>
		</li>
	);
};

export default Testimonial;
