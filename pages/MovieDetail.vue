<template>
    <div class="movie_detail">
        <p>{{movie.original_title}}</p>
        <img :src="imgURL + movie.poster_path">
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage"
import NowplayingMovies from "../components/NowplayingMovies"
import ApiMovies from "../mixins/ApiMovies"

    export default {
        components: {
            TitlePage,
            NowplayingMovies
        },
        data: function () {
            return {
                movie: {},
                imgURL: "https://image.tmdb.org/t/p/w200",
            }
        },
        created() {
            console.log(this.$route.params.id);
            this.getMovie(this.$route.params.id)
            .then(res => this.movie = res)
            .catch(err => console.log(err))
        },
        mixins: [ApiMovies]
    }

</script>

<style lang="scss" scoped>

</style>