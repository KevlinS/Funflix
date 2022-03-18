<template>
  <div class="search">
    <ul>
      <li v-for="movie in moviesList" :key="movie.id">
        <NuxtLink :to="`/detail?id=${movie.id}`">
          <img :src="imgURL + movie.poster_path" />
          <p>{{ movie.original_title }}</p>
        </NuxtLink>
      </li>
    </ul>
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
  methods: {},
  async beforeMount() {
    await fetch(
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
<style>
.search ul li a {
  color: rgb(245, 237, 237);
  text-decoration: none;
}
.search ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}

.search li {
  flex-basis: 20%;
  margin-bottom: 25px;
}
</style>