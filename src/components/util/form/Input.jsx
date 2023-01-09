import React from "react";

const Input = ({ type, id, title, formData, onChange, min, max }) => {
	if (min && max) {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<input
					type={type}
					id={id}
					value={formData[id].value}
					onChange={onChange}
					min={min}
					max={max}
				/>
				{formData[id].error && formData[id].error}
			</div>
		);
	}

	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<input
				type={type}
				id={id}
				value={formData[id].value}
				onChange={onChange}
			/>
			{formData[id].error && formData[id].error}
		</div>
	);
};

export default Input;
