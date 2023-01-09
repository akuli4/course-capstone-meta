import React from "react";
import { useBooking } from "../../../state/BookingState";

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
