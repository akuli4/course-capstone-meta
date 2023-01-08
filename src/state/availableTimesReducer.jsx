export default (state, action) => {
	switch (action.type) {
		case "SET_AVAILABLE_TIMES":
			return {
				...state,
				available: action.payload,
			};
		default:
			return { ...state };
	}
};
