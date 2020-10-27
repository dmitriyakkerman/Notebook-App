<template>
    <div>
        <h1 class="title">Favourite notes</h1>
        <Favourite :favourite="favourite"></Favourite>
    </div>
</template>

<script>

    import Favourite from "../components/Favourite/Favourite";
    import {mapGetters} from 'vuex'

    export default {
        components: {
          Favourite
        },
        computed: {
            ...mapGetters(['favourite'])
        }
    }

</script>