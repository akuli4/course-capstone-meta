import React from "react";

const formContext = React.createContext(undefined);

const BookingState = ({ children }) => {
	return <formContext.Provider value={{}}>{children}</formContext.Provider>;
};

export default BookingState;

export const useBooking = () => React.useContext(formContext);
