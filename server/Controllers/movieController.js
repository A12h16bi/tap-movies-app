const{Op} = require("sequelize");

const { Movie } = require('../models');

const getAllMovies = async (req, res) => {
    const { searchText } = req.query;

    //condition for searchText ,if condition fails return empty object 
    try {
        const conditions = searchText ? {
            where: {
                title: {
                    // Ironman ,searching man, iron
                    [Op.iRegexp]:searchText 
                }
            }
        } : {};
        const movies = await Movie.findAll(conditions);
        return res.json(movies);
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });

    }
}

const getMovie = async (req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movie.findOne({
            where: {
                id: Number(movieId)
            }
        });
        if (!movie) throw new Error("Movie Not Found");
        res.json({
            message: 'Movie found',
            movie,
        });
    }
    catch (e) {
        res.status(404).json({
            message: e.message
        });
    }
}

const addMovie = async (req, res) => {
    const { title, poster, rating } = req.body;

    try {
        const createdMovie = await Movie.create({
            title,
            rating,
            poster
        });
        return res.json({
            message: "Movie Created",
            movie: createdMovie
        })
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }

}


module.exports = {
    getAllMovies,
    getMovie,
    addMovie
}