<template>
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
                <button class="main-bar__remove" title="Remove category" @click="$emit('removeCategory', category.id)"></button>
            </div>
        </div>
        <div class="notes__container">
            <div v-if="notesByCategory.length">
                <div class="notes-item" v-for="note in notesByCategory" :key="note.id">
                    <div class="notes-item__title">{{ note.title }}</div>
                    <div class="notes-item__text" v-html="note.text"></div>
                    <div class="notes-item__status"
                         :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}"
                         :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''">
                    </div>
                    <div class="notes-item__buttons">
                        <button class="notes-item__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                        <router-link :to="'/notes/' + note.id" class="notes-item__look" title="View note"></router-link>
                        <button class="notes-item__remove" title="Remove note" @click.prevent="removeNote(note.id)"></button>
                    </div>
                </div>
            </div>
            <no-results v-else>There is any note. Create new one!</no-results>
        </div>
    </div>
</template>

<script>

    import NoResults from "../Slots/NoResults";
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
            NoResults
        },
        props: {
            category: Object
        },
        data() {
            return {
                selectedStatus: 'all'
            }
        },
        computed: {
            ...mapGetters(['notesBy']),
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
            ...mapActions(['updateFavouriteNote', 'deleteNote', 'moveNoteToTrash']),
            ...mapMutations(['setPopupComponent']),
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
            }
        }
    }

</script>