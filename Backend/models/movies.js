import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    searchTerm: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 1
    },
    poster_url: {
        type: String,
        required: true
    },
    movie_id: {
        type: Number,
        required: true
    }
})

const TrendingMovies = mongoose.model('Trending', movieSchema);

export default TrendingMovies;