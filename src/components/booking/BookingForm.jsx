import React from "react";
import Input from "../util/form/Input";
import Select from "../util/form/Select";
import { useBooking } from "../../state/BookingState";
import { useFormik } from "formik";

const BookingForm = ({}) => {
	const { formData, availableTimes, onChange, onSubmit } = useBooking();
	const formik = useFormik({
		initialValues: {
			"res-date": "",
			"res-time": "17:00",
			guests: "1",
			occasion: "Birthday",
		},
		onSubmit(values) {
			alert(JSON.stringify(values));
		},
	});
	return (
		<>
			<section id="bookingForm">
				<form action="" onSubmit={onSubmit}>
					<Input
						type={"date"}
						id={"res-date"}
						title={"Choose date"}
						formData={formik}
						onChange={formik.handleChange}
					/>

					<Select
						id={"res-time"}
						title={"Choose time"}
						formData={formik}
						availableTimes={availableTimes}
						onChange={formik.handleChange}
					/>

					<Input
						type={"number"}
						id={"guests"}
						title={"Guests"}
						formData={formik}
						onChange={formik.handleChange}
						min={"1"}
						max={"10"}
					/>

					<Select
						id={"occasion"}
						title={"Occasion"}
						formData={formik}
						onChange={formik.handleChange}
					/>

					<button
						type="submit"
						// disabled={!formData.isValid}
						// aria-disabled={!formData.isValid}
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
