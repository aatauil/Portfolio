import Vue from 'vue'
import Router from 'vue-router'
import MyHome from "./routes/MyHome.vue"

Vue.use(Router)

export default new Router({
    linkExactActiveClass: "active-link",
    mode: "history",
    routes:[
        {
            path: "/",
            name: "Home",
            component: MyHome
        },
        {
            path: "/MyWork",
            name: "MyWork",
            component: () => import(/* webpackChunkName: "MyWork" */ "./routes/MyWork.vue"),
        },
        {
            path: "/MySkills",
            name: "MySkills",
            component: () => import(/* webpackChunkName: "MyWork" */ "./routes/MySkills.vue"),
            children: [
                {
                path: '/MySkills/',
                component: () => import(/* webpackChunkName: "FrontEnd" */ "./components/skills/FrontEnd.vue")
                },
                {
                    path: '/MySkills/BackEnd',
                    component: () => import(/* webpackChunkName: "BackEnd" */ "./components/skills/BackEnd.vue")
                },
                {
                    path: '/MySkills/Design',
                    component: () => import(/* webpackChunkName: "Design" */ "./components/skills/Design.vue")
                },
                {
                    path: '/MySkills/Cms',
                    component: () => import(/* webpackChunkName: "Cms" */ "./components/skills/Cms.vue")
                },
                {
                    path: 'Other',
                    component: () => import(/* webpackChunkName: "Other" */ "./components/skills/Other.vue")
                }
                
            ]   
        },
        {
        path: "/*",
        name: "404",
        component: () => import(/* webpackChunkName: "404" */ "./routes/404.vue")
        },
    ]
})