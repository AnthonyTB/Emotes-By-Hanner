import React, { Component } from 'react';
import sig from '../imgs/bg/hanner.png';
import '../App.css';
import { Animated } from 'react-animated-css';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

{
	/* APP */
}
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* Logo */}
					<Animated animationIn="fadeIn" animationInDelay="500" isVisible={true}>
						<img src={sig} className="sig" alt="" />
					</Animated>

					{/* Socials */}
					<Animated animationIn="fadeIn" animationInDelay="1000" isVisible={true}>
						<h4>Connect With Me</h4>
					</Animated>

					<Animated animationIn="fadeIn" animationInDelay="1000" isVisible={true}>
						<div className="icons">
							<a href="https://twitter.com/hanner" aria-label="Twitter" target="_blank" rel="noopener">
								<i className="fab fa-twitter" />
							</a>
							<a
								href="https://instagram.com/hannertv"
								aria-label="Instagram"
								target="_blank"
								rel="noopener"
							>
								<i className="fab fa-instagram" />
							</a>
							<a href="https://www.twitch.tv/hanner" aria-label="Twitch" target="_blank" rel="noopener">
								<i className="fab fa-twitch" />
							</a>
							<a href="mailto://HannahBrineBusiness@Gmail.com" aria-label="Email Me" rel="noopener">
								<i className="fa fa-envelope" />
							</a>
							<Link className="link1" to="/Store" aria-label="Store">
								<i class="fas fa-paint-brush" />
							</Link>
						</div>
						<h5>
							Developed By{' '}
							<a href="https://anthonyb.dev" aria-label="AnthonyB" target="_blank" rel="noopener">
								Anthony
							</a>
						</h5>
					</Animated>
				</header>
			</div>
		);
	}
}
