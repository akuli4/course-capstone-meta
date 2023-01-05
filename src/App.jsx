import Header from "./components/generic/Header";
import Nav from "./components/generic/Nav";
import Main from "./components/generic/Main";
import Footer from "./components/generic/Footer";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Testimonials from "./components/sections/Testimonials";
import About from "./components/sections/About";
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
					className={`highlights ${styles.flexCol} ${styles.alignCenter} ${styles.w100} ${styles.h100} ${styles.mwp}`}
				>
					<Highlights />
				</section>

				<section
					className={`testimonials ${styles.flexCol} ${styles.centerall} ${styles.w100} ${styles.h100} ${styles.mwp}`}
				>
					<Testimonials />
				</section>

				<section
					className={`about ${styles.flex} ${styles.centerall} ${styles.w100} ${styles.h100} ${styles.mwp}`}
				>
					<About />
				</section>
			</Main>

			<Footer></Footer>
		</>
	);
}

export default App;
