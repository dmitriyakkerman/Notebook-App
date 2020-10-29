<template>
    <div class="note-popup">
        <h3 class="popup__heading">Note form</h3>
        <form action="" class="popup__form" @submit.prevent="addNote">
            <input type="text" class="popup__title" placeholder="Note title" v-model="note.title">
            <div class="popup__form-group">
                <select v-model="selected" class="popup__select">
                    <option disabled value="default">Choose category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.title">{{category.title}}</option>
                </select>
                <input type="date" class="popup__date">
            </div>
            <textarea class="popup__text" placeholder="Note text" v-model="note.text"></textarea>
            <input type="submit" class="popup__submit" value="Add">
        </form>
    </div>
</template>

<script>

    import marked from 'marked'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                selected: 'default',
                note: {
                    title: '',
                    text: ''
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
                })

                return id;
            }
        },
        methods: {
            ...mapActions(['postNote']),
            addNote() {
                let that = this;
                if(this.note.title.trim() && this.note.text.trim() && this.selected !== 'default') {
                    let newNote = {
                        id: Date.now(),
                        title: that.note.title,
                        text: marked(that.note.text),
                        favourite: false,
                        category: {
                            id: that.findCategoryId,
                            title: that.selected
                        }
                    };

                    that.postNote(newNote);
                    that.selected = 'default';
                    that.note.title = that.note.text = '';
                    that.$router.push('/notes');
                }
            }
        }
    }

</script>