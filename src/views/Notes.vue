<template>
    <div class="notes">
        <Title>Notes</Title>
        <div class="main-bar">
            <form class="main-bar__filters">
                <SelectCategory :selected="selectedCategory" :notes="notes" @categoryValue="categoryValue"></SelectCategory>
                <SelectStatus :selected="selectedStatus" @statusValue="statusValue"></SelectStatus>
                <Search :categoryToSearch="noteToSearch" :loading="loading" @initLoading="initLoading" @removeLoading="removeLoading" @debounce="debounce"></Search>
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

    import Title from "../components/Slots/Title";
    import NotesItem from "../components/Notes/NotesItem";
    import NoResults from "../components/Slots/NoResults";
    import SelectCategory from "../components/MainBar/SelectCategory";
    import SelectStatus from "../components/MainBar/SelectStatus";
    import Search from "../components/MainBar/Search";
    import {debounce} from 'lodash'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        components: {
            Title,
            NotesItem,
            NoResults,
            SelectCategory,
            SelectStatus,
            Search
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
            removeLoading() {
                this.loading = false;
            },
            debounce: debounce(function (value) {
                this.noteToSearch = value;
                this.removeLoading();
            }, 300),
            restoreNote(note) {
                this.restoreCategoryByNote(note);
                this.moveNoteFromTrash(note);
            },
            statusValue(value) {
                this.selectedStatus = value
            },
            categoryValue(value) {
                this.selectedCategory = value
            }
        }
    }

</script>