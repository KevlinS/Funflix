<template>

  <div class="movie_detail">
    <div class="img_detail">
      <img :src="imgURL + movie.poster_path" />
      <Button btnTitle="add movie" :btnFunction="() => addToWishlists(movie)" />
    </div>
    <div class="description">
    <h1>{{ movie.original_title }}</h1>
    <p>{{ movie.overview}} </p>
    <h5> RELEASE DATE :</h5>
    <p> {{ movie.release_date}}</p>
    <h5>RATE :</h5>
    <p>{{ movie.vote_average}}/10</p>
    </div>
    
  </div>
</template>

<script>
import ApiMovies from "../../mixins/ApiMovies";
import Button from "../../components/Button";
import Movie from "../../mixins/Movie";


export default {
  components: {
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

<style>
.img_detail img{
  margin-bottom: 10px;
}
.movie_detail{
  display: flex; 
}
.movie_detail h5{
  color: rgb(245, 237, 237);
  text-decoration: none;
  font-weight: bold;
}
.movie_detail p{
  color: rgb(245, 237, 237);
  text-decoration: none;
}
.movie_detail h1{
  color: rgb(245, 237, 237);
  font-weight: bold;
}
.description {
   padding: 15px;
}
</style>