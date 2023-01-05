import React from "react";
import styles from "../../../lib/utils.module.css";
const Footer = ({ children }) => {
	return (
		<footer className={`${styles.flex} ${styles.centerall}`}>
			<img src="#" alt="lemon-logo xl" />

			<section className={`footer-box ${styles.footer}`}>
				<div className="navigation">
					<h3>Navigation</h3>
					<ul>
						<li>
							<a href="">Home</a>
						</li>

						<li>
							<a href="">About</a>
						</li>

						<li>
							<a href="">Menu</a>
						</li>

						<li>
							<a href="">Reservations</a>
						</li>

						<li>
							<a href="">Order online</a>
						</li>

						<li>
							<a href="">Login</a>
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
							<a href="">Email</a>
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
							<a href="">Email</a>
						</li>
					</ul>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
