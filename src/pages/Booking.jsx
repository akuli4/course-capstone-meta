import React from "react";

const Booking = () => {
	const [formData, setFormData] = React.useState({
		"res-date": "",
		"res-time": "17:00",
		guests: "1",
		occasion: "Birthday",
	});

	const [availableTimes] = React.useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);

	function handleFormChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	}

	function submitForm(e) {
		e.prevendDefault();
	}

	return (
		<div>
			<section id="bookingForm">
				<form action="" onSubmit={submitForm}>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={formData["res-date"]}
						onChange={handleFormChange}
					/>
					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						value={formData["res-time"]}
						onChange={handleFormChange}
					>
						{availableTimes.map((visitTime, index) => (
							<option>{visitTime}</option>
						))}
					</select>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						value={formData["guests"]}
						onChange={handleFormChange}
					/>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={formData["occasion"]}
						onChange={handleFormChange}
					>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<input type="submit" value="Make Your reservation" />
				</form>
			</section>
		</div>
	);
};

export default Booking;
