<template>
   <div>
       <div class="notes-bar">
           <div class="notes-bar__filters">
               <select class="notes-bar__filter" v-model="selectedCategory">
                   <option value="all">All</option>
                   <option v-for="category in categories" :key="category.id" :value="category.title">{{ category.title }}</option>
               </select>
               <input type="text" class="notes-bar__search" placeholder="Search note" v-model="noteToSearch" @keydown="initLoading" @input="debounce" @blur="loading=false">
               <div class="lds-ripple" v-if="loading"><div></div><div></div></div>
           </div>
           <button class="notes-bar__btn j-popup popup-note" @click="addNote">
               <i></i>
           </button>
       </div>
       <div class="notes__container">
           <div v-if="filteredNotes.length">
               <div class="notes-item" v-for="note in filteredNotes" :key="note.id">
                   <div class="notes-item__title">{{ note.title }}</div>
                   <div class="notes-item__text" v-html="note.text"></div>
                   <div class="notes-item__nav">
                       <router-link :to="'/categories/' + note.category.id" class="notes-item__category" title="Note category">{{ note.category.title }}</router-link>
                       <div class="notes-item__buttons">
                           <button class="notes-item__favourite" :class="{active: note.favourite}" title="Make favourite" @click.prevent="makeFavourite(note.id)"></button>
                           <router-link :to="'/notes/' + note.id" class="notes-item__look" title="View note"></router-link>
                           <button class="notes-item__remove" title="Remove note" @click.prevent="removeNote(note.id)"></button>
                       </div>
                   </div>
               </div>
           </div>
           <div v-else class="notes__no-notes">There is any note. Create new one! <span class="warning"></span></div>
       </div>
   </div>
</template>

<script>

    import _ from 'lodash'
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                noteToSearch: '',
                selectedCategory: 'all',
                loading: false
            }
        },
        computed: {
            ...mapGetters(['notes', 'categories']),
            filteredNotes() {
                let that = this;
                let filteredNotes;

                filteredNotes = this.notes.filter(function (note) {
                    if(note.title.indexOf(that.noteToSearch) !== -1) {
                        return note
                    }
                });

                return filteredNotes.filter(function (note) {
                    if(that.selectedCategory === 'all') {
                        return note
                    }
                    else {
                        return note.category.title === that.selectedCategory
                    }
                })
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
            initLoading() {
                this.loading = true;
            },
            debounce: _.debounce(function () {
                this.loading = false;
            }, 300),
            addNote(e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent(closest);
                }
                window.popup.manualOpen();
            }
        }
    }

</script>