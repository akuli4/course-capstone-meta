import React from "react";
import Input from "../util/form/Input";
import Select from "../util/form/Select";
import { Link } from "react-router-dom";
import { useBooking } from "../../state/BookingState";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../lib/utils.module.css";
import buttonStyles from "../util/button/button.module.css";

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
			<section className={styles.bookingForm}>
				<div className={styles.heading}>
					<h3>Book now</h3>
				</div>
				<form
					action=""
					onSubmit={formik.handleSubmit}
					className={`${styles.flexCol} ${styles.flexGap} ${styles.gap1} ${styles.mt2}`}
				>
					<Input
						type={"date"}
						id={"res-date"}
						title={"Choose date"}
						formData={formik}
						onChange={formik.handleChange}
					/>

					<div className={styles.double}>
						<div className="">
							<Select
								id={"res-time"}
								title={"Choose time"}
								formData={formik}
								availableTimes={availableTimes}
								onChange={formik.handleChange}
							/>
						</div>
						<div className="div">
							<Input
								type={"number"}
								id={"guests"}
								title={"Guests"}
								formData={formik}
								onChange={formik.handleChange}
								min={"1"}
								max={"10"}
							/>
						</div>
					</div>

					<Select
						id={"occasion"}
						title={"Occasion"}
						formData={formik}
						onChange={formik.handleChange}
					/>
					<div className={styles.disclaimer}>
						<p>*Additional confirmation may be needed</p>
						<p>
							By clicking "procced" you agree to Little Lemon's
							<br />
							<Link to={"/"}>Terms and Conditions</Link>
						</p>
					</div>
					<button
						className={`${buttonStyles.primary} ${buttonStyles.btn}`}
						type="submit"
						disabled={!(formik.isValid && formik.dirty)}
						aria-disabled={!(formik.isValid && formik.dirty)}
						aria-label="Reserve a table"
					>
						Proceed
					</button>
				</form>
			</section>
		</>
	);
};

export default BookingForm;
