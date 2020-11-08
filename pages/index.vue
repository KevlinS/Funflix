<template>
  <div v-if="!isVisible" class="container">
    <h1>loading...</h1>
  </div>
  <div v-else class="container">
    <NowplayingMovies />
    <UpcomingMovies />
    <PopularMovies />
    <TopRatedMovies />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isVisible: true,
    };
  },
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
