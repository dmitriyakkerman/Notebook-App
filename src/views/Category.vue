<template>
    <div class="category">
        <h1 class="title">{{ category.title }}</h1>
        <div class="category__container">
            <div class="main-bar main-bar--category">
                <form class="main-bar__filters">
                    <div class="form-group">
                        <label for="select-category">Select status</label>
                        <select id="select-category" class="main-bar__select-status" v-model="selectedStatus">
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="expired">Expired</option>
                        </select>
                    </div>
                </form>
                <div class="main-bar__buttons">
                    <button class="main-bar__edit j-popup popup-category" title="Edit category" @click="editCategory(category.id, $event)"></button>
                    <button class="main-bar__remove" title="Remove category" @click="removeCategory(category.id)"></button>
                </div>
            </div>
            <div class="notes__container">
                <div v-if="notesByCategory.length">
                    <NotesItem v-for="note in notesByCategory" :key="note.id" :note="note" :isCategory="true"></NotesItem>
                </div>
                <no-results v-else>There is any note. Create new one!</no-results>
            </div>
        </div>
    </div>
</template>

<script>


    import NotesItem from "../components/Notes/NotesItem";
    import NoResults from "../components/Slots/NoResults";
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
            NotesItem,
            NoResults
        },
        data() {
            return {
                selectedStatus: 'all'
            }
        },
        computed: {
            ...mapGetters(['notesBy', 'categoryBy']),
            category() {
                return this.categoryBy(+this.$route.params.id)
            },
            notesByCategory() {
                let that = this;

                return this.notesBy(+this.$route.params.id).filter(function (note) {
                    let filtered;

                    if(that.selectedStatus === 'all') {
                        filtered = that.notesBy(+that.$route.params.id)
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
            ...mapActions(['deleteCategory', 'updateFavouriteNote', 'deleteNote', 'moveNoteToTrash']),
            ...mapMutations(['removeNotesByCategory', 'setPopupComponent']),
            removeCategory(id) {
                this.$router.push('/categories');
                this.deleteCategory(id);
                this.removeNotesByCategory(id);
            },
            makeFavourite(id) {
                this.updateFavouriteNote(id)
            },
            removeNote(id) {
                this.moveNoteToTrash(id);
                this.deleteNote(id);
            },
            editCategory(id, e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent({closest});
                }

                window.popup.manualOpen();
            }
        }
    }

</script>