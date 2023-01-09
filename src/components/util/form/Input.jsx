import React from "react";

const Input = ({ type, id, title, formData, onChange, min, max }) => {
	if (min && max) {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<input
					type={type}
					id={id}
					value={formData.values[id]}
					onChange={onChange}
					min={min}
					max={max}
				/>
			</div>
		);
	}

	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<input
				type={type}
				id={id}
				value={formData.values[id]}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
