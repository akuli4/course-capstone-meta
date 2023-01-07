import React from "react";
import availableTimesReducer from "./availableTimesReducer";
const formContext = React.createContext(undefined);

const BookingState = ({ children }) => {
	const [formData, setFormData] = React.useState({
		"res-date": "",
		"res-time": "17:00",
		guests: "1",
		occasion: "Birthday",
	});

	const [time, dispatch] = React.useReducer(
		availableTimesReducer,
		initializeTimes()
	);

	function initializeTimes() {
		return {
			available: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
		};
	}

	function onChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	}

	function onSubmit(e) {
		e.prevendDefault();
	}

	return (
		<formContext.Provider
			value={{
				formData,
				availableTimes: time.available,
				onChange,
				onSubmit,
			}}
		>
			{children}
		</formContext.Provider>
	);
};

export default BookingState;

export const useBooking = () => React.useContext(formContext);
