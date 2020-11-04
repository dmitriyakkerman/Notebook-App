<template>
    <div>
        <div class="categories-item">
            <div class="categories-item__title">{{ category.title }}</div>
            <div class="categories-item__nav">
                <div class="categories-item__buttons">
                    <router-link v-if="!isTrash" :to="'/categories/' + category.id" class="categories-item__look" title="View note"></router-link>
                    <button v-if="!isTrash" class="categories-item__remove" title="Remove note" @click.prevent="removeCategory(category.id)"></button>
                    <button v-if="isTrash" class="categories-item__restore" title="Restore note" @click="restoreCategory(category)"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {
        props: {
            category: Object,
            isTrash: Boolean
        },
        methods: {
            ...mapActions(['restoreNotesByCategory', 'moveCategoryFromTrash', 'deleteCategory', 'moveCategoryToTrash', 'removeNotesByCategory']),
            removeCategory(id) {
                this.moveCategoryToTrash(id);
                this.deleteCategory(id);
                this.removeNotesByCategory(id);
            },
            restoreCategory(category) {
                this.restoreNotesByCategory(category);
                this.moveCategoryFromTrash(category);
            }
        }
    }

</script>