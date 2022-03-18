export default {
    
    methods: {
        addToWishlists() {
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
                this.$alert("This movie is already on your list","","warning")
            }
            else {
                movieBD.push(movieObject)
                this.$alert(
                    "",
                    "Success",
                    "success"
                  ).then(() => console.log("Closed"));
                console.log("success")
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
                location.reload();
                console.log("sup")
            }
            else {
                movieDB = []
                location.reload();
            }
            localStorage.setItem('wishlists', JSON.stringify(movieDB));
        }
    }
}