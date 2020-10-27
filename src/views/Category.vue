<template>
    <div class="category">
        <h1 class="title">{{ category.title }}</h1>
        <Category @removeCategory="removeCategory" :category="category"></Category>
    </div>
</template>

<script>

    import Category from "../components/Category/Category";

    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
          Category
        },
        computed: {
            ...mapGetters(['categoryBy']),
            category() {
                return this.categoryBy(+this.$route.params.id)
            }
        },
        methods: {
            ...mapActions(['deleteCategory']),
            ...mapMutations(['removeNotesByCategory']),
            removeCategory(id) {
                this.$router.push('/categories');
                this.deleteCategory(id);
                this.removeNotesByCategory(id);
            }
        }
    }

</script>