import React from "react";
import intlFormat from "date-fns/intlFormat";
import { useSearchParams } from "react-router-dom";
import styles from "../../lib/utils.module.css";
import Button from "../components/util/button/Button";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
	const [searchParams] = useSearchParams();
	const date = new Date(searchParams.get("date"));
	return (
		<section className={`${styles.bs} ${styles.vh}`}>
			<div className={`${styles.box}`}>
				<h3>You are booked!</h3>
				<div className={styles.summary}>
					<p>Your booking date is</p>
					<p>
						{intlFormat(date, {
							weekday: "long",
							year: "numeric",
							day: "numeric",
							month: "long",
						}) ?? "could not be retrieved"}
					</p>
				</div>
				<div className="box">
					<Link to={"/"}>Back to home &rarr;</Link>
				</div>
			</div>
		</section>
	);
};

export default BookingSuccess;
