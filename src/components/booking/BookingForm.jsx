import React from "react";
import Input from "../util/form/Input";
import Select from "../util/form/Select";
import { Link } from "react-router-dom";
import { useBooking } from "../../state/BookingState";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../lib/booking.module.css";

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
				.min(new Date(), "Choose more recent date")
				.max(
					new Date().getFullYear() + 1,
					"Bookings are available this year only"
				)
				.required("Choose a date for your visit"),
			"res-time": Yup.string()
				.matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
				.required("Choose time for your visit"),
			guests: Yup.number()
				.min(1, "Minimum of 1")
				.max(10, "Maximum of 10")
				.required("Provide guest count"),
			occasion: Yup.string().required("Provide occasion"),
		}),
	});
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<div>
					<h3>Book now</h3>
				</div>
				<form action="" onSubmit={formik.handleSubmit}>
					<Input
						type={"date"}
						id={"res-date"}
						title={"Choose date"}
						formData={formik}
					/>

					<div className={styles.double}>
						<div className={styles.timeSelect}>
							<Select
								id={"res-time"}
								title={"Choose time"}
								formData={formik}
								availableTimes={availableTimes}
							/>
						</div>
						<div className={styles.guestCount}>
							<Input
								type={"number"}
								id={"guests"}
								title={"Guests"}
								formData={formik}
								min={"1"}
								max={"10"}
							/>
						</div>
					</div>

					<Select
						id={"occasion"}
						title={"Occasion"}
						formData={formik}
					/>
					<div className={styles.disclaimer}>
						<p>*Additional confirmation may be needed</p>
						<p>
							By clicking "proceed" you agree to Little Lemon's
							<br />
							<Link to={"/"}>
								Terms and Conditions and Privacy Policy
							</Link>
						</p>
					</div>
					<div className={styles.btnControl}>
						<button
							className={styles.button}
							type="submit"
							disabled={!(formik.isValid && formik.dirty)}
							aria-disabled={!(formik.isValid && formik.dirty)}
							aria-label="Reserve a table"
							data-testid="booking-confirm-btn"
						>
							Proceed
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
