import React from "react";
import BookingForm from "../components/booking/BookingForm";
import styles from "../../lib/utils.module.css";
const Booking = () => {
	return (
		<section
			id="booking"
			aria-label="Booking page"
			className={`${styles.vh} ${styles.minW40} ${styles.minW40}`}
		>
			<BookingForm />
		</section>
	);
};

export default Booking;
