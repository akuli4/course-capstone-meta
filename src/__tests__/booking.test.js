import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingState from "../state/BookingState";
import BookingForm from "../components/booking/BookingForm";
import { BrowserRouter } from "react-router-dom";

function init() {
	return render(
		<BookingState>
			<BookingForm />
		</BookingState>,
		{ wrapper: BrowserRouter }
	);
}

test("Booking form is working", async () => {
	init();
	const user = userEvent.setup();
	const dateSelector = screen.getByLabelText(/Choose date/);
	const timeSelector = screen.getByLabelText(/Choose time/);
	const timeOptions = screen.getAllByTestId(/time-option/);
	const guestSelector = await screen.findByLabelText(/Guests/);
	const occasionSelector = screen.getByLabelText(/Occasion/);
	const submitButton = screen.getByTestId(/sub-btn/);

	await user.type(dateSelector, "2023-06-25");
	await user.type(timeSelector, String(timeOptions[3]?.value));
	fireEvent.change(guestSelector, { target: { value: 3 } });
	await user.type(occasionSelector, String("Anniversary"));

	await waitFor(() => {
		expect(submitButton).toBeEnabled();
	});
});
