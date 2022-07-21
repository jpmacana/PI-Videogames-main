import React from "react";
import i from "../images/fail.jpg";
import s from "../style/Error.module.css";

export default function Error() {
	return (
		<div className={s.mario}>
			<h1>No se encontraron videojuegos</h1>
			<img src={i} alt="mario" />
		</div>
	);
}
