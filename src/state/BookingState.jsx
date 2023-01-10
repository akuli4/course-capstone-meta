import React from "react";
import availableTimesReducer from "./availableTimesReducer";
import { fetchAPI, submitAPI } from "../api/mockAPI";
import { useNavigate } from "react-router-dom";

const formContext = React.createContext(undefined);

const BookingState = ({ children }) => {
	const navigate = useNavigate();

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

	function onSubmit(values) {
		submitAPI().then(() => {
			navigate(`/booking/success/?date=${values["res-date"]}`);
		});
	}

	async function getAvailableTimes(date) {
		return await fetchAPI(date);
	}
	return (
		<formContext.Provider
			value={{
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
