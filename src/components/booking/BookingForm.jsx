import React from "react";
import { useBooking } from "../../state/BookingState";

const BookingForm = ({}) => {
	const { formData, availableTimes, onChange, onSubmit } = useBooking();

	return (
		<>
			<section id="bookingForm">
				<form action="" onSubmit={onSubmit}>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={formData["res-date"]}
						onChange={onChange}
					/>
					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						value={formData["res-time"]}
						onChange={onChange}
					>
						{availableTimes.map((visitTime, index) => (
							<option key={index}>{visitTime}</option>
						))}
					</select>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						value={formData["guests"]}
						onChange={onChange}
					/>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={formData["occasion"]}
						onChange={onChange}
					>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<button
						type="submit"
						disabled={!formData.isTouched}
						aria-disabled={!formData.isTouched}
					>
						Make Your reservation
					</button>
				</form>
			</section>
		</>
	);
};

export default BookingForm;
