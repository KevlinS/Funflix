<template>
    <div>
        <Button btnTitle="Delete All Movies" :btnFunction="clearAllMovies"/>
        <ul>
            <li v-for="movie in movieArray" :key="movie.id">
                <NuxtLink :to="`/detail?id=${movie.id}`" >
      <p>{{ movie.original_title }}</p>
      <img :src="imgURL + movie.poster_path" />
      </NuxtLink>
                
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