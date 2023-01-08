import React from "react";
import BookingForm from "../components/booking/BookingForm";

const Booking = () => {
	return (
		<section id="booking" aria-label="Booking page">
			<div className="heading">
				<h3>Book now</h3>
			</div>
			<BookingForm />
		</section>
	);
};

export default Booking;
