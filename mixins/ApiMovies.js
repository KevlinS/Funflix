export default {
    methods: {
        getMoviesNowPlaying() {
            return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1')
                .then(res => res.json())
        },
        getMoviesPopular() {
            return fetch('https://api.themoviedb.org/3/movie/popular?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1')
                .then(res => res.json())
        },
        getMoviesTopRated() {
            return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1')
                .then(res => res.json())
        },
        getMoviesUpcoming() {
            return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1')
                .then(res => res.json())
        },
        getMovie(id) {
            return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9dcb183679039b039c527c347b054639&language=en-US`)
            .then(res => res.json())
        }
    }
}