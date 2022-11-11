import { createWebHistory, createRouter } from "vue-router";
import TimeLine from "@/views/TimeLine";
import NewPost from "@/views/NewPost";
import UserLogin from  "@/views/UserLogin";
import TestIt from "@/views/TestIt";
import UserLogout from "@/views/UserLogout";
import UserRegister from "@/views/UserRegister";
import store from "@/store/store";

const routes = [
    {
        path: "/",
        name: "Home",
        redirect: { name: 'TimeLine' },
    },
    {
        path: "/TimeLine",
        name: "TimeLine",
        component: TimeLine,
    },
    {
        path: "/NewPost",
        name: "NewPost",
        component: NewPost,
        meta: {
            requireAuth: true, // 表示进入这个路由是需要登录的
            roles: ['admin', 'manager', 'user'],
        },
    },
    {
        path: "/UserLogin",
        name: "UserLogin",
        component: UserLogin,
    },
    {
        path: "/Register",
        name: "UserRegister",
        component: UserRegister,
    },
    {
        path: "/UserLogout",
        name: "UserLogout",
        component: UserLogout,
    },
    {
        path: "/TestIt",
        name: "TestIt",
        component: TestIt,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function isAuthenticated() {
    return store.state.user != null;
}

function hasPermission(route) {
    if(route.meta.requireAuth !== true)
        return true;
    else {
        if(!isAuthenticated())
            return false;
        let user = store.state.user;
        for(let role of route.meta.roles) {
            if(user.roleName === role)
                return true;
        }
        return false;
    }
}

router.beforeEach((to, from, next) => {
    if(!hasPermission(to))
        next({ name: 'UserLogin' });
    else
        next();
})
export default router;