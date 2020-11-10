<template>
    <transition name="slideUp">
        <component v-if="modalForm.isOpen" :is="modalForm.component" :modalForm="modalForm.data"></component>
    </transition>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        components: {
            ModalNote: () => import('../Modal/ModalNote.vue'),
            ModalCategory: () => import('../Modal/ModalCategory.vue'),
        },
        computed: {
            ...mapGetters(['modalForm'])
        }
    }


</script>