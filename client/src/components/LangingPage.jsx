import React from "react";
import { Link } from "react-router-dom";
import s from "../style/LandingPage.module.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const LandingPage = () => {
	return (
		<div className={s.full}>
			<div className={s.full_inner}>
				<div className={s.content}>
					<h1 className={s.titulo}>Videogames APP</h1>
					<Link to="/home">
						<button className={s.btn}>
							<span className={s.ingresar}>GET STARTED</span>
						</button>
					</Link>
				</div>
				<div className={s.links}>
					<div className={s.mini_box}>
						<a
							href="https://www.linkedin.com/in/jpsenatra/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedin} alt="linkedin" />
						</a>
					</div>
					<div className={s.mini_box}>
						<a
							href="https://github.com/jpmacana"
							target="_blank"
							rel="noreferrer"
						>
							<img src={github} alt="github" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
