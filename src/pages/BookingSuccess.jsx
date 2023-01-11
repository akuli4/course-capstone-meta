import React from "react";
import intlFormat from "date-fns/intlFormat";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
	const [searchParams] = useSearchParams();
	const date = new Date(searchParams.get("date"));
	return (
		<section>
			<div className="wrapper">
				<div className="left">
					<h3>We are preparing for your visit!</h3>
					<div>
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
					<div>
						<Link to={"/"}>Back to home &rarr;</Link>
					</div>
				</div>
				<div className="right">
					<img
						src="/restaurant.jpg"
						alt="Little Lemon Atmosphere"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export default BookingSuccess;
