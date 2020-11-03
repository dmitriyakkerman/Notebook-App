<template>
    <ul class="main-nav">
        <router-link
                v-for="link in links"
                :key="link.url"
                :tag="link.tag"
                :to="link.url"
                active-class="active"
                :exact="link.exact"
                class="main-nav__item"
                @click.native="$emit('closeSidebar')">
            <a href="" class="main-nav__link">{{ link.title }}</a>
        </router-link>
    </ul>

</template>

<script>

    export default {
        data() {
            return {
                links: [
                    {
                        tag: 'li', url: '/', title: 'About', exact: true
                    },
                    {
                        tag: 'li', url: '/notes', title: 'Notes'
                    },
                    {
                        tag: 'li', url: '/categories', title: 'Categories'
                    },
                    {
                        tag: 'li', url: '/favourite', title: 'Favourite'
                    },
                    {
                        tag: 'li', url: '/trash', title: 'Trash'
                    }
                ]
            }
        },
    }

</script>