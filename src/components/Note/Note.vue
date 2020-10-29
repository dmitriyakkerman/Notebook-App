<template>
    <div class="note__container">
        <div class="note-bar">
            <div class="note__category">{{ note.category.title }}</div>
            <div class="note__status" :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}" :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''"></div>
            <div class="note-nav">
                <button class="note__edit j-popup popup-note" title="Edit note" @click="editNote(note.id, $event)"></button>
                <button class="note__remove" title="Remove Note" @click="$emit('removeNote', note.id)"></button>
            </div>
        </div>
        <div class="note__text" v-html="note.text"></div>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex';

    export default {
        props: {
            note: Object
        },
        methods: {
            ...mapMutations(['setPopupComponent']),
            editNote(id, e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent(closest);
                }

                window.popup.manualOpen();
            }
        }
    }

</script>