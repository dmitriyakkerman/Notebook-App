<template>
    <div class="note">
        <h1 class="title">{{ note.title }}</h1>
        <Note :note="note" @removeNote="removeNote"></Note>
    </div>
</template>

<script>

    import Note from "../components/Note/Note";
    import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {
          Note
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['noteBy']),
            note() {
                return this.noteBy(+this.$route.params.id)
            }
        },
        methods: {
            ...mapActions(['deleteNote']),
            removeNote(id) {
                this.$router.push('/notes');
                this.deleteNote(id);
            }
        }
    }

</script>