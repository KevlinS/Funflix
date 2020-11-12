<template>

  <div class="d-flex" id="wrapper" >
     <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Funflix</div>
      <div class="list-group list-group-flush">
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#nowplayingmovies">Now Playing</NuxtLink>
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#upcomingmovies">Upcoming</NuxtLink>
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#popularmovies">Popular</NuxtLink>
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#topratedmovies">Top Rated</NuxtLink>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->
    <div id="page-content-wrapper">
      <div id="nowplayingmovies">
      <NowplayingMovies />
    </div>
    <div id="upcomingmovies">
       <UpcomingMovies />
    </div>
    <div id="popularmovies">
       <PopularMovies />
    </div>
    <div id="topratedmovies">
      <TopRatedMovies />
    </div>
    </div>
      
  </div>
  

</template>

<script>
import ApiMovies from "../mixins/ApiMovies";


export default {
  data: function () {
    return {
      
    };
  },
  methods: {
    
  },

  mixins: [ApiMovies]
};
</script>

<style>
.bg-light{
  background-color: transparent !important;
  color: white;
}
.border-right {
    border-right: 1px solid #0b121a !important;
}
#wrapper {
    overflow-x: hidden;
 }

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  background-color: transparent !important;
  margin-right: 10px;
  float: left;
  position: fixed;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
    position: relative;
    margin-left: 245px;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

/* .container {
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
} */
</style>
