<template>
  <div class="nowplaying_movies">
    <h1>NOW PLAYING</h1>
    
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
    this.getMoviesNowPlaying().then((res) => {
      this.moviesList = res.results;
    });
  },
  mixins: [ApiMovies],
};
</script>

<style lang="scss" scoped>
</style>