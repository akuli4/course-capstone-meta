import React from "react";
import { useSearchParams } from "react-router-dom";
const BookingSuccess = () => {
	const [searchParams] = useSearchParams();
	return (
		<div>
			<h3>Thank you!</h3>
			<p>Your booking is done!</p>
			<p>
				Your booking date is{" "}
				{searchParams.get("date") ?? "could not be retrieved"}
			</p>
		</div>
	);
};

export default BookingSuccess;
