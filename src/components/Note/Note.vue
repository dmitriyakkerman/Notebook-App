<template>
    <div class="note__container">
        <div class="main-bar">
            <div class="main-bar__category">{{ note.category.title }}</div>
            <div class="main-bar__date">
                <div class="main-bar__status" :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}" :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''"></div>
                <span>{{ note.deadline ? note.deadline : '' }}</span>
            </div>
            <div class="main-bar__buttons">
                <button class="main-bar__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                <button class="main-bar__edit j-popup popup-note" title="Edit note" @click="editNote(note, $event)"></button>
                <button class="main-bar__remove" title="Remove Note" @click="$emit('removeNote', note.id)"></button>
            </div>
        </div>
        <div class="note__text" v-html="note.text"></div>
    </div>
</template>

<script>

    import {mapMutations, mapActions} from 'vuex';

    export default {
        props: {
            note: Object
        },
        methods: {
            ...mapActions(['updateFavouriteNote']),
            ...mapMutations(['setPopupComponent']),
            makeFavourite(id) {
                this.updateFavouriteNote(id)
            },
            editNote(note, e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent(closest, note);
                }

                window.popup.manualOpen();
            }
        }
    }

</script>