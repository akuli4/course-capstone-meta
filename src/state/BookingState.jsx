import React from "react";

const formContext = React.createContext(undefined);

const BookingState = ({ children }) => {
	const [formData, setFormData] = React.useState({
		"res-date": "",
		"res-time": "17:00",
		guests: "1",
		occasion: "Birthday",
	});

	const [availableTimes] = React.useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);

	function handleFormChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	}

	function submitForm(e) {
		e.prevendDefault();
	}

	return <formContext.Provider value={{}}>{children}</formContext.Provider>;
};

export default BookingState;

export const useBooking = () => React.useContext(formContext);
