import { Routes, Route } from "react-router-dom";
import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Main from "./components/generic/Main";
import Nav from "./components/generic/Nav";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import BookingSuccess from "./pages/BookingSuccess";
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<Header>
				<Link to={"/"}>
					<img src="/Logo.svg" alt="Little Lemon" loading="lazy" />
				</Link>
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
