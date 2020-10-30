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
            <div class="favourite__container">
                <div class="favourite-item" v-for="note in filteredNotes(favourite)" :key="note.id">
                    <div class="favourite-item__title">{{ note.title }}</div>
                    <div class="favourite-item__status" :class="{active: note.deadline && new Date(note.deadline) > Date.now(), expired: note.deadline && new Date(note.deadline) < Date.now()}" :title="note.deadline ? (new Date(note.deadline) > Date.now() ? 'active' : 'outdated') : ''"></div>
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