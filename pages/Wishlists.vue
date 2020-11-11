<template>
    <div>
        <Button btnTitle="Delete All Movies" :btnFunction="clearAllMovies"/>
        <ul>
            <li v-for="movie in movieArray" :key="movie.id">
                {{movie.id}}
                {{movie.original_title}}
                <img :src="imgURL + movie.poster_path" />
            </li>
        </ul>
    </div>
</template>

<script>
import Movie from '../mixins/Movie'
import Button from '../components/Button'

    export default {
        data: function() {
            return {
                movieArray: [],
                movie: {},
                imgURL: "https://image.tmdb.org/t/p/w200",
            }
        },
        components: {
            Button,
        },
        methods: {
            clearAllMovies: function() {
                this.clearWishlists()
                this.movieArray=this.getMovieWishlists()
            },
        },
        mounted() {
            this.movieArray = this.getMovieWishlists()
        },
        mixins: [Movie]
    }
</script>

<style lang="scss" scoped>

</style>