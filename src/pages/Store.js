import React, { Component } from 'react';
import '../App.css';
import { Animated } from 'react-animated-css';
import Carousel from 'react-bootstrap/Carousel';
import s1 from '../imgs/emotes/s1.png';
import s2 from '../imgs/emotes/s2.png';
import s3 from '../imgs/emotes/s3.png';
import p1 from '../imgs/emote-prices/p1.png';
import p2 from '../imgs/emote-prices/p2.png';
import p3 from '../imgs/emote-prices/p3.png';
import pp1 from '../imgs/emote-prices/pp1.png';
import pp2 from '../imgs/emote-prices/pp2.png';
import pp3 from '../imgs/emote-prices/pp3.png';
import AX from '../imgs/sub-badges/AX.png';
import BX from '../imgs/sub-badges/BX.png';
import CX from '../imgs/sub-badges/CX.png';
import DX from '../imgs/sub-badges/DX.png';
import EX from '../imgs/sub-badges/EX.png';
import AX1 from '../imgs/sub-badges/AX1.png';
import BX1 from '../imgs/sub-badges/BX1.png';
import CX1 from '../imgs/sub-badges/CX1.png';
import DX1 from '../imgs/sub-badges/DX1.png';
import EX1 from '../imgs/sub-badges/EX1.png';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

{
	/* APP */
}
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* Carousel */}
					<Animated animationIn="fadeIn" animationInDelay="1000" isVisible={true}>
						<h1>Some of my recent work</h1>

						<Carousel>
							<Carousel.Item>
								<a href="https://twitch.tv/lucy" aria-label="Lucy" target="_blank" rel="noopener">
									<img className="carousel" src={s1} alt="First slide" />
								</a>
							</Carousel.Item>

							<Carousel.Item>
								<a
									href="https://twitch.tv/champagne"
									aria-label="champagne"
									target="_blank"
									rel="noopener"
								>
									<img className="carousel" src={s2} alt="Second slide" />
								</a>
							</Carousel.Item>

							<Carousel.Item>
								<a
									href="https://twitch.tv/luminariaa"
									aria-label="luminariaa"
									target="_blank"
									rel="noopener"
								>
									<img className="carousel" src={s3} alt="Third slide" />
								</a>
							</Carousel.Item>
						</Carousel>
						<AnchorLink href="#prices" aria-label="Prices">
							Store
						</AnchorLink>
						<div className="animated infinite bounce delay-2s">
							<i class="fas fa-caret-down" />
						</div>
					</Animated>
				</header>

				<body id="prices" className="body1">
					{/* Price Pictures */}
					<Animated animationIn="fadeIn" animationInDelay="500" isVisible={true}>
						<h1>Emote Prices</h1>
					</Animated>
					<Animated animationIn="fadeIn" animationInDelay="750" isVisible={true}>
						<div className="prices">
							<img src={p1} className="p" alt="" />
							<img src={p2} className="p" alt="" />
							<img src={p3} className="p" alt="" />
						</div>
					</Animated>

					{/* Price Amounts */}
					<Animated animationIn="fadeIn" animationInDelay="750" isVisible={true}>
						<div className="prices2">
							<img src={pp1} className="p2" alt="" />
							<img src={pp2} className="p2" alt="" />
							<img src={pp3} className="p2" alt="" />
						</div>
					</Animated>

					{/* Sub Pictures */}

					<h1>Sub Badge Prices</h1>
					<div className="mainsubs">
						<img src={AX} className="subs" alt="" />
						<img src={BX} className="subs" alt="" />
						<img src={CX} className="subs" alt="" />
						<img src={DX} className="subs" alt="" />
						<img src={EX} className="subs" alt="" />
					</div>

					{/* Sub Prices */}

					<div className="mainsubsp">
						<img src={AX1} className="subsp" alt="" />
						<img src={BX1} className="subsp" alt="" />
						<img src={CX1} className="subsp" alt="" />
						<img src={DX1} className="subsp" alt="" />
						<img src={EX1} className="subsp" alt="" />
					</div>

					{/* Business Contact */}
					<h1>Business Contact Information</h1>
					<div className="business">
						<p>
							If you would like art work done please contact me via
							<a
								href="https://twitter.com/messages/compose?recipient_id=444555389&text=Hello,%20Hanner%20I%20would%20like%20some%20art%20work%20done"
								target="blank_"
								aria-label="Lucy"
								rel="noopener"
								data-screen-name="@Hanner"
							>
								<span> Twitter DMs</span>
							</a>
						</p>
					</div>

					{/* Home Button */}

					<div className="home">
						<Link className="home2" to="/" aria-label="Home">
							<i class="fas fa-home" />
						</Link>
					</div>
				</body>
			</div>
		);
	}
}
