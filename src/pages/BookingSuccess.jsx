import React from "react";
import intlFormat from "date-fns/intlFormat";
import { useSearchParams } from "react-router-dom";
const BookingSuccess = () => {
	const [searchParams] = useSearchParams();
	const date = new Date(searchParams.get("date"));
	return (
		<div>
			<h3>Thank you!</h3>
			<p>Your booking is done!</p>
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
	);
};

export default BookingSuccess;
