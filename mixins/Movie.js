export default {
    methods: {
        addToWishlists(movie) {
            let movieBD = JSON.parse(localStorage.getItem('wishlists')) || [];
            let movieObject = {
                id: this.movie.id,
                original_title: this.movie.original_title,
                poster_path: this.movie.poster_path,
            }

            let indexOfExistingMovie = movieBD.findIndex(
                (el) => el.id === movieObject.id
            );
            if(indexOfExistingMovie !== -1) {
                alert("already")
            }
            else {
                movieBD.push(movieObject)
                console.log("succes")
            }

            localStorage.setItem('wishlists', JSON.stringify(movieBD));
        },
        getMovieWishlists() {
            let movieBD = JSON.parse(localStorage.getItem('wishlists'));
            return movieBD;
        },
        clearWishlists() {
            localStorage.removeItem('wishlists');
        },
        removeMovie(movie) {
            let movieDB = JSON.parse(localStorage.getItem('wishlists'))
            let indexOfExistingMovie = movieDB.findIndex(
                (el) => el.id === movie.id
            )

            if(movieDB.length > 1) {
                movieDB.splice(indexOfExistingMovie, 1)
                console.log("sup")
            }
            else {
                movieDB = []
            }
            localStorage.setItem('wishlists', JSON.stringify(movieDB));
        }
    }
}