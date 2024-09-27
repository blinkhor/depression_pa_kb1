// @ts-nocheck
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DepressionPA from '../views/Depression-PA.vue'
import DepressionPA1 from '../views/Depression-PA1.vue'
import Database from '../views/Database.vue'
import PE from '../views/PE.vue'
import Help from '../views/Help.vue'
import Home from '../views/Home.vue'
import Statistics from '../views/Statistics.vue'
import Feedback from '../views/Feedback.vue'
import Data_Di from '../views/Data_Di.vue';
import Data_Bi from '../views/Data_Bi.vue';
import Data_Era from '../views/Data_Era.vue';
import Data_Pfa from '../views/Data_Pfa.vue';
import Data_Paip from '../views/Data_Paip.vue';
import Data_Aee from '../views/Data_Aee.vue';
import Data_Paee from '../views/Data_Paee.vue';
import Data_Detail from '../views/Data_Detail.vue';
import PE_detail from '../views/PE_detail.vue';


// 创建一个空数组，用于存储路由配置信息
const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home }, // 定义路径为 '/' 的路由，对应的组件是 Home.vue
    { path: '/depressionpa', component: DepressionPA },
    { path: '/depressionpa1', component: DepressionPA1 },// 定义路径为 '/browse' 的路由，对应的组件是 Browse.vue
    { path: '/database', component: Database }, // 定义路径为 '/contactus' 的路由，对应的组件是 Contact-us.vue

    { path: '/pe', component: PE }, // 定义路径为 '/download' 的路由，对应的组件是 Download.vue
    { path: '/help', component: Help }, // 定义路径为 '/visualization' 的路由，对应的组件是 Visualization.vue
    { path: '/statistics', component: Statistics },
    { path: '/feedback', component: Feedback },
    { path: '/data_di', component: Data_Di },
    { path: '/data_bi', component: Data_Bi },
    { path: '/data_era', component: Data_Era },
    { path: '/data_pfa', component: Data_Pfa },
    { path: '/data_paip', component: Data_Paip },
    { path: '/data_aee', component: Data_Aee },
    { path: '/data_paee', component: Data_Paee },
    { 
        path: '/data_detail', 
        name: 'Detail',
        component: Data_Detail,
        props: route => ({ row: route.query.row ? JSON.parse(route.query.row as string) : null })
    },
    { 
        path: '/PE_detail', // 新页面的路径
        name: 'PE_detail', // 路由名称
        component: PE_detail, // 关联的新页面组件
        props: route => ({ pmids: route.query.pmids ? route.query.pmids.split(',') : [] }) // 从查询参数获取 PMIDs
    },
      
]   

// 创建路由实例
const router = createRouter({
    history: createWebHistory('/depression_pa_kb/'), // 使用 HTML5 History 模式
    routes, // 路由配置信息
})

export default router // 导出路由实例
