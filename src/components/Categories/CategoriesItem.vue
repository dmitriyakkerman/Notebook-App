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

    import {mapActions, mapMutations} from 'vuex'

    export default {
        props: {
            category: Object,
            isTrash: Boolean
        },
        methods: {
            ...mapActions(['restoreNotesByCategory', 'moveCategoryFromTrash', 'deleteCategory', 'moveCategoryToTrash', 'removeNotesByCategory']),
            ...mapMutations(['toggleModal', 'setModalMessage']),
            removeCategory(id) {
                this.moveCategoryToTrash(id);
                this.deleteCategory(id);
                this.removeNotesByCategory(id);
                this.toggleModal();
                this.setModalMessage('Category has been moved to trash');
            },
            restoreCategory(category) {
                this.restoreNotesByCategory(category);
                this.moveCategoryFromTrash(category);
                this.toggleModal();
                this.setModalMessage('Category has been restored from trash');
            }
        }
    }

</script>