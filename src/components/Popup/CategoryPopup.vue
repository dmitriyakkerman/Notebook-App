<template>
    <div class="category-popup">
        <h3 class="popup__title">Category form</h3>
        <form action="" class="form" @submit.prevent="addCategory">
            <div class="form-group">
                <div class="form__title">
                    <label for="category-title">Category title</label>
                    <input type="text" id="category-title" class="form__title" v-model="category.title">
                </div>
            </div>
            <input type="submit" class="form__submit" value="Submit">
        </form>
    </div>
</template>

<script>

    import {mapActions} from 'vuex'

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
            addCategory() {
                let that = this;
                if(this.category.title.trim()) {
                    let newCategory = {
                        id: Date.now(),
                        title: that.category.title
                    };

                    that.postCategory(newCategory);
                    that.category.title = '';
                    that.$router.push('/categories/' + newCategory.id);
                }
            }
        }
    }

</script>