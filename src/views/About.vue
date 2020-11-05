<template>
    <div class="about">
        <Title>About</Title>
        <div class="about__text">
            <div>
                Open-source notes app. Check out the project on <a href="https://github.com/dmitriyakkerman/Notebook-App">https://github.com/dmitriyakkerman/Notebook-App</a>
            </div>
            <hr>
            <h2>Pages:</h2>
            <ul>
                <li>About</li>
                <li>Notes</li>
                <li>Categories</li>
                <li>Favourite</li>
                <li>Trash</li>
            </ul>
            <h2>Features</h2>
            <hr>
            <h3>Notes</h3>
            <ul>
                <li>Adding/Deleting</li>
                <li>Editing</li>
                <li>Filtering by category</li>
                <li>Filtering by date status</li>
                <li>Searching by letters combination</li>
                <li>Adding/deleting to/from favourite</li>
            </ul>
            <h3>Categories</h3>
            <ul>
                <li>Adding/Deleting</li>
                <li>Editing</li>
                <li>Searching by letters combination</li>
            </ul>
            <h3>Favourite</h3>
            <ul>
                <li>Filtering notes by category</li>
                <li>Filtering notes by date status</li>
                <li>Removing notes and categories from favourite</li>
            </ul>
            <h3>Trash</h3>
            <ul>
                <li>Filtering notes by category</li>
                <li>Filtering notes by date status</li>
                <li>Restoring notes and categories</li>
                <li>Cleaning trash box</li>
            </ul>
            <hr>
            <h2>Other</h2>
            <ul>
                <li>
                    <a href="https://vuejs.org/">Vue.js</a> |
                    <a href="https://vuex.vuejs.org/ru/guide/">Vuex</a> |
                    <a href="https://router.vuejs.org/ru/">Vue Router</a>
                </li>
                <li><a href="https://marked.js.org/demo/">Marked</a> markdown support</li>
                <li>Light/dark theme</li>
                <li><a href="https://github.com/dmitriyakkerman/arm-ui">Arm-UI</a> component library</li>
                <li>Local storage usage</li>
                <li>Responsive</li>
            </ul>
        </div>
    </div>
</template>

<script>

    import Title from "../components/Slots/Title";

    export default {
        components: {
            Title
        }
    }

</script>