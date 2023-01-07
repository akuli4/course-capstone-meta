import React from "react";

const formContext = React.createContext(undefined);

const BookingState = () => {
	return <div>BookingState</div>;
};

export default BookingState;

export const useBooking = () => React.useContext(formContext);
