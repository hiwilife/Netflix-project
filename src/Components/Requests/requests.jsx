const API_KEY = "4df73eb353f867f11a38023f7fb45296"

// REACT_APP_APIKEY
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchAdventures: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchDramas: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchCrimes: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFamilies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchFantasies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHistories: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchMusices: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
}

export default requests

{/*
https://api.themoviedb.org/3/movie/550?api_key=4df73eb353f867f11a38023f7fb45296
*/}

//https://api.themoviedb.org/3