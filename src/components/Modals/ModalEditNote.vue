<template>
    <div class="modal note-modal">
        <div class="modal__container">
            <h3 class="modal__title">Note form</h3>
            <form action="" class="modal-form form" @submit.prevent="saveNote" >
                <div class="form-group">
                    <div class="form__title">
                        <label for="note-title">Note title</label>
                        <input id="note-title" type="text" v-model="modalForm.title" ref="title">
                    </div>
                </div>
                <div class="form-group">
                    <div class="form__select">
                        <label for="note-select">Note category</label>
                        {{modalForm.category.title}}
                        <select id="note-select" v-model="modalForm.category.title" ref="category">
                            <option disabled value="default">Choose category</option>
                            <option v-for="category in categories" :key="category.id" :value="category.title">{{category.title}}</option>
                        </select>
                    </div>
                    <div class="form__date">
                        <label for="note-date">Deadline</label>
                        <input type="date" id="note-date" v-model="modalForm.deadline" ref="deadline">
                    </div>
                </div>
                <div class="form-group">
                    <div class="form__text">
                        <label for="note-text">Note text</label>
                        <textarea id="note-text" v-model="strippedText" ref="text"></textarea>
                    </div>
                </div>
                <input type="submit" value="Submit" class="form__submit">
            </form>
            <a href="" class="modal__close" @click.prevent="closeModal"></a>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import marked from 'marked'

    export default {
        props: ['modalForm'],
        computed: {
            ...mapGetters(['categories']),
            strippedText() {
                return this.modalForm.text.replace(/<\/?[^>]+>/ig, "")
            }
        },
        methods: {
            ...mapActions(['updateEditedNote']),
            ...mapMutations(['toggleModalMessage', 'closeModalForm']),
            saveNote() {
                let editedNote = {
                    id: this.modalForm.id,
                    title: this.$refs.title.value,
                    text: marked(this.$refs.text.value),
                    deadline: this.$refs.deadline.value,
                    favourite: this.modalForm.favourite,
                    category: {
                        id: this.modalForm.category.id,
                        title: this.$refs.category.value
                    }
                };

                this.updateEditedNote(editedNote);
                this.toggleModalMessage('Note has been edited');
                this.closeModal();
            },
            closeModal() {
                this.closeModalForm();
            }
        }
    }

</script>