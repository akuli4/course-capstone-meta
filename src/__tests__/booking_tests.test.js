import { render, screen } from "@testing-library/react";
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
