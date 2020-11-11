<template>
    <div class="movie_detail">
        <p>{{movie.original_title}}</p>
        <img :src="imgURL + movie.poster_path">
        <Button btnTitle="add movie" :btnFunction="()=>addToWishlists(movie)"/>
            <h1> the id params is : {{$route.params.id}} </h1>
    </div>
   
</template>

<script>
import TitlePage from "../../components/TitlePage"
import ApiMovies from "../../mixins/ApiMovies"
import Button from "../../components/Button"
import Movie from "../../mixins/Movie"
import Vuex from "vuex"
import axios from "axios"

    export default {
        components: {
            TitlePage,
            Button
        },
        
        data: function () {
            return {
                movie: {},
                imgURL: "https://image.tmdb.org/t/p/w200",
                loadedPost: {}
            }
        },
        asyncData({ $axios, route }) {

            // console.log(route)
            return $axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=9dcb183679039b039c527c347b054639&language=en-US`)
            .then(response => {
                return {movie : response.data}
            })
        },
       
        mixins: [ApiMovies, Movie]
    }

</script>

<style lang="scss" scoped>

</style>