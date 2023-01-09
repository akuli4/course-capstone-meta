import React from "react";
import Input from "../util/form/Input";
import Select from "../util/form/Select";
import { useBooking } from "../../state/BookingState";

const BookingForm = ({}) => {
	const { formData, availableTimes, onChange, onSubmit } = useBooking();

	return (
		<>
			<section id="bookingForm">
				<form action="" onSubmit={onSubmit}>
					<Input
						type={"date"}
						id={"res-date"}
						title={"Choose date"}
						formData={formData}
						onChange={onChange}
					/>

					<Select
						id={"res-time"}
						title={"Choose time"}
						formData={formData}
						availableTimes={availableTimes}
						onChange={onChange}
					/>

					<Input
						type={"number"}
						id={"guests"}
						title={"Guests"}
						formData={formData}
						onChange={onChange}
						min={"1"}
						max={"10"}
					/>

					<Select
						id={"occasion"}
						title={"Occasion"}
						formData={formData}
						onChange={onChange}
					/>

					<button
						type="submit"
						disabled={!formData.isValid}
						aria-disabled={!formData.isValid}
						aria-label="Reserve a table"
					>
						Make Your reservation
					</button>
				</form>
			</section>
		</>
	);
};

export default BookingForm;
