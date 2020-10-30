<template>
    <div class="modal">
        {{ modalMessage }}
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['modalMessage'])
        }
    }

</script>