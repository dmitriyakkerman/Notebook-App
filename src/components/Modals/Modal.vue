<template>
    <transition name="slideUp">
        <component v-if="modalForm.isOpen" :is="modalForm.component" :modalForm="modalForm.data"></component>
    </transition>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        components: {
            ModalAddNote: () => import('../Modals/ModalAddNote.vue'),
            ModalAddCategory: () => import('../Modals/ModalAddCategory.vue'),
            ModalEditNote: () => import('../Modals/ModalEditNote.vue'),
            ModalEditCategory: () => import('../Modals/ModalEditCategory.vue'),
        },
        computed: {
            ...mapGetters(['modalForm'])
        }
    }


</script>