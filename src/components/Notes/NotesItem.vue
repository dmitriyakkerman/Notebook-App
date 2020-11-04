<template>
    <div>
        <div class="notes-item">
            <div class="notes-item__title">{{ note.title }}</div>
            <div class="notes-item__text" v-html="note.text"></div>
            <div class="notes-item__status"
                 :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}"
                 :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''">
            </div>
            <div class="notes-item__nav">
                <router-link v-if="!isCategory && !isTrash" :to="'/categories/' + note.category.id" class="notes-item__category" title="Note category">{{ note.category.title }}</router-link>
                <div class="notes-item__buttons">
                    <button v-if="!isTrash" class="notes-item__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                    <router-link v-if="!isTrash" :to="'/notes/' + note.id" class="notes-item__look" title="View note"></router-link>
                    <button v-if="!isTrash" class="notes-item__remove" title="Remove note" @click.prevent="removeNote(note.id)"></button>
                    <button v-if="isTrash" class="notes-item__restore" title="Restore note" @click="restoreNote(note)"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions, mapMutations} from 'vuex'

    export default {
        props: {
            note: Object,
            isCategory: Boolean,
            isTrash: Boolean
        },
        methods: {
            ...mapActions(['updateFavouriteNote', 'deleteNote', 'moveNoteToTrash', 'moveNoteFromTrash', 'restoreCategoryByNote']),
            ...mapMutations(['setPopupComponent']),
            makeFavourite(id) {
                this.updateFavouriteNote(id)
            },
            removeNote(id) {
                this.moveNoteToTrash(id);
                this.deleteNote(id);
            },
            addNote(e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent(closest);
                }
                window.popup.manualOpen();
            },
            restoreNote(note) {
                this.restoreCategoryByNote(note);
                this.moveNoteFromTrash(note);
            }
        }
    }

</script>