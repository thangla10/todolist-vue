import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from './../views/Todolist'
import NotFound from './../views/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
    mode :'history',
    routes : [
        {
            path: '',
            redirect: '/todolist'
        },
        {
            path :'/todolist',
            component : TodoList
        },
        {
            path :'/home',
            component : NotFound
        }
    ]
})