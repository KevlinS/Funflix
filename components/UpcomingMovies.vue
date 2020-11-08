<template>
  <div class="upcoming_movies">
      <h1>UPCOMING</h1>
    <li v-for="movie in moviesList" :key="movie.id">
      <p>{{ movie.original_title }}</p>
      <img :src="imgURL + movie.poster_path" />
    </li>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      moviesList: [],
      imgURL: "https://image.tmdb.org/t/p/w200",
    };
  },
  created() {
    var api_Upcoming =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1";
    this.$axios.$get(api_Upcoming).then((res) => {
      this.moviesList = res.results;
      console.warn(res.results);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>