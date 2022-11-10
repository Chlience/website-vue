import { createWebHistory, createRouter } from "vue-router";
import TimeLine from "@/views/TimeLine";
import AddPost from "@/views/AddPost";
import UserLogin from  "@/views/UserLogin";
import TestIt from "@/views/TestIt";
import UserLogout from "@/views/UserLogout";
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
        path: "/AddPost",
        name: "AddPost",
        component: AddPost,
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

function hasPermission(user, route) {
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
    if((to.name !== 'UserLogin') && !isAuthenticated())
        next({ name: 'UserLogin' });
    else {
        let user = store.state.user;
        console.log(hasPermission(user, to));
        if(!hasPermission(user, to))
            next({ name: 'UserLogin' });
        else
            next();
    }

})
export default router;