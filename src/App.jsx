import Header from "./components/generic/Header";
import Nav from "./components/generic/Nav";
import Main from "./components/generic/Main";
import Footer from "./components/generic/Footer";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";

import styles from "../lib/utils.module.css";

const APP_LINKS = [
	{
		title: "Home",
		url: "#",
	},
	{
		title: "About",
		url: "#",
	},
	{
		title: "Menu",
		url: "#",
	},
	{
		title: "Reservations",
		url: "#",
	},
	{
		title: "Order online",
		url: "#",
	},
	{
		title: "Login",
		url: "#",
	},
];

function App() {
	return (
		<>
			<Header>
				<img src="/" alt="Little Lemon" className="lemon-logo lg" />
				<Nav>
					<ul className="nav-list">
						{APP_LINKS.map((link, index) => (
							<li key={index} className="nav-link">
								<a href={link.url}>{link.title}</a>
							</li>
						))}
					</ul>
				</Nav>
			</Header>
			<Main>
				<section className={`hero ${styles.flex}`}>
					<Hero />
				</section>
				<section
					className={`highlights ${styles.flexCol} ${styles.alignCenter} ${styles.w100} ${styles.h100}`}
				>
					<Highlights />
				</section>
				<section className="testimonials">testimonials</section>
				<section className="about">about</section>
			</Main>
			<Footer>
				<img src="#" alt="lemon-logo xl" />
				<section className="footer-box">
					<ul>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
					</ul>

					<ul>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
						<li>
							<a href="">Link</a>
						</li>
					</ul>
				</section>
			</Footer>
		</>
	);
}

export default App;
