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
			</div>
		);
	}
	// Generic
	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
			<input type={type} id={id} {...formData.getFieldProps(id)} />
		</div>
	);
};

export default Input;
