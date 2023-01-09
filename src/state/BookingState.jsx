import React from "react";
import availableTimesReducer from "./availableTimesReducer";
import { fetchAPI, submitAPI } from "../api/mockAPI";
import { useNavigate } from "react-router-dom";

const formContext = React.createContext(undefined);

const BookingState = ({ children }) => {
	const navigate = useNavigate();
	const initialFormData = {
		"res-date": "",
		"res-time": "17:00",
		guests: "1",
		occasion: "Birthday",
		isTouched: false,
	};
	const [formData, setFormData] = React.useState(initialFormData);
	const [time, timeDispatch] = React.useReducer(
		availableTimesReducer,
		initializeTimes()
	);

	function initializeTimes() {
		return {
			available: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
		};
	}

	function onChange(e) {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
			isTouched: true,
		}));

		if (e.target.id === "res-date") {
			const chosenDate = e.target.value;
			getAvailableTimes(chosenDate)
				.then((availableTimes) => {
					timeDispatch({
						type: "SET_AVAILABLE_TIMES",
						payload: availableTimes,
					});
				})
				// No need to anything on error since this is a test app
				.catch((err) => console.log(err));
		}
	}

	function onSubmit(e) {
		e.preventDefault();
		submitAPI().then(() => {
			navigate(`/booking/success/?date=${formData["res-date"]}`);
			resetFormData();
		});
	}

	function resetFormData() {
		setFormData(initialFormData);
	}

	async function getAvailableTimes(date) {
		return await fetchAPI(date);
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
