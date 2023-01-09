import React from "react";

const Select = ({ id, title, formData, availableTimes, onChange }) => {
	if (title === "Occasion") {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<select id={id} {...formData.getFieldProps(id)}>
					<option value="Birthday">Birthday</option>
					<option value="Anniversary">Anniversary</option>
				</select>
				{formData.errors[id] && formData.touched[id] && (
					<p>{formData.errors[id]}</p>
				)}
			</div>
		);
	}
	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<select id={id} {...formData.getFieldProps(id)}>
				{availableTimes.map((visitTime, index) => (
					<option key={index} data-testid="time-option">
						{visitTime}
					</option>
				))}
			</select>
			{formData.errors[id] && formData.touched[id] && (
				<p>{formData.errors[id]}</p>
			)}
		</div>
	);
};

export default Select;
