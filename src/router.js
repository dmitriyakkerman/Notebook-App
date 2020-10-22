import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/Notes.vue')
        },
        {
            path: '/note/:id',
            component: () => import('./views/Note.vue')
        },
        {
            path: '/trash',
            component: () => import('./views/Trash.vue')
        },

    ]
})