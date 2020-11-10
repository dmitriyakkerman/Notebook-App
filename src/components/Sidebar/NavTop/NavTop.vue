<template>
    <div class="nav-top">
        <div class="nav-top__brand">
            <img src="../../../assets/img/logo.svg" alt="">
            <h1>Notebook App</h1>
        </div>
        <div class="nav-top__buttons">
            <button class="nav-top__btn" title="Add note" @click="addNote">
                <i></i>
            </button>
            <button class="nav-top__btn" title="Add category" @click="addCategory">
                <i></i>
            </button>
        </div>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations(['toggleModalForm']),
            addNote() {
                this.toggleModalForm(
                    {
                        component: 'ModalAddNote', data: {}
                    }
                );
            },
            addCategory() {
                this.toggleModalForm(
                    {
                        component: 'ModalAddCategory', data: {}
                    }
                );
            }
        }
    }

</script>