import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Funcionalidades from "./Funcionalidades";
import NavBar from "./NavBar";
import { Videogames } from "./Videogames";
import Paginado from "./Paginado";
import {
	filterByGenres,
	filterBySource,
	orderBy,
	getAllVideogames,
} from "../redux/actions";

export default function Home() {
	const allGames = useSelector((state) => state.allVideogames);

	const [currentPage, setCurrentPage] = useState(1); //*Lo seteamos en 1 para que siempre empiece en la pagina 1.
	const gamesPerPage = 15; //* Determinamos la cantidad de cards renderizadas por pagina.
	const indexOfLastGame = currentPage * gamesPerPage; //* 1 * 15 = 15
	const indexOfFirstGame = indexOfLastGame - gamesPerPage; //* 15 - 15 = 0
	const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame); //*Divididmos la cantidad de juegos por pagina

	const dispatch = useDispatch();

	const paginado = (pageNumber) => {
		//* Establece el numero de pagina
		setCurrentPage(pageNumber);
	};

	//* Vuelve el puntero a la ubicacion 0,0 en la pantalla.
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	//* Funcion para ordenar el listado de videojuegos, AZ ZA como por el raiting ascendente o descendente.
	function handleSort(e) {
		e.preventDefault();
		if (e.target.value === "") {
			dispatch(getAllVideogames());
		} else {
			dispatch(orderBy(e.target.value));
			setCurrentPage(1);
		}
	}

	//* Funcion para filtrar los videojuegos por Generos.
	function handleFilter(e) {
		e.preventDefault();
		if (e.target.value === "") {
			dispatch(getAllVideogames());
		} else {
			dispatch(filterByGenres(e.target.value));
			setCurrentPage(1);
		}
	}

	//*Funcion para filtrar los videojuegos por API o DB.
	function handleSource(e) {
		e.preventDefault();
		if (e.target.value === "") {
			dispatch(getAllVideogames());
		} else {
			dispatch(filterBySource(e.target.value));
			setCurrentPage(1);
		}
	}

	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div>
				<Funcionalidades
					handleSort={handleSort}
					handleFilter={handleFilter}
					handleSource={handleSource}
				/>
			</div>

			<div>
				<Videogames currentGames={currentGames} />{" "}
				{/*porcion de juegos que se van a renderizar por pagina*/}
			</div>
			<div>
				<Paginado
					gamesPerPage={gamesPerPage}
					allGames={allGames.length}
					paginado={paginado}
				/>
			</div>
		</div>
	);
}
