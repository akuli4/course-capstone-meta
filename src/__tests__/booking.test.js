import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingState from "../state/BookingState";
import Booking from "../pages/Booking";
import { BrowserRouter } from "react-router-dom";

function init() {
	return render(
		<BookingState>
			<Booking />
		</BookingState>,
		{ wrapper: BrowserRouter }
	);
}

test("Booking form is working", async () => {
	init();
	const dateSelector = await screen.findByLabelText(/Choose date/);
	const timeSelector = await screen.findByLabelText(/Choose time/);
	const timeOptions = await screen.findAllByTestId(/time-option/);
	const guestSelector = await screen.findByLabelText(/Guests/);
	const occasionSelector = await screen.findByLabelText(/Occasion/);
	const submitButton = await screen.findByTestId(/booking-confirm-btn/);

	fireEvent.change(dateSelector, { target: { value: "2023-01-13" } });
	fireEvent.change(timeSelector, { target: { value: timeOptions[3].value } });
	fireEvent.change(guestSelector, { target: { value: "2" } });
	fireEvent.change(occasionSelector, { target: { value: "Birthday" } });

	await waitFor(() => {
		expect(submitButton).toBeEnabled();
	});
});
