<template>
    <div class="trash">
        <div class="trash-bar">
            <select class="trash-bar__filter" v-model="selectedCategory">
                <option value="all">All</option>
                <option v-for="note in trash" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
            </select>
        </div>
        <div class="trash__container">
            <div class="trash-item" v-for="note in filteredNotes(trash)" :key="note.id">
                <div class="trash-item__title">{{ note.title }}</div>
                <div class="trash-item__nav">
                    <router-link :to="'/categories/' + note.category.id" class="trash-item__category" title="Note category">{{ note.category.title }}</router-link>
                    <div class="trash-item__buttons">
                        <button class="trash-item__restore" title="Restore note" @click="restore(note)"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        props: {
            trash: Array
        },
        data() {
            return {
                selectedCategory: 'all'
            }
        },
        methods: {
            ...mapActions(['restoreNote', 'moveFromTrash']),
            filteredNotes(notes) {
                let that = this;
                let filteredNotes;

                filteredNotes = notes.filter(function (note) {
                    if(that.selectedCategory === 'all') {
                        return note
                    }
                    else {
                        return note.category.title === that.selectedCategory
                    }
                })

                return filteredNotes;
            },
            restore(note) {
                this.restoreNote(note);
                this.moveFromTrash(note)
            }
        }
    }

</script>