import express from 'express';
import { getTrendingMovies, updateSearchCount } from '../index.js';

const router = express.Router();


router.post('/search', async (req, res) => {
    try {
        const {searchTerm, movie} = req.body;
        await updateSearchCount(searchTerm, movie);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})

router.get('/trending', async (req, res) => {
    try {
        const movies = await getTrendingMovies();
        res.json({ success: true, data: movies });
    } catch (error) {
        console.log("Error fetching trending movies: ", error);
        res.status(500).json({ success: false, error: error.message })
    }
})

export default router;
