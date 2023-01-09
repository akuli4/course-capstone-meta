import React from "react";
import Input from "../util/form/Input";
import Select from "../util/form/Select";
import { useBooking } from "../../state/BookingState";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({}) => {
	const { availableTimes, onSubmit: submitForm } = useBooking();
	const formik = useFormik({
		initialValues: {
			"res-date": "",
			"res-time": "17:00",
			guests: "1",
			occasion: "Birthday",
		},
		onSubmit(values) {
			submitForm(values);
		},
		validationSchema: Yup.object({
			"res-date": Yup.date()
				.min(new Date(), "Please choose appropriate date")
				.max(
					new Date().getFullYear() + 1,
					"We only have bookings for the current year"
				)
				.required("Choose a date for your visit"),
			"res-time": Yup.string()
				.matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
				.required("Choose time for your visit"),
			guests: Yup.number()
				.min(1, "Minimum number of guests is 1")
				.max(10, "Maximum number of guests is 10")
				.required("Provide guest count"),
			occasion: Yup.string().required("Provide occasion"),
		}),
	});
	return (
		<>
			<section id="bookingForm">
				<form action="" onSubmit={formik.handleSubmit}>
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
						disabled={!(formik.isValid && formik.dirty)}
						aria-disabled={!(formik.isValid && formik.dirty)}
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
