<template>
    <div>
        <button @click.prevent="btnFunction">
            {{btnTitle}}
        </button>
    </div>
</template>

<script>
    export default {
        name:'Button',
        props: {
            btnTitle: String,
            btnFunction: Function
        }
    }
</script>

<style lang="scss" scoped>

</style>