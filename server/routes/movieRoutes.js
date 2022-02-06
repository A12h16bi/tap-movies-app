const express =require("express");
const { getAllMovies, getMovie, addMovie}=require("../Controllers/movieController");

const router =express.Router();

router
    .get("/",getAllMovies)
    .get("/:movieId", getMovie)
    .post("/",addMovie)

    module.exports=router;