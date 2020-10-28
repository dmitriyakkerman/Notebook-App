<template>
    <div class="trash">
        <div v-if="notesTrash.length || categoriesTrash.length">
            <button class="trash__clean" title="Clear trash box" @click="cleanTrash">
                <i></i>
            </button>
            <div v-if="notesTrash.length">
                <h2>Notes</h2>
                <div class="trash__container">
                    <div class="trash-bar">
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
                                <button class="trash-item__restore" title="Restore note" @click="restoreNote(note)"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="categoriesTrash.length">
                <h2>Categories</h2>
                <div class="trash__container">
                    <div class="trash-item" v-for="category in categoriesTrash" :key="category.id">
                        <div class="trash-item__title">{{ category.title }}</div>
                        <div class="trash-item__nav">
                            <div class="trash-item__buttons">
                                <button class="trash-item__restore" title="Restore note" @click="restoreCategory(category)"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="trash__no-notes">Trash box is empty! <span class="warning"></span></div>
    </div>
</template>

<script>

    import {mapActions, mapMutations} from 'vuex';

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
            ...mapActions(['moveNoteFromTrash', 'moveCategoryFromTrash', 'restoreCategoryByNote', 'restoreNotesByCategory']),
            ...mapMutations(['cleanNotesTrash', 'cleanCategoriesTrash']),
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
                });

                return filteredNotes;
            },
            restoreNote(note) {
                this.restoreCategoryByNote(note);
                this.moveNoteFromTrash(note);
            },
            restoreCategory(category) {
                this.restoreNotesByCategory(category);
                this.moveCategoryFromTrash(category);
            },
            cleanTrash() {
                this.cleanNotesTrash();
                this.cleanCategoriesTrash();
            }
        }
    }

</script>