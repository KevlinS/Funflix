export default {
    methods: {
        getMoviesNowPlaying() {
            return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=')
                .then(res => res.json())
        },
        getMoviesPopular() {
            return fetch(process.env.API_URL_POPULAR)
                .then(res => res.json())
        },
        getMoviesTopRated() {
            return fetch(process.env.API_URL_TOPRATED)
                .then(res => res.json())
        },
        getMoviesUpcoming() {
            return fetch(process.env.API_URL_UPCOMING)
                .then(res => res.json())
        },
        getMovie(id) {
            return fetch(`${process.env.API_URL}${id}${process.env.API_KEY}`)
            .then(res => res.json())
        }
      
    }
}