import { createStore } from 'vuex';

// 创建一个新的 store 实例
export const store = createStore({
    state() {
        return {
            isLogin:false, // 用户当前是否登录
            flag: true, // 当前显示页面是否为首页
            city: "上海", // 当前显示的城市信息
            recentCities: [], // 存储最近选择的城市
            hotCity: ["北京", "上海", "广州", "深圳", "天津", "西安", "重庆", "杭州", "南京", "武汉", "成都"], // 热门城市
        }
    },
    mutations: {
        // 
        changeCity(state, payload) {
            // 改变 city 的值
            state.city = payload;
            // 最近选择城市列表
            if (state.recentCities.length >= 11) state.recentCities.pop();
            if (state.recentCities.indexOf(payload) !== -1) {
                let index = state.recentCities.indexOf(payload);
                state.recentCities.splice(index, 1);
            }
            state.recentCities.unshift(payload);
            state.flag = true;
        }

    }
})

