import mongoose from "mongoose";
import dotenv from "dotenv";
import TrendingMovies from "./models/movies.js";
import express from 'express';
import cors from 'cors';
import router from "./routes/searchRoute.js";
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

const port = 3000;

try {
    await mongoose.connect(process.env.DB_URL)
    console.log("Connected")
} catch (error) {
    console.log(error)
}

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        const updateMovie = await TrendingMovies.findOneAndUpdate(
            {searchTerm: searchTerm},
            {
                $inc: {count: 1},
                $setOnInsert: {
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    movie_id: movie.movie_id
                }
            },
            {
                new: true,
                upsert: true
            }
        );
        return updateMovie;

    } catch (error) {
        console.error("Error updating search count: ", error);
        throw error;
    }
}

export const getTrendingMovies = async () => {
    try {
        const getMovies = await TrendingMovies.find().sort({count: -1}).limit(5) || null;
        console.log(getMovies);
        return getMovies;
    } catch (error) {
        console.log(error);
    }
}


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
