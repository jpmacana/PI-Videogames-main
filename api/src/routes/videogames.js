const { Router } = require("express");
require("dotenv").config();
const { infoTotal, infoApi, nameApi, infoDB } = require("../controllers");

const router = Router();

router.get("/", async (req, res, next) => {
	const { name } = req.query; //* El nombre me llega por query
	let allVideogames = await infoTotal();

	if (name) {
		try {
			const foundGamesAPI = await nameApi(name);
			const gamesByNameDB = await infoDB();
			let foundGamesDB = gamesByNameDB.filter((el) =>
				el.name.toLowerCase().includes(name.toLowerCase()),
			);
			let allResults = foundGamesDB.concat(foundGamesAPI);
			allResults.length
				? res.status(200).send(allResults.slice(0, 15))
				: res.status(400).send("No hay un videojuego con dicho nombre");
		} catch (err) {
			next(err);
		}
	} else {
		res.send(allVideogames);
		return;
	}
});

router.get("/platforms", async (req, res, next) => {
	try {
		const all = await infoApi();
		const allPlatforms = [];
		all.map((g) =>
			g.platforms.map((p) => {
				if (!allPlatforms.includes(p)) {
					allPlatforms.push(p);
				}
			}),
		);

		allPlatforms.length
			? res.status(200).json(allPlatforms)
			: res.status(404).send("Error");
	} catch (e) {
		next(e);
	}
});

router.get("/:platforms", async (req, res, next) => {
	const { platforms } = req.params;

	const data = await infoTotal();

	const pc = data.filter((vg) => i.platforms === "PC");

	pc ? res.status(200).json(pc) : res.status(404).send("Error");
});

module.exports = router;

// router.get("/:rating"),
// 	async (req, res) => {
// 		const { rating } = req.params;
// 		let vg = await infoTotal();
// 		const ratingMayor = vg.filter((e) => e.rating > rating);
// 		ratingMayor
// 			? res.status(200).send(ratingMayor)
// 			: res.satus(404).send("no hay juegos con mayor raiting");
// 	};
