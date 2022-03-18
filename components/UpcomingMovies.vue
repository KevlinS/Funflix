<template>
  <div class="upcoming_movies">
    <h1>UPCOMING</h1>
    <ul>
  
    <!-- <li v-for="movie in moviesList" :key="movie.id">
       <NuxtLink :to="`/detail?id=${movie.id}`" >
       <img :src="imgURL + movie.poster_path" />
      <p>{{ movie.original_title }}</p>
      </NuxtLink>
    </li>
         -->
    </ul>
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";

export default {
  // data: function () {
  //   return {
  //     moviesList: [],
  //     imgURL: "https://image.tmdb.org/t/p/w200",
  //   };
  // },
  // created() {
  //   this.getMoviesUpcoming().then((res) => {
  //     this.moviesList = res.results;
  //   });
  // },
  // mixins: [ApiMovies],
};
</script>

<style>
.upcoming_movies h1{
  color: rgb(245, 237, 237);
  font-weight: bold;
  margin-left: 35px;
}

.upcoming_movies ul li a{
  color: rgb(245, 237, 237);
  text-decoration: none;
}
.upcoming_movies ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type:none;
}

.upcoming_movies li {
  flex-basis: 25%;
  margin-bottom: 25px;
}
</style>