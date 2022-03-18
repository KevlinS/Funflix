<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <NuxtLink class="navbar-brand" to="/">FUNFLIX</NuxtLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
         <NuxtLink class="nav-link" to="/">Home</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="wishlists">My List</NuxtLink>
      </li>
    </ul>
   <form class="form-inline my-2 my-lg-0">
     
      <input class="form-control mr-sm-2" name="searchValue" type="search" placeholder="Search" aria-label="Search" v-model="searchValue">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="submit()">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
import ApiMovies from "../mixins/ApiMovies";
import search from "../pages/search";

export default {
  data: function () {
    return {
      moviesList: [],
      searchValue: "",
      imgURL: "https://image.tmdb.org/t/p/w92",
    };
  },

  methods: {
      submit(){
        this.$router.push("/search?searchValue="+this.searchValue);
      }
  },
 
  mixins: [ApiMovies]
};
</script>

<style>
.bg-dark {
    background-color: #000000 !important;
}

</style>