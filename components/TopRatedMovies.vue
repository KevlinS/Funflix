<template>
  <div class="toprated_movies">
      <h1>TOP RATED</h1>
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
    this.getA().then((res) => {
      this.moviesList = res.results;
    });
  },
  methods: {
    getA() {
      var api_Popular =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1";
    return fetch(api_Popular).then(res => res.json())
    }
  }
};
</script>

<style lang="scss" scoped>
</style>