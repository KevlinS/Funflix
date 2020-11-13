<template>
  <div class="wishlists">
    <Button btnTitle="Delete All Movies" :btnFunction="clearAllMovies" />
    <ul>
      <li v-for="movie in movieArray" :key="movie.id">
        <NuxtLink :to="`/detail?id=${movie.id}`">
          <img :src="imgURL + movie.poster_path" />
          <p>{{ movie.original_title }}</p>
        </NuxtLink>
      </li>
    </ul>
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
  mounted() {
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
}
</style>