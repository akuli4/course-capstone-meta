import React from "react";
import { useBooking } from "../../../state/BookingState";

const Input = ({ type, id, title, formData, min, max }) => {
	const { onChange } = useBooking();
	if (type === "date") {
		function handleChange(e) {
			onChange(e);
			formData.handleChange(e);
		}
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<input
					type={type}
					id={id}
					min={min}
					max={max}
					{...formData.getFieldProps(id)}
					onChange={handleChange}
				/>
				{formData.errors[id] && formData.touched[id] && (
					<p>{formData.errors[id]}</p>
				)}
			</div>
		);
	}
	// Number
	if (min && max) {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<input
					type={type}
					id={id}
					min={min}
					max={max}
					{...formData.getFieldProps(id)}
				/>
				{formData.errors[id] && formData.touched[id] && (
					<p>{formData.errors[id]}</p>
				)}
			</div>
		);
	}
	// Generic
	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<input type={type} id={id} {...formData.getFieldProps(id)} />
			{formData.errors[id] && formData.touched[id] && (
				<p>{formData.errors[id]}</p>
			)}
		</div>
	);
};

export default Input;
