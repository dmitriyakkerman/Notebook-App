<template>
    <div class="nav-nottom">
        <button class="nav-nottom__theme" @click="toggleTheme" :class="{dark: darkTheme }">
            <i></i>
        </button>
        <div class="nav-nottom__time">
            <span>{{ date | toLocaleTimeString }}</span>
        </div>
    </div>
</template>

<script>

    import {mapMutations, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                date: new Date()
            }
        },
        computed: {
          ...mapGetters(['darkTheme'])
        },
        filters: {
            toLocaleDateString(value) {
              return value.toLocaleDateString();
            },
            toLocaleTimeString(value) {
                return value.toLocaleTimeString();
            }
        },
        methods: {
            ...mapMutations(['toggleThemeState']),
            toggleTheme() {
                this.toggleThemeState()
            }
        },
        mounted() {
            setInterval(() => {
                this.date = new Date()
            }, 1000)
        }
    }

</script>