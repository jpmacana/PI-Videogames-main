const { default: axios } = require("axios");
const { Router } = require("express");
const { Genres } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
	try {
		const respuesta = await axios.get(
			`https://api.rawg.io/api/genres?key=bc1bb0ae62664232a0e926209f30dd87`,
		);
		const genresApi = await respuesta.data.results.map((g) => g.name);

		genresApi.map((e) =>
			Genres.findOrCreate({
				//* Guardo todos los generos que vienen de la API en la DB
				where: { name: e }, //
			}),
		);

		const allGenres = await Genres.findAll(); //* Traigo todos los generos que existen, tanto de la API como de la DB. Porque los que venian de la API, ya fueron anteriormente guardados en la DB.
		res.json(allGenres);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
