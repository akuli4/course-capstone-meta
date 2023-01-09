import React from "react";
import styles from "./input.module.css";

const Select = ({ id, title, formData, availableTimes, onChange }) => {
	if (title === "Occasion") {
		return (
			<div className={styles.control}>
				<label htmlFor={id}>{title}</label>
				<select
					id={id}
					{...formData.getFieldProps(id)}
					className={
						formData.errors[id] &&
						formData.touched[id] &&
						styles.inputError
					}
				>
					<option value="Birthday">Birthday</option>
					<option value="Anniversary">Anniversary</option>
				</select>
				{formData.errors[id] && formData.touched[id] && (
					<p className={styles.error}>{formData.errors[id]}</p>
				)}
			</div>
		);
	}
	return (
		<div className={styles.control}>
			<label htmlFor={id}>{title}</label>
			<select
				id={id}
				{...formData.getFieldProps(id)}
				className={
					formData.errors[id] &&
					formData.touched[id] &&
					styles.inputError
				}
			>
				{availableTimes.map((visitTime, index) => (
					<option key={index} data-testid="time-option">
						{visitTime}
					</option>
				))}
			</select>
			{formData.errors[id] && formData.touched[id] && (
				<p className={styles.error}>{formData.errors[id]}</p>
			)}
		</div>
	);
};

export default Select;
