<template>
    <div class="categories">
        <h1 class="title">My categories</h1>
        <div class="main-bar main-bar--categories">
            <form class="main-bar__filters">
                <div class="form-group">
                    <label for="search-category">Search category</label>
                    <input id="search-category" type="text" class="main-bar__search" v-model="categoryToSearch" @keydown="initLoading" @input="debounce" @blur="loading=false">
                    <div class="search-loader" v-if="loading">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </form>
            <button class="main-bar__btn j-popup popup-category" @click="addCategory">
                <i></i>
            </button>
        </div>
        <div class="categories__container">
            <transition-group name="appear">
                <CategoriesItem v-for="category in filteredCategories" :key="category.id" :category="category"></CategoriesItem>
            </transition-group>
            <transition name="no-results">
                <no-results v-if="!filteredCategories.length">There is any category. Create new one!</no-results>
            </transition>
        </div>
    </div>
</template>

<script>

    import CategoriesItem from "../components/Categories/CategoriesItem";
    import NoResults from "../components/Slots/NoResults";
    import _ from 'lodash'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        components: {
            CategoriesItem,
            NoResults
        },
        data() {
            return {
                categoryToSearch: '',
                loading: false
            }
        },
        computed: {
            ...mapGetters(['categories']),
            filteredCategories() {
                let that = this;
                let filtered;

                filtered = this.categories.filter(function (category) {
                    return category.title.toLocaleLowerCase().includes(that.categoryToSearch.toLocaleLowerCase())
                });

                return filtered
            }
        },
        methods: {
            ...mapMutations(['setPopupComponent']),
            initLoading() {
                this.loading = true
            },
            debounce: _.debounce(function () {
                this.loading = false;
            }, 300),
            addCategory(e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent({closest});
                }
                window.popup.manualOpen();
            }
        }
    }

</script>