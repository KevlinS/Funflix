<template>
  <div class="upcoming_movies">
    <h1>UPCOMING</h1>
    <li v-for="movie in moviesList" :key="movie.id">
      <NuxtLink :to="`/detail?id=${movie.id}`" >
      <p>{{ movie.original_title }}</p>
      <img :src="imgURL + movie.poster_path" />
      </NuxtLink>
    </li>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";

export default {
  data: function () {
    return {
      moviesList: [],
      imgURL: "https://image.tmdb.org/t/p/w200",
    };
  },
  created() {
    this.getMoviesUpcoming().then((res) => {
      this.moviesList = res.results;
    });
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>