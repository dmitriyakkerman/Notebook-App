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
            path: '/categories',
            component: () => import('./views/Categories.vue')
        },
        {
            path: '/notes/:id',
            component: () => import('./views/Note.vue')
        },
        {
            path: '/categories/:id',
            component: () => import('./views/Category.vue')
        },
        {
            path: '/favourite',
            component: () => import('./views/Favourite.vue')
        },
        {
            path: '/trash',
            component: () => import('./views/Trash.vue')
        },

    ]
})