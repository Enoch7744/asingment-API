const {login, userName} = require("../user/userControllers");
const {hashPass, comparePass, tokenCheck} = require("../middleware");
const {Router} = require("express");
const {createMovie, listMovies, deleteMovie, updateActor} = require("./movieControllers");


const movieRouter = Router();

movieRouter.put("/updateActor", updateActor);
movieRouter.delete("/deleteMovie", deleteMovie);
movieRouter.post("/addMovie", createMovie);
movieRouter.get("/listMovies", listMovies);


module.exports = movieRouter;