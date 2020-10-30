<template>
    <h3 class="modal">
        {{ modalMessage }}
    </h3>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['modalMessage'])
        }
    }

</script>