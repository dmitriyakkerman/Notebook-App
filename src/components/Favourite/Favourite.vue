<template>
    <div class="favourite">
        <div v-if="favourite.length">
            <div class="favourite-bar">
                <select class="favourite-bar__filter" v-model="selectedCategory">
                    <option value="all">All</option>
                    <option v-for="note in favourite" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
                </select>
            </div>
            <div class="favourite__container">
                <div class="favourite-item" v-for="note in filteredNotes(favourite)" :key="note.id">
                    <div class="favourite-item__title">{{ note.title }}</div>
                    <div class="favourite-item__nav">
                        <router-link :to="'/categories/' + note.category.id" class="favourite-item__category" title="Note category">{{ note.category.title }}</router-link>
                        <div class="favourite-item__buttons">
                            <button class="favourite-item__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                            <router-link :to="'/notes/' + note.id" class="favourite-item__look" title="View note"></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="favourite__no-notes">You don't have any favourite note so far! <span class="warning"></span></div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        props: {
            favourite: Array
        },
        data() {
            return {
                selectedCategory: 'all'
            }
        },
        methods: {
            ...mapActions(['updateFavouriteNote']),
            filteredNotes(notes) {
                let that = this;
                let filteredNotes;

                filteredNotes = notes.filter(function (note) {
                    if(that.selectedCategory === 'all') {
                        return note
                    }
                    else {
                        return note.category.title === that.selectedCategory
                    }
                })

                return filteredNotes;
            },
            makeFavourite(id) {
                this.updateFavouriteNote(id)
            }
        }
    }

</script>