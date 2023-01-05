import React from "react";
import styles from "../../../lib/utils.module.css";
import Button from "../util/button/Button";

const Card = () => {
	return (
		<li className={styles.card}>
			<img src="/hero.jpg" alt="" className={styles.cardImg} />
			<div className={styles.infoBox}>
				<div className={`${styles.flex} ${styles.alignCenter}`}>
					<h1>Greek Salad</h1>
					<h3 className={`${styles.ml1} ${styles.regular}`}>$5.95</h3>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero tempora perspiciatis minima vero quam magnam
					voluptatum dignissimos quia nihil eaque!
				</p>
				<Button text={"Order a delivery"} variant={"nobg"}>
					&nbsp; &rarr;
				</Button>
			</div>
		</li>
	);
};

export default Card;
