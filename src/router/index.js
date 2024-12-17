import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'
import Home from '../views/home/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/home',
            component: Home
        }
    ]
});


export default router;