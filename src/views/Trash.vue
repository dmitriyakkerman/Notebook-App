<template>
    <div class="trash">
        <h1 class="title">Trash</h1>
        <div v-if="notesTrash.length || categoriesTrash.length">
            <button class="trash__clean" title="Clear trash box" @click="cleanTrash">
                <i></i>
            </button>
            <div v-if="notesTrash.length" class="trash__notes">
                <h2>Notes</h2>
                <div class="trash__container">
                    <div class="main-bar">
                        <form class="main-bar__filters">
                            <div class="form-group">
                                <label for="select-category">Select category</label>
                                <select id="select-category" class="main-bar__select-category" v-model="selectedCategory">
                                    <option value="all">All</option>
                                    <option v-for="note in notesTrash" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="select-status">Select status</label>
                                <select id="select-status" class="main-bar__select-status" v-model="selectedStatus">
                                    <option value="all">All</option>
                                    <option value="active">Active</option>
                                    <option value="expired">Expired</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="notes__items">
                        <transition-group name="appear">
                            <NotesItem v-for="note in filteredNotes(notesTrash)" :key="note.id" :note="note" :isTrash="true"></NotesItem>
                        </transition-group>
                    </div>
                </div>
            </div>
            <div v-if="categoriesTrash.length" class="trash__categories">
                <h2>Categories</h2>
                <div class="notes__items">
                    <transition-group name="appear">
                        <CategoriesItem v-for="category in categoriesTrash" :key="category.id" :category="category" :isTrash="true"></CategoriesItem>
                    </transition-group>
                </div>
            </div>
        </div>
        <transition name="no-results">
            <no-results v-if="!notesTrash.length && !categoriesTrash.length">Trash box is empty!</no-results>
        </transition>
    </div>
</template>

<script>

    import NotesItem from "../components/Notes/NotesItem";
    import CategoriesItem from "../components/Categories/CategoriesItem";
    import NoResults from "../components/Slots/NoResults";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            NotesItem,
            CategoriesItem,
            NoResults
        },
        data() {
            return {
                selectedCategory: 'all',
                selectedStatus: 'all',
            }
        },
        computed: {
            ...mapGetters(['notesTrash', 'categoriesTrash'])
        },
        methods: {
            ...mapActions(['cleanNotesTrash', 'cleanCategoriesTrash']),
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
            cleanTrash() {
                this.cleanNotesTrash();
                this.cleanCategoriesTrash();
            }
        }
    }

</script>