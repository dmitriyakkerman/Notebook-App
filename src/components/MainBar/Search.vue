<template>
    <div class="form-group">
        <label for="search-category">Search category</label>
        <input id="search-category"
               type="text"
               class="main-bar__search"
               :value="categoryToSearch"
               @keydown="$emit('initLoading')"
               @input="$emit('debounce', $event.target.value)"
               @blur="$emit('removeLoading')">
        <div class="search-loader" v-if="loading">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            loading: Boolean,
            categoryToSearch: String
        }
    }

</script>