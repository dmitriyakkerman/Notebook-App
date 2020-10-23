<template>
    <div class="categories">
        <div class="categories-menu" :class="{open: categoryForm}">
            <div class="categories__title">Categories</div>
            <a href="" class="categories__add-btn" @click.prevent="toggleCategoryForm"></a>
        </div>
        <form action="" v-if="categoryForm" @submit.prevent="addCategory" class="categories-form">
            <input type="text" v-model="newCategory" placeholder="Category name" class="categories-form__title">
            <input type="submit" value="" class="categories-form__submit">
        </form>
        <ul class="categories-list">
            <router-link v-for="category in categories" :key="category.id" tag="li" :to="category.url" class="categories-list__item" active-class="active">
                <a href="" class="categories-list__link">{{category.title}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                newCategory: '',
                categoryForm: false
            }
        },
        computed: {
            ...mapGetters(['categories'])
        },
        methods: {
            ...mapActions(['postCategory']),
            toggleCategoryForm() {
                this.categoryForm = !this.categoryForm;
            },
            addCategory(e) {
                e.preventDefault()

                let that = this;

                if(this.newCategory.trim()) {
                    let newCategory = {
                        id: Date.now(),
                        title: that.newCategory,
                        url: '/'
                    }

                    that.postCategory(newCategory);

                    this.newCategory = '';
                    this.categoryForm = false;
                }
            }
        }
    }

</script>