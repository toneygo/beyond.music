import Vue from 'vue'
import Router from 'vue-router'
import videobox from './components/video(1).vue'
import home from './components/home.vue'
import login from './components/Login.vue'
import jump from './components/Jump.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/jump',component: jump}, 
        {path: '/login',component: login}, 
        {path: '/home',component: home},
            // name: 'home',
            // children: [{
            //         path: "/find",
            //         component: find,

            //     }, {
            //           path: '/friend',
            //         component: friend,
            //         name: "friend",
            //     },
            //     {
            //         path: '/my',
            //         component: myself,
            //     }
            // ],
            // redirect: '/find'
        
        {path: '/',redirect: '/login'},
        {path: '/video',component: videobox }

    ]
});