<template>
    <div class="modal category-modal">
        <h3 class="modal__title">Category form</h3>
        <form action="" class="form" @submit.prevent="addCategory">
            <div class="form-group">
                <div class="form__title">
                    <label for="category-title">Category title</label>
                    <input type="text" id="category-title" class="form__title" v-model="category.title">
                </div>
            </div>
            <input type="submit" class="form__submit" value="Submit">
            <a href="" class="modal__close" @click.prevent="closeModal"></a>
        </form>
    </div>
</template>

<script>

    import {mapActions, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                category: {
                    title: ''
                }
            }
        },
        methods: {
            ...mapActions(['postCategory']),
            ...mapMutations(['toggleModalMessage', 'closeModalForm']),
            addCategory() {
                let that = this;
                if(this.category.title.trim()) {
                    let newCategory = {
                        id: Date.now(),
                        title: that.category.title
                    };

                    that.postCategory(newCategory);
                    that.toggleModalMessage('Category has been submitted');
                    that.category.title = '';
                    that.closeModal();
                }
            },
            closeModal() {
                this.closeModalForm();
            }
        }
    }

</script>