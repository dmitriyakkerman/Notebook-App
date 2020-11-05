<template>
    <div class="category">
        <Title>{{ category.title }}</Title>
        <div class="category__container">
            <div class="main-bar main-bar--category">
                <form class="main-bar__filters">
                    <SelectStatus :selected="selectedStatus" @statusValue="statusValue"></SelectStatus>
                </form>
                <div class="main-bar__buttons">
                    <button class="main-bar__edit j-popup popup-category" title="Edit category" @click="editCategory(category.id, $event)"></button>
                    <button class="main-bar__remove" title="Remove category" @click="removeCategory(category.id)"></button>
                </div>
            </div>
            <div class="notes__container">
                <transition-group name="appear">
                    <NotesItem v-for="note in notesByCategory" :key="note.id" :note="note" :isCategory="true"></NotesItem>
                </transition-group>
                <transition name="no-results">
                    <no-results v-if="!notesByCategory.length">There is any note. Create new one!</no-results>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

    import Title from "../components/Slots/Title";
    import NotesItem from "../components/Notes/NotesItem";
    import NoResults from "../components/Slots/NoResults";
    import SelectStatus from "../components/MainBar/SelectStatus";
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
            Title,
            NotesItem,
            NoResults,
            SelectStatus
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
            ...mapActions(['deleteCategory', 'updateFavouriteNote', 'deleteNote', 'moveCategoryToTrash', 'moveNoteToTrash']),
            ...mapMutations(['removeNotesByCategory', 'setPopupComponent', 'toggleModal', 'setModalMessage']),
            removeCategory(id) {
                this.moveCategoryToTrash(id);
                this.$router.push('/categories');
                this.deleteCategory(id);
                this.removeNotesByCategory(id);
                this.toggleModal();
                this.setModalMessage('Category has been moved to trash');
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
                    this.setPopupComponent(closest);
                }

                window.popup.manualOpen();
            },
            statusValue(value) {
                this.selectedStatus = value
            }
        }
    }

</script>