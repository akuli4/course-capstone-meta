import { render, screen } from "@testing-library/react";
import BookingState from "../state/BookingState";
import Booking from "../pages/Booking";
test("Renders the BookingForm heading", () => {
	render(
		<BookingState>
			<Booking />
		</BookingState>
	);
	const headingElement = screen.getByText(/Book now/);
	expect(headingElement).toBeInTheDocument();
});
