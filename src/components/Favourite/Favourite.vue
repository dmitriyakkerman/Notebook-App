<template>
    <div>
        <div v-if="favourite.length">
            <div class="main-bar">
                <div class="main-bar__filters">
                    <label for="select-category">Select category</label>
                    <select id="select-category" class="main-bar__select-category" v-model="selectedCategory">
                        <option value="all">All</option>
                        <option v-for="note in favourite" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
                    </select>
                    <label for="select-status">Select status</label>
                    <select id="select-status" class="main-bar__select-status" v-model="selectedStatus">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="expired">Expired</option>
                    </select>
                </div>
            </div>
            <div class="notes__container">
                <div class="notes-item" v-for="note in filteredNotes(favourite)" :key="note.id">
                    <div class="notes-item__title">{{ note.title }}</div>
                    <div class="notes-item__status"
                         :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}"
                         :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''">
                    </div>
                    <div class="notes-item__nav">
                        <router-link :to="'/categories/' + note.category.id" class="notes-item__category" title="Note category">{{ note.category.title }}</router-link>
                        <div class="notes-item__buttons">
                            <button class="notes-item__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                            <router-link :to="'/notes/' + note.id" class="notes-item__look" title="View note"></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <no-results v-else>You don't have any favourite note so far!</no-results>
    </div>
</template>

<script>

    import NoResults from "../Slots/NoResults";
    import {mapActions} from 'vuex';

    export default {
        components: {
            NoResults
        },
        props: {
            favourite: Array
        },
        data() {
            return {
                selectedCategory: 'all',
                selectedStatus: 'all',
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

                return filteredNotes.filter(function (note) {
                    let filtered;

                    if(that.selectedStatus === 'all') {
                        filtered = filteredNotes
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
            },
            makeFavourite(id) {
                this.updateFavouriteNote(id)
            }
        }
    }

</script>