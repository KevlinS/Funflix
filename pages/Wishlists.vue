<template>
  <div class="wishlists">
    
    <ul>
      
      <li v-for="movie in movieArray" :key="movie.id">
        <div>
        <NuxtLink :to="`/detail?id=${movie.id}`">
          <img :src="imgURL + movie.poster_path" />
          <p>{{ movie.original_title }}</p>
        </NuxtLink>
      </div>
     
        <div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="()=>removeMovie(movie)">X</button>
        </div>
        
      </li>
      
    </ul>
    <div class="btn_deleteall">
      <Button btnTitle="delete all movies" :btnFunction="clearAllMovies"/>
      
    </div>
    
  </div>
</template>

<script>
import Movie from "../mixins/Movie";
import Button from "../components/Button";


export default {
  data: function () {
    return {
      movieArray: [],
      movie: {},
      imgURL: "https://image.tmdb.org/t/p/w200",
    };
  },
  components: {
    Button,
  },
  methods: {
    clearAllMovies: function () {
      this.clearWishlists();
      this.movieArray = this.getMovieWishlists();
    },
  },
  fetch() {
    this.movieArray = this.getMovieWishlists();
  },
  
  mixins: [Movie],
};
</script>

<style>

.wishlists ul li a {
  color: rgb(245, 237, 237);
  text-decoration: none;
}
.wishlists ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}

.wishlists li {
  flex-basis: 20%;
  margin-bottom: 25px;
  display: flex;
}

.btn_deleteall{
  margin-left: auto;
  margin-right: auto;
  width: 150px;
}
</style>