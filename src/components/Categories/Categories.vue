<template>
    <div class="categories">
        <div class="categories-bar">
            <input type="text" class="categories-bar__search" placeholder="Search category" v-model="categoryToSearch">
            <button class="categories-bar__btn j-popup">
                <i></i>
            </button>
        </div>
        <div class="categories__container">
            <div v-if="filteredCategories.length">
                <div class="categories-item" v-for="category in filteredCategories" :key="category.id">
                    <div class="categories-item__title">{{ category.title }}</div>
                    <div class="categories-item__nav">
                        <div class="categories-item__buttons">
                            <router-link :to="'/categories/' + category.id" class="categories-item__look" title="View note"></router-link>
                            <button class="categories-item__remove" title="Remove note" @click.prevent="removeCategory(category.id)"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="categories__no-categories">There is any category. Create new one! <span class="warning"></span></div>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                categoryToSearch: ''
            }
        },
        computed: {
            ...mapGetters(['categories']),
            filteredCategories() {
                let that = this;
                let filtered;

                filtered = this.categories.filter(function (category) {
                    return category.title.includes(that.categoryToSearch)
                });

                return filtered
            }
        },
        methods: {
            ...mapActions(['deleteCategory', 'moveCategoryToTrash', 'moveNoteToTrash']),
            ...mapMutations(['removeNotesByCategory']),
            removeCategory(id) {
                this.moveCategoryToTrash(id);
                this.deleteCategory(id);
                this.removeNotesByCategory(id);
            }
        }
    }

</script>