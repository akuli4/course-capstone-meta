const seededRandom = function (seed) {
	var m = 2 ** 35 - 31;
	var a = 185852;
	var s = seed % m;
	return function () {
		return (s = (s * a) % m) / m;
	};
};

export const fetchAPI = async function (date) {
	if (!date)
		return new Promise((resolve, reject) =>
			reject("This API expects a date.")
		);
	let result = [];
	let random = seededRandom(new Date(date).getDate());

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(i + ":00");
		}
		if (random() < 0.5) {
			result.push(i + ":30");
		}
	}
	return new Promise((resolve, reject) => resolve(result));
};

export const submitAPI = async function (formData) {
	return new Promise((resolve, reject) => resolve(true));
};
