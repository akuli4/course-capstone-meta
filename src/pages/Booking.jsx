import React from "react";
import BookingForm from "../components/booking/BookingForm";
import styles from "../../lib/utils.module.css";
const Booking = () => {
	return (
		<section
			className={styles.booking}
			id="booking"
			aria-label="Book a table at Little Lemon"
		>
			<BookingForm />
		</section>
	);
};

export default Booking;
