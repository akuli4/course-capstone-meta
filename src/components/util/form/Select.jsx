import React from "react";

const Select = ({
	id,
	title,
	formData,
	availableTimes,
	onChange,
	children,
}) => {
	if (title === "Occasion") {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<select id={id} value={formData[id].value} onChange={onChange}>
					<option value="Birthday">Birthday</option>
					<option value="Anniversary">Anniversary</option>
				</select>	
			</div>
		);
	}
	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<select id={id} value={formData[id].value} onChange={onChange}>
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
