import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/About.vue')
        },
        {
            path: '/notes',
            component: () => import('./views/Notes.vue')
        },
        {
            path: '/notes/:id',
            component: () => import('./views/Note.vue')
        },
        {
            path: '/favourites',
            component: () => import('./views/Favourites.vue')
        },
        {
            path: '/trash',
            component: () => import('./views/Trash.vue')
        },

    ]
})