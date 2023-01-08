import { render, screen, fireEvent } from "@testing-library/react";
import BookingState from "../state/BookingState";
import Booking from "../pages/Booking";

function init() {
	return render(
		<BookingState>
			<Booking />
		</BookingState>
	);
}

test("Renders the BookingForm heading", () => {
	init();
	const headingElement = screen.getByText(/Book now/);
	expect(headingElement).toBeInTheDocument();
});

test("Booking time is updated", () => {
	init();
	const timeSelector = screen.getByLabelText(/Choose time/);
	const timeOptions = screen.getAllByTestId(/time-option/);

	fireEvent.change(timeSelector, { target: { value: timeOptions[3].value } });

	expect(timeOptions[3].selected).toBeTruthy();
});