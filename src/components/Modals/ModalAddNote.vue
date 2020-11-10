<template>
    <div class="modal note-modal">
        <h3 class="modal__title">Note form</h3>
        <form action="" class="form" @submit.prevent="addNote">
            <div class="form-group">
                <div class="form__title">
                    <label for="note-title">Note title</label>
                    <input id="note-title" type="text" v-model="note.title">
                </div>
            </div>
            <div class="form-group">
                <div class="form__select">
                    <label for="note-select">Note category</label>
                    <select id="note-select" v-model="selected">
                        <option disabled value="default">Choose category</option>
                        <option v-for="category in categories" :key="category.id" :value="category.title">{{category.title}}</option>
                    </select>
                </div>
                <div class="form__date">
                    <label for="note-date">Deadline</label>
                    <input type="date" id="note-date" v-model="note.deadline">
                </div>
            </div>
            <div class="form-group">
                <div class="form__text">
                    <label for="note-text">Note text</label>
                    <textarea id="note-text" v-model="note.text"></textarea>
                </div>
            </div>
            <input type="submit" value="Submit" class="form__submit">
            <a href="" class="modal__close" @click.prevent="closeModal"></a>
        </form>
    </div>
</template>

<script>

    import marked from 'marked'
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                selected: 'default',
                note: {
                    title: '',
                    text: '',
                    deadline: null
                }
            }
        },
        computed: {
            ...mapGetters(['categories']),
            findCategoryId() {
                let that = this;
                let id;
                that.categories.find(function (category) {
                    if (category.title === that.selected) {
                        id = category.id
                    }
                });

                return id;
            }
        },
        methods: {
            ...mapActions(['postNote']),
            ...mapMutations(['toggleModalMessage', 'closeModalForm']),
            addNote() {
                let that = this;
                if(this.note.title.trim() && this.note.text.trim() && this.selected !== 'default') {
                    let newNote = {
                        id: Date.now(),
                        title: that.note.title,
                        text: marked(that.note.text),
                        deadline: that.note.deadline,
                        favourite: false,
                        category: {
                            id: that.findCategoryId,
                            title: that.selected
                        }
                    };

                    that.postNote(newNote);
                    that.toggleModalMessage('Note has been submitted');
                    that.selected = 'default';
                    that.note.title = that.note.text = '';
                    that.closeModal();
                }
            },
            closeModal() {
                this.closeModalForm();
            }
        }
    }

</script>