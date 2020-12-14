<template>
    <transition name="appear">
        <component v-if="modalForm.isOpen" :is="modalForm.component" :modalForm="modalForm.data" @click.native="bodyClose($event)"></component>
    </transition>
</template>

<script>

    import {mapGetters, mapMutations} from 'vuex'

    export default {
        components: {
            ModalAddNote: () => import('../Modals/ModalAddNote.vue'),
            ModalAddCategory: () => import('../Modals/ModalAddCategory.vue'),
            ModalEditNote: () => import('../Modals/ModalEditNote.vue'),
            ModalEditCategory: () => import('../Modals/ModalEditCategory.vue'),
        },
        computed: {
            ...mapGetters(['modalForm'])
        },
        methods: {
            ...mapMutations(['closeModalForm']),
            bodyClose(e) {
               if(!e.target.closest('.modal__container')) {
                   this.closeModalForm();
               }
            }
        }
    }


</script>