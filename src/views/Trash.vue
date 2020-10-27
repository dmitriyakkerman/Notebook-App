<template>
    <div class="trash">
        <h1 class="title">Trash</h1>
        <Trash :notesTrash="notesTrash" :categoriesTrash="categoriesTrash"></Trash>
    </div>
</template>

<script>

    import Trash from "../components/Trash/Trash";
    import {mapGetters} from 'vuex'

    export default {
        components: {
          Trash
        },
        computed: {
            ...mapGetters(['notesTrash', 'categoriesTrash'])
        }
    }

</script>