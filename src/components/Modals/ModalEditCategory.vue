<template>
    <div class="modal category-modal">
        <div class="modal__container">
            <h3 class="modal__title">Note category</h3>
            <form action="" class="form" @submit.prevent="saveCategory">
                <div class="form-group">
                    <div class="form__title">
                        <label for="note-title">Note title</label>
                        <input id="note-title" type="text" v-model="modalForm.title" ref="title">
                    </div>
                </div>
                <input type="submit" value="Submit" class="form__submit">
            </form>
            <a href="" class="modal__close" @click.prevent="closeModal"></a>
        </div>
    </div>
</template>

<script>

    import {mapActions, mapMutations} from 'vuex'

    export default {
        props: ['modalForm'],
        methods: {
            ...mapActions(['updateEditedCategory', 'updateNoteByCategory']),
            ...mapMutations(['toggleModalMessage', 'closeModalForm']),
            saveCategory() {
                let editedCategory = {
                    id: this.modalForm.id,
                    title: this.$refs.title.value
                };

                this.updateEditedCategory(editedCategory);
                this.updateNoteByCategory(editedCategory);
                this.toggleModalMessage('Category has been edited');
                this.closeModal();
            },
            closeModal() {
                this.closeModalForm();
            }
        }
    }

</script>