<template>
    <div class="form-group">
        <label for="select-category">Select category</label>
        <select id="select-category" class="main-bar__select-category" :value="selected" @change="$emit('categoryValue', $event.target.value)">
            <option value="all">All</option>
            <option v-for="note in notes" :key="note.id" :value="note.category.title">{{ note.category.title }}</option>
        </select>
    </div>
</template>

<script>

    export default {
        props: {
            selected: String,
            notes: Array
        }
    }

</script>