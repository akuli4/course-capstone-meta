import React from "react";
import Link from "../util/button/Link";
import styles from "../../../lib/card.module.css";

const Card = ({ data, children }) => {
	return (
		<li className={styles.card}>
			<div className="image-wrapper">
				<img src={data.image} alt={data.dish.title} loading="lazy" />
			</div>
			<div className={styles.wrapper}>
				<div className={styles.head}>
					<h5>{data.dish.title}</h5>
					<p>{data.dish.price}</p>
				</div>
				<div className={styles.body}>
					<p>{data.dish.description}</p>
				</div>
				<div className={styles.footer}>
					<Link to={data.page ?? "#"}>
						Order Online{" "}
						<span className={styles.leftArrow}>&rarr;</span>
					</Link>
				</div>
			</div>
		</li>
	);
};

export default Card;
