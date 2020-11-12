<template>
  <div class="movie_detail">
    <p>{{ movie.original_title }}</p>
    <img :src="imgURL + movie.poster_path" />
    <Button btnTitle="add movie" :btnFunction="() => addToWishlists(movie)" />
    <button
      class="btn btn-outline-success my-2 my-sm-0"
      type="submit"
      @click.prevent="submit()"
    >
      Search
    </button>
  </div>
</template>

<script>
import TitlePage from "../../components/TitlePage";
import ApiMovies from "../../mixins/ApiMovies";
import Button from "../../components/Button";
import Movie from "../../mixins/Movie";
import Vuex from "vuex";
import axios from "axios";

export default {
  components: {
    TitlePage,
    Button,
  },

  data: function () {
    return {
      movie: {},
      imgURL: "https://image.tmdb.org/t/p/w200",
    };
  },
  methods: {
    submit() {
      //if you want to send any data into server before redirection then you can do it here
      console.log(this.$route.query.id);
    },
  },
  created() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.$route.query.id}?api_key=9dcb183679039b039c527c347b054639&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => (this.movie = res))
      .catch((err) => console.log(err));
  },

  mixins: [ApiMovies, Movie],
};
</script>

<style lang="scss" scoped>
</style>