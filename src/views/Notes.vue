<template>
    <div class="notes">
        <h1 class="title">My notes</h1>
        <div class="main-bar">
            <form class="main-bar__filters">
                <div class="form-group">
                    <label for="select-category">Select category</label>
                    <select id="select-category" class="main-bar__select-category" v-model="selectedCategory">
                        <option value="all">All</option>
                        <option v-for="category in categories" :key="category.id" :value="category.title">{{ category.title }}</option>
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
                <div class="form-group">
                    <label for="search-notes">Search Notes</label>
                    <input id="search-notes" type="text" class="main-bar__search" v-model="noteToSearch" @keydown="initLoading" @input="debounce" @blur="loading=false">
                    <div class="search-loader" v-if="loading">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </form>
            <button class="main-bar__btn j-popup popup-note" @click="addNote">
                <i></i>
            </button>
        </div>
        <div class="notes__container">
            <transition-group name="appear">
                <NotesItem v-for="note in filteredNotes" :key="note.id" :note="note"></NotesItem>
            </transition-group>
            <transition name="no-results">
                <no-results v-if="!filteredNotes.length">There is any note. Create new one!</no-results>
            </transition>
        </div>
    </div>
</template>

<script>

    import NotesItem from "../components/Notes/NotesItem";
    import NoResults from "../components/Slots/NoResults";
    import _ from 'lodash'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        components: {
            NotesItem,
            NoResults
        },
        data() {
            return {
                selectedCategory: 'all',
                selectedStatus: 'all',
                noteToSearch: '',
                loading: false
            }
        },
        computed: {
            ...mapGetters(['notes', 'categories']),
            filteredNotes() {
                let that = this;
                let filteredNotes;

                filteredNotes = this.notes.filter(function (note) {
                    if(note.title.indexOf(that.noteToSearch) !== -1) {
                        return note
                    }
                });

                filteredNotes = filteredNotes.filter(function (note) {
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
                })
            }
        },
        methods: {
            ...mapMutations(['setPopupComponent']),
            addNote(e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent(closest);
                }
                window.popup.manualOpen();
            },
            initLoading() {
                this.loading = true;
            },
            debounce: _.debounce(function () {
                this.loading = false;
            }, 300),
            restoreNote(note) {
                this.restoreCategoryByNote(note);
                this.moveNoteFromTrash(note);
            }
        }
    }

</script>