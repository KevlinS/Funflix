<template>
  <div class="popular_movies">
    <h1>POPULAR</h1>
    <ul>
      <li v-for="movie in moviesList" :key="movie.id">
         <NuxtLink :to="`/detail?id=${movie.id}`" >
       <img :src="imgURL + movie.poster_path" />
      <p>{{ movie.original_title }}</p>
      </NuxtLink>
      </li>
    </ul>
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
  // async created() {
  //     this.movieList = await fetch(
  //       'https://api.themoviedb.org/3/movie/popular?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1'
  //     ).then(res => res.json())
  //     .then(res => this.moviesList = res.results);
  //   },

  mixins: [ApiMovies],
};
</script>

<style>
.popular_movies h1{
  color: rgb(245, 237, 237);
  font-weight: bold;
  margin-left: 35px;
}

.popular_movies ul li a{
  color: rgb(245, 237, 237);
  text-decoration: none;
}
.popular_movies ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}

.popular_movies li {
  flex-basis: 25%;
  margin-bottom: 25px;
}
</style>