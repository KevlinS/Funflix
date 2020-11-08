<template>
    <div>
        THIS IS ME
    </div>
</template>

<script>

    export default {
        created() {
            this.$axios.$get('https://api.themoviedb.org/3/movie/now_playing?api_key=9dcb183679039b039c527c347b054639&language=en-US&page=1')
            .then(res => console.log(res))
        }
    }
</script>

<style lang="scss" scoped>

</style>