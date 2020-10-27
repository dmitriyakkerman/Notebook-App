<template>
    <div class="note__container">
        <div class="note-bar">
            <div class="note__category">{{ note.category.title }}</div>
            <div class="note-nav">
                <button class="note__edit" title="Edit note"></button>
                <button class="note__remove" title="Remove Note" @click="$emit('removeNote', note.id)"></button>
            </div>
        </div>
        <div class="note__text" v-html="note.text"></div>
    </div>
</template>

<script>

    export default {
        props: {
            note: Object
        }

    }

</script>