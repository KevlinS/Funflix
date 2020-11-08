<template>
  <div class="toprated_movies">
    <h1>TOP RATEDD</h1>
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
  created() {
    this.getMoviesTopRated.then((res) => {
      this.moviesList = res.results;
    });
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>