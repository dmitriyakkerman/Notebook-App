<template>
    <div class="notes-bar">
        <input type="text" class="notes-search" placeholder="Search note" v-model="noteToSearch">
        <ul class="notes-list">
            <router-link v-for="note in filteredNotes" :key="note.id" tag="li" :to="'/note/' + note.id" class="notes-item">
                <a href="" class="notes-link">
                    <span class="notes-link__title">{{note.title}}</span>
                    <span class="notes-link__category">{{note.category}}</span>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                noteToSearch: ''
            }
        },
        computed: {
            ...mapGetters(['notes']),
            filteredNotes() {
                let that = this;
                let filteredNotes;

                filteredNotes = this.notes.filter(function (note) {
                    if(note.title.indexOf(that.noteToSearch) !== -1) {
                        return note
                    }
                });

                return filteredNotes
            }
        }
    }

</script>