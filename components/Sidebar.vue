<template>

        <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">FUNFLIX</div>
      <div class="list-group list-group-flush">
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#nowplayingmovies">Now Playing</NuxtLink>
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#upcomingmovies">Upcoming</NuxtLink>
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#popularmovies">Popular</NuxtLink>
          <NuxtLink class="list-group-item list-group-item-action bg-light" to="/#topratedmovies">Top Rated</NuxtLink>
      </div>
    </div>
</template>

<script>
    export default {
        name:"Sidebar"
    }
</script>

<style lang="scss" scoped>

</style>