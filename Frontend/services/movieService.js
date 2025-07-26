const home_url = 'http://localhost:3000'

export const movieService = async (searchTerm, movie) => {
    const response = await fetch(`${home_url}/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({searchTerm, movie})
    });
    return response.json();
};

export const getTrendingMoviesList = async () => {
    const response = await fetch(`${home_url}/trending`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}