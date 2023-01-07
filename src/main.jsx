import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import BookingState from "./state/BookingState";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<BookingState>
				<App />
			</BookingState>
		</Router>
	</React.StrictMode>
);
