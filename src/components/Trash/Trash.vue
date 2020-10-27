<template>
    <div class="trash">
        <div v-if="notesTrash.length || categoriesTrash.length">
            <div class="trash__container">
                <div v-if="notesTrash.length" class="trash-bar">
                    <select class="trash-bar__filter" v-model="selectedCategory">
                        <option value="all">All</option>
                        <option v-for="note in notesTrash" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
                    </select>
                </div>
                <div class="trash-item" v-for="note in filteredNotes(notesTrash)" :key="note.id">
                    <div class="trash-item__title">{{ note.title }}</div>
                    <div class="trash-item__nav">
                        <router-link :to="'/categories/' + note.category.id" class="trash-item__category" title="Note category">{{ note.category.title }}</router-link>
                        <div class="trash-item__buttons">
                            <button class="trash-item__restore" title="Restore note" @click="restoreN(note)"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trash__container">
                <div class="trash-item" v-for="category in categoriesTrash" :key="category.id">
                    <div class="trash-item__title">{{ category.title }}</div>
                    <div class="trash-item__nav">
                        <div class="trash-item__buttons">
                            <button class="trash-item__restore" title="Restore note" @click="restoreC(category)"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="trash__no-notes">Trash box is empty! <span class="warning"></span></div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        props: {
            notesTrash: Array,
            categoriesTrash: Array
        },
        data() {
            return {
                selectedCategory: 'all'
            }
        },
        methods: {
            ...mapActions(['moveNoteFromTrash', 'moveCategoryFromTrash', 'restoreNotesByCategory']),
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
            restoreN(note) {
                this.moveNoteFromTrash(note);
            },
            restoreC(category) {
                this.restoreNotesByCategory(category)
                this.moveCategoryFromTrash(category)
            }
        }
    }

</script>