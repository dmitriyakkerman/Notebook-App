<template>
    <div class="favourite">
        <h1 class="title">Favourite notes</h1>
        <div class="main-bar">
            <form class="main-bar__filters">
                <div class="form-group">
                    <label for="select-category">Select category</label>
                    <select id="select-category" class="main-bar__select-category" v-model="selectedCategory">
                        <option value="all">All</option>
                        <option v-for="note in favourite" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
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

    import NotesItem from "../components/Notes/NotesItem";
    import NoResults from "../components/Slots/NoResults";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            NotesItem,
            NoResults
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
            }
        }
    }

</script>