import React from "react";
import sectionStyles from "../sections/sections.module.css";
import Link from "../util/button/Link";
import styles from "../../../lib/footer.module.css";

const Footer = ({ children }) => {
	return (
		<footer className={sectionStyles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.imageContainer}>
					<img src="/Logo.svg" alt="Little Lemon" loading="lazy" />
				</div>

				<section className={styles.navigation}>
					<div className="navigation">
						<h3>Navigation</h3>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>

							<li>
								<a href="#about">About</a>
							</li>

							<li>
								<Link to="#">Menu</Link>
							</li>

							<li>
								<Link to="/booking">Reservations</Link>
							</li>

							<li>
								<Link to="#">Order online</Link>
							</li>

							<li>
								<Link to="#">Login</Link>
							</li>
						</ul>
					</div>
					<div className="contact">
						<h3>Contact</h3>

						<ul>
							<li>
								<p>Address</p>
							</li>

							<li>
								<p>Phone number</p>
							</li>

							<li>
								<a href="mailto:donotemail@thisaddress.please">
									Email
								</a>
							</li>
						</ul>
					</div>
					<div className="social-media">
						<h3>Social</h3>

						<ul>
							<li>
								<p>Address</p>
							</li>

							<li>
								<p>Phone number</p>
							</li>

							<li>
								<a href="mailto:donotemail@thisaddress.please">
									Email
								</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
