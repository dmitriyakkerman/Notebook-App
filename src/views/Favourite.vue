<template>
    <div class="favourite">
        <Title>Favourite notes</Title>
        <div class="main-bar">
            <form class="main-bar__filters">
                <SelectCategory :selected="selectedCategory" :notes="favourite" @categoryValue="categoryValue"></SelectCategory>
                <SelectStatus :selected="selectedStatus" @statusValue="statusValue"></SelectStatus>
            </form>
        </div>
        <div class="notes__container">
            <transition-group name="appear">
                <NotesItem v-for="note in filteredNotes(favourite)" :key="note.id" :note="note"></NotesItem>
            </transition-group>
            <transition name="no-results">
                <no-results v-if="!favourite.length">You don't have any favourite note so far!</no-results>
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
    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            Title,
            NotesItem,
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
            ...mapGetters(['favourite'])
        },
        methods: {
            ...mapActions(['updateFavouriteNote']),
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
                })
            },
            makeFavourite(id) {
                this.updateFavouriteNote(id)
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