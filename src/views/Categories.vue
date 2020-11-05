<template>
    <div class="categories">
        <h1 class="title">Categories</h1>
        <div class="main-bar main-bar--categories">
            <form class="main-bar__filters">
                <Search :categoryToSearch="categoryToSearch" :loading="loading" @initLoading="initLoading" @removeLoading="removeLoading" @debounce="debounce"></Search>
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
    import Search from "../components/MainBar/Search";
    import _ from 'lodash'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        components: {
            CategoriesItem,
            NoResults,
            Search
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
                this.loading = true;
            },
            removeLoading() {
                this.loading = false;
            },
            debounce: _.debounce(function (value) {
                this.categoryToSearch = value;
                this.removeLoading();
            }, 300),
            addCategory(e) {
                let closest = e.target.closest('.j-popup');
                if(closest) {
                    this.setPopupComponent(closest);
                }
                window.popup.manualOpen();
            }
        }
    }

</script>