<template>
    <form action="" class="modal-form form" @submit.prevent="saveCategory">
        <div class="form-group">
            <div class="form__title">
                <label for="note-title">Note title</label>
                <input id="note-title" type="text" v-model="modalForm.title" ref="title">
            </div>
        </div>
        <input type="submit" value="Submit" class="form__submit">
    </form>
</template>

<script>

    import {mapActions, mapMutations} from 'vuex'

    export default {
        props: ['modalForm'],
        methods: {
            ...mapActions(['updateEditedCategory']),
            ...mapMutations(['toggleModalMessage']),
            saveCategory() {
                let editedCategory = {
                    id: this.modalForm.id,
                    title: this.$refs.title.value
                };

                this.updateEditedCategory(editedCategory);
                this.toggleModalMessage('Category has been edited');
            }
        }
    }

</script>