<template>
  <div class="popular_movies">
    <h1>POPULAR</h1>
    <li v-for="movie in moviesList" :key="movie.id">
      <p>{{ movie.original_title }}</p>
      <img :src="imgURL + movie.poster_path" />
    </li>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import mixins from "../mixins/ApiMovies";

export default {
  data: function () {
    return {
      moviesList: [],
      imgURL: "https://image.tmdb.org/t/p/w200",
    };
  },
  props: {
    movieObject: Object,
  },
  created() {
    this.getMoviesPopular().then((res) => {
      this.moviesList = res.results;
    });
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>