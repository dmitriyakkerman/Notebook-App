<template>
    <div class="trash">
        <Title>Trash</Title>
        <div v-if="notesTrash.length || categoriesTrash.length">
            <button class="trash__clean" title="Clear trash box" @click="cleanTrash">
                <i></i>
            </button>
            <div v-if="notesTrash.length" class="trash__notes">
                <h2>Notes</h2>
                <div class="trash__container">
                    <div class="main-bar">
                        <form class="main-bar__filters">
                            <SelectCategory :selected="selectedCategory" :notes="notesTrash" @categoryValue="categoryValue"></SelectCategory>
                            <SelectStatus :selected="selectedStatus" @statusValue="statusValue"></SelectStatus>
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

    import Title from "../components/Slots/Title";
    import NotesItem from "../components/Notes/NotesItem";
    import CategoriesItem from "../components/Categories/CategoriesItem";
    import NoResults from "../components/Slots/NoResults";
    import SelectCategory from "../components/MainBar/SelectCategory";
    import SelectStatus from "../components/MainBar/SelectStatus";
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
            Title,
            NotesItem,
            CategoriesItem,
            NoResults,
            SelectCategory,
            SelectStatus
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
            ...mapMutations(['toggleModalMessage']),
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

                filteredNotes = filteredNotes.filter(function (note) {
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

                return filteredNotes.sort(function (a, b) {
                    if (a.title < b.title) {
                        return -1
                    }
                    if (a.title > b.title) {
                        return 1
                    }

                    return 0
                });
            },
            cleanTrash() {
                this.cleanNotesTrash();
                this.cleanCategoriesTrash();
                this.toggleModalMessage('Trash box has been cleared');
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