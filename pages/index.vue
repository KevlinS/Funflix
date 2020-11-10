<template>
  <div class="container">
    <div class="search_movie">
      <input type="text" name="searchValue" v-model="searchValue">
      
      <h2>Results</h2>
      <ul>    
        <li v-for="movie in moviesList" :key="movie.id">
          <NuxtLink :to="{name: 'MovieDetail', params: { id:movie.id } }" >
          <p>{{movie.id}}</p>
          <p>{{movie.original_title}}</p>
          <img :src="imgURL + movie.poster_path" />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NowplayingMovies />
    <UpcomingMovies />
    <PopularMovies />
    <TopRatedMovies />
  </div>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";


export default {
  data: function () {
    return {
      moviesList: [],
      searchValue: "",
      imgURL: "https://image.tmdb.org/t/p/w92"
    };
  },
   methods: {
      
  },
  computed: {
    
    filteredMovie: function() {
      let filter = new RegExp(this.searchValue, 'i');
      return this.moviesList.filter(movie=>movie.original_title.match(filter));
      console.log(moviesList)
    }
  },
  
  updated() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9dcb183679039b039c527c347b054639&query=${this.searchValue}`)
    .then(res => res.json())
    .then((res) => {
    this.moviesList = res.results;
    }).catch(err=> console.log(err))
  },
  watch: {
    searchValue: function(newValue, oldValue) {
      console.log("newVamie", newValue);
      console.log("oldValue", oldValue);
    }
  },

  mixins: [ApiMovies]
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
