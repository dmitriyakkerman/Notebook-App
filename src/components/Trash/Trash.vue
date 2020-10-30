<template>
    <div class="trash">
        <div v-if="notesTrash.length || categoriesTrash.length">
            <button class="trash__clean" title="Clear trash box" @click="cleanTrash">
                <i></i>
            </button>
            <div v-if="notesTrash.length" class="trash__notes">
                <h2>Notes</h2>
                <div class="trash__container">
                    <div class="main-bar">
                        <div class="main-bar__filters">
                            <label for="select-category">Select category</label>
                            <select id="select-category" class="main-bar__select-category" v-model="selectedCategory">
                                <option value="all">All</option>
                                <option v-for="note in notesTrash" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
                            </select>
                            <label for="select-status">Select status</label>
                            <select id="select-status" class="main-bar__select-status" v-model="selectedStatus">
                                <option value="all">All</option>
                                <option value="active">Active</option>
                                <option value="expired">Expired</option>
                            </select>
                        </div>
                    </div>
                    <div class="trash__items">
                        <div class="trash-item" v-for="note in filteredNotes(notesTrash)" :key="note.id">
                            <div class="trash-item__title">{{ note.title }}</div>
                            <div class="trash-item__status" :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}" :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''"></div>
                            <div class="trash-item__nav">
                                <router-link :to="'/categories/' + note.category.id" class="trash-item__category" title="Note category">{{ note.category.title }}</router-link>
                                <div class="trash-item__buttons">
                                    <button class="trash-item__restore" title="Restore note" @click="restoreNote(note)"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="categoriesTrash.length" class="trash__categories">
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
                selectedCategory: 'all',
                selectedStatus: 'all',
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

                return filteredNotes.filter(function (note) {
                    let filtered;

                    if(that.selectedStatus === 'all') {
                        filtered = filteredNotes
                    }
                    else if(that.selectedStatus === 'active') {
                        if(note.deadline && new Date(note.deadline) > Date.now()) {
                            return note
                        }
                    }
                    else if(that.selectedStatus === 'expired') {
                        if(note.deadline && new Date(note.deadline) < Date.now()) {
                            return note
                        }
                    }

                    return filtered;
                });
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