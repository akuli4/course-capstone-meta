import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/booking/BookingForm";
import BookingState from "../state/BookingState";

test("Submit button should be disabled by default", async () => {
	render(
		<BookingState>
			<BookingForm />
		</BookingState>
	);

	const submitButton = screen.getByRole("button");

	expect(submitButton).toBeDisabled();
});

test("Submit is enabled if any input is touched", async () => {
	render(
		<BookingState>
			<BookingForm />
		</BookingState>
	);

	const submitButton = screen.getByRole("button");
	const numberOfGuests = screen.getByLabelText("Number of guests");
	fireEvent.change(numberOfGuests, { target: { value: "2" } });
	expect(submitButton).toBeEnabled();
});

test("Guest count is changeable", async () => {
	render(
		<BookingState>
			<BookingForm />
		</BookingState>
	);

	const numberOfGuests = screen.getByLabelText("Number of guests");
	fireEvent.change(numberOfGuests, { target: { value: "3" } });
	expect(numberOfGuests.value).toBe("3");
	// expect(submitButton).toBeEnabled();
});
