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
            component: () => import(/* webpackChunkName: "MyWork" */ "./routes/MyWork.vue")
        },
        {
            path: "/MySkills",
            name: "MySkills",
            component: () => import(/* webpackChunkName: "MyWork" */ "./routes/MyWork.vue")
        },
        {
        path: "/*",
        name: "404",
        component: () => import(/* webpackChunkName: "404" */ "./routes/404.vue")
        },
    ]
})