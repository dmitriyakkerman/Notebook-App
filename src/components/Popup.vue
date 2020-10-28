<template>
    <div class="popup" ref="popup">
        <div>
            <h2 class="popup__title">Add Note</h2>
            <form action="" class="popup-form" @submit.prevent="addNote">
                <input type="text" class="popup-form__title" placeholder="Note title" v-model="note.title">
                <select v-model="selected" class="popup-form__select">
                    <option disabled value="default">Choose category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.title">{{category.title}}</option>
                </select>
                <textarea class="popup-form__text" placeholder="Note text" v-model="note.text"></textarea>
                <input type="submit" class="popup-form__submit" value="Add">
            </form>
        </div>
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
        },
        mounted() {
            let popup = new window.ArmUI.Popup({
                el: '.popup',
                openers: '.j-popup',
                closable: true
            });

            window.popup = popup;

        }
    }

</script>