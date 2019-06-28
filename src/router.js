import Vue from 'vue'
import Router from 'vue-router'
import videobox from './components/video(1).vue'
import friend from './components/home/friends.vue'
import find from './components/home/find.vue'
import myself from './components/home/MySelf.vue'
import home from './components/home.vue'
import login from './components/Login.vue'
import jump from './components/Jump.vue'
import PlayList from './components/PlayList.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/jump',
            component: jump
        }, {
            path: '/login',
            component: login
        }, {
            path: '/home',
            component: home,
            name: 'home',
            children: [{
                    path: "/find",
                    component: find,

                }, {
                    path: '/friend',
                    component: friend,
                    name: "friend",
                },
                {
                    path: '/my',
                    component: myself,
                }
            ],
            redirect: '/find'
        },
        // {
        //     path: '/find',
        //     component: find,
        //     name: "find"
        // },
        // {
        //     path: '/friend',
        //     component: friend,
        //     name: "friend",
        // },
        // {
        //     path: '/my',
        //     component: myself,
        // },
        // 跳转
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/video',
            name:"video",
            component: videobox
        },
        {path:'/PlayList',name:"PlayList",component:PlayList}

    ]
});