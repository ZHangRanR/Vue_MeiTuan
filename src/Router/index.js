import { createRouter, createWebHistory } from "vue-router";
import defaultPage from "@/layout/DefaultPage";
import loginPage from "@/layout/loginPage";
import registerPage from "@/layout/registerPage";
import homePage from "@/components/main/index";
import selectCity from "@/components/selectCity/selectCity";

export default createRouter({
    history: createWebHistory(),
    routes: [
        // 美团首页页面
        {
            name: "/",
            path: '/',
            component: defaultPage,
            children: [

                // 美团页面-业务展示
                {
                    name: "/home",
                    path: "/home",
                    alias: "/",
                    component: homePage
                },
                
                // 美团页面-城市选择
                {
                    name: "/cityList",
                    path: "/cityList",
                    component: selectCity
                }
            ]
        },

        // 登录界面
        {
            name:"/login",
            path:"/login",
            component:loginPage
        },
        {
            name:"/register",
            path:"/register",
            component:registerPage
        }
    ]
})