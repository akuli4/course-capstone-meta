import { Routes, Route } from "react-router-dom";
import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Main from "./components/generic/Main";
import Nav from "./components/generic/Nav";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
	return (
		<>
			<Header>
				<img src="/Logo.svg" alt="Little Lemon" loading="lazy" />
				<Nav />
			</Header>

			<Main>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/booking"} element={<Booking />} />
					<Route
						path={"/booking/success"}
						element={<BookingSuccess />}
					></Route>
				</Routes>
			</Main>

			<Footer></Footer>
		</>
	);
}

export default App;
