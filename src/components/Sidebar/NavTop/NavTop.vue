<template>
    <div class="nav-top">
        <button class="nav-top__btn" ref="jPopup">
            <i></i>
        </button>
        <button class="nav-top__btn" @click="toggleTheme">
            <i></i>
        </button>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex'

    export default {
        mounted() {
            new window.ArmUI.Popup({
                el: '.popup',
                openers: this.$refs.jPopup,
                closable: true
            });
        },
        methods: {
            ...mapMutations(['toggleThemeState']),
            toggleTheme() {
                this.toggleThemeState()
            }
        }
    }

</script>