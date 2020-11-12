<template>
  <div >
      <ul>
        <li v-for="movie in moviesList" :key="movie.id">
           <NuxtLink :to="`/detail?id=${movie.id}`" >
      <p>{{ movie.original_title }}</p>
      <img :src="imgURL + movie.poster_path" />
      </NuxtLink>
        </li>
      </ul>
    <!-- <div v-if="moviesList.length === 0">
        <h1>Sorry. We Couldn't Find Any Movies.</h1>
    </div>
    <div v-else>
      <ul>
        <li v-for="movie in moviesList" :key="movie.id">
           <NuxtLink :to="`/detail?id=${movie.id}`" >
      <p>{{ movie.original_title }}</p>
      <img :src="imgURL + movie.poster_path" />
      </NuxtLink>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data: function () {
    return {
      movie: {},
      imgURL: "https://image.tmdb.org/t/p/w200",
      moviesList: [],
    };
  },
  methods: {
    
  },
  created() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9dcb183679039b039c527c347b054639&query=${this.$route.query.searchValue}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.moviesList = res.results;
      })
      .catch((err) => console.log(err));
    
  },
};
</script>

<style lang="scss" scoped>
</style>