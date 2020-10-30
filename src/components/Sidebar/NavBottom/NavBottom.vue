<template>
    <div class="nav-bottom">
        <button class="nav-bottom__theme" @click="toggleTheme" :class="{dark: darkTheme}">
            <i></i>
        </button>
        <div class="nav-bottom__time">
            <span>{{ time | toLocaleTimeString }} on </span>
            <span>{{ date }}</span>
        </div>
    </div>
</template>

<script>

    import {mapMutations, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                date: new Date(),
                time: new Date()
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
            this.date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
            setInterval(() => {
                this.time = new Date()
            }, 1000)
        }
    }

</script>