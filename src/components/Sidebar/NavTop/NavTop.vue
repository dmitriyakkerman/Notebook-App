<template>
    <div class="nav-top">
        <button class="nav-top__btn j-popup popup-note" title="Add note" @click="getPopupToggler">
            <i></i>
        </button>
        <button class="nav-top__btn j-popup popup-category" title="Add category" @click="getPopupToggler">
            <i></i>
        </button>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations(['setPopupComponent']),
            getPopupToggler(e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                   this.setPopupComponent({closest});
                }
            }
        }
    }

</script>