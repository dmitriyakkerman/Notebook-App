<template>
    <div class="category__container">
        <div class="category-bar">
            <button class="note__edit j-popup popup-category" title="Edit category" @click="editCategory(category.id, $event)"></button>
            <button class="note__remove" title="Remove category" @click="$emit('removeCategory', category.id)"></button>
        </div>
        <div v-if="notesByCategory.length" class="category-notes">
            <div class="category-notes__item" v-for="note in notesByCategory" :key="note.id">
                <div class="category-notes__title">{{ note.title }}</div>
                <div class="category-notes__text" v-html="note.text"></div>
                <div class="category-notes__status">{{ note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : '' }}</div>
                <div class="category-notes__nav">
                    <div class="category-notes__buttons">
                        <button class="category-notes__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                        <router-link :to="'/notes/' + note.id" class="category-notes__look" title="View note"></router-link>
                        <button class="category-notes__remove" title="Remove note" @click.prevent="removeNote(note.id)"></button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="category__no-notes">There is any note. Create new one! <span class="warning"></span></div>

    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        props: {
            category: Object
        },
        computed: {
            ...mapGetters(['notesBy']),
           notesByCategory() {
                return this.notesBy(+this.$route.params.id)
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