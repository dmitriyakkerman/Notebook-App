<template>
    <transition name="slideUp">
        <component v-if="modalForm.isOpen" :is="modalForm.component" :modalForm="modalForm.data"></component>
    </transition>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        components: {
            ModalNote: () => import('./ModalNote.vue'),
            ModalCategory: () => import('./ModalCategory.vue'),
        },
        computed: {
            ...mapGetters(['modalForm'])
        }
    }


</script>