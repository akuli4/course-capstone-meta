import React from "react";

const Select = ({ id, title, formData, availableTimes, onChange }) => {
	if (title === "Occasion") {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<select id={id} value={formData.values[id]} onChange={onChange}>
					<option value="Birthday">Birthday</option>
					<option value="Anniversary">Anniversary</option>
				</select>
			</div>
		);
	}
	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<select id={id} value={formData.values[id]} onChange={onChange}>
				{availableTimes.map((visitTime, index) => (
					<option key={index} data-testid="time-option">
						{visitTime}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
