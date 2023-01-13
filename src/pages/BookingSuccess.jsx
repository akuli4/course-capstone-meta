import React from "react";
import intlFormat from "date-fns/intlFormat";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import sectionStyles from "../../lib/utils.module.css";
import styles from "../../lib/booking.module.css";
const BookingSuccess = () => {
	const [searchParams] = useSearchParams();
	const date = new Date(searchParams.get("date"));
	return (
		<section className={sectionStyles.booking}>
			<div className={styles.bookingSuccess}>
				<div className="left">
					<h3>We are preparing for your visit!</h3>
					<div className={styles.infoBlock}>
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
					<div className={styles.backBtn}>
						<Link to={"/"}>Back to home &rarr;</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingSuccess;
