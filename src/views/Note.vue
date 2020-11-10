<template>
    <div v-if="note" class="note">
        <Title>{{ note.title }}</Title>
        <div class="note__container">
            <div class="main-bar">
                <div class="main-bar__category">{{ note.category.title }}</div>
                <div class="main-bar__date">
                    <div class="main-bar__status"
                         :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}"
                         :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''">
                    </div>
                    <span>{{ note.deadline ? note.deadline : '' }}</span>
                </div>
                <div class="main-bar__buttons">
                    <button class="main-bar__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id, $event)"></button>
                    <button class="main-bar__edit" title="Edit note" @click="editNote(note)"></button>
                    <button class="main-bar__remove" title="Remove Note" @click="removeNote(note.id)"></button>
                </div>
            </div>
            <div class="note__text" v-html="note.text"></div>
        </div>
    </div>
</template>

<script>

    import Title from "../components/Slots/Title";
    import {mapGetters, mapMutations, mapActions} from 'vuex';

    export default {
        components: {
            Title
        },
        computed: {
            ...mapGetters(['noteBy']),
            note() {
                return this.noteBy(+this.$route.params.id)
            }
        },
        methods: {
            ...mapActions(['deleteNote', 'updateFavouriteNote']),
            ...mapMutations(['toggleModalMessage', 'toggleModalForm']),
            editNote(note) {
                this.toggleModalForm(
                    {
                        component: 'ModalEditNote', data: note
                    }
                );
            },
            removeNote(id) {
                this.$router.push('/notes');
                this.deleteNote(id);
                this.toggleModalMessage('Note has been moved to trash');
            },
            makeFavourite(id, $event) {
                this.updateFavouriteNote(id);

                if($event.target.classList.contains('active')) {
                    this.toggleModalMessage('Note has been removed from favourites');
                }
                else {
                    this.toggleModalMessage('Note has been added to favourites');
                }
            }
        }
    }

</script>