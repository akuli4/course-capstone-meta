import { Routes, Route } from "react-router-dom";
import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Main from "./components/generic/Main";
import Nav from "./components/generic/Nav";
import Booking from "./pages/Booking";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Header>
				<img src="/" alt="Little Lemon" className="lemon-logo lg" />
				<Nav />
			</Header>

			<Main>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/booking"} element={<Booking />} />
				</Routes>
			</Main>

			<Footer></Footer>
		</>
	);
}

export default App;
