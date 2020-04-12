import Vue from 'vue'
import VueStore from 'vuex'
import axios from 'axios'

Vue.use(VueStore)

export default new VueStore.Store({
    state : {
        table :[],
        naruto : {}
    },
    getters : {
        getTable : state => state.table,
        getNaruto (state){
            // nhiệm vụ của getter là lấy lên ,component mô dùng thì lấy
            return state.naruto
        }
    },
    mutations :{
        FETCH_DATA : function (state, data){
            // mutation gán lại cho state
            // vậy là điện thoại đã có data rồi
            state.table = data
        },
        REMOVE_DATA: function (state, data) {
            // xóa dữ liệu tại local
            // dùng vòng lặp for để nó chạy 
            // tìm vị trí id của phần tử tại mảng  trùng với id của data trả về
            for (let i=0 ;i < state.table.length;i++) {
                if (data.id === state.table[i].id) {
                    state.table.splice(i,1)
                }
            }
        },
        ADD_DATA: function (state,data){
            // tại đây muation sẽ giải quyết với state
            // nó sẽ làm gì đó để hoàn thành state
            // ở getters
            state.table.push(data)
        },
        SUA_DATA: function (state,data){
            for (let i=0 ;i < state.table.length;i++) {
                if (data.id === state.table[i].id) {
                    // hàm splice ni nó , cái thứ 3  là thêm
                    // hàm slice nó xóa thôi chứ k thêm
                    state.table.splice(i,1,data)
                }
            }
        }
    },
    actions : {
        FetchData :function(context) {
            // hành động lấy data về
            axios({
                url :'https://5da6ea4a127ab80014c1da2d.mockapi.io/todolist',
                method : 'GET',
                data :null
            }).then(data=>{
                // lấy data về xong commit qua mutations
                context.commit('FETCH_DATA',data.data)
            })
        },
        Remove : function (context,id) {
            // hành động xóa data
            axios({
                url : `https://5da6ea4a127ab80014c1da2d.mockapi.io/todolist/${id}`,
                method :'DELETE',
                data: null
            }).then(data=>{
                context.commit('REMOVE_DATA',data.data)
            })
        },
        Add : function (context, data) {
            // dungf axios dạng post ,với data 
            axios({
                url : `https://5da6ea4a127ab80014c1da2d.mockapi.io/todolist/`,
                method :'POST',
                data: {
                    FistName: data.firstname,
                    LastName: data.lastname,
                    'E-Mail': data.email,
                    Code : data.code,
                }
            }).then(data=>{
                // sau khi posst data nó trả về 
                // trả về data đã post
                // để t console.log() data, vì răn mà t phải data.data
                // xong xuôi t commit nó lên mutation giải quyết,
                // nhiệm vụ của action là hết
                context.commit('ADD_DATA',data.data)
            })
        },
        Sua : function ({commit}, data) {
            axios({
                url : `https://5da6ea4a127ab80014c1da2d.mockapi.io/todolist/${data.id}`,
                method :'PUT',
                data: {
                    FistName: data.firstname,
                    LastName: data.lastname,
                    'E-Mail': data.email,
                    Code : data.code,
                }
            }).then(data=>{
                // sau khi posst data nó trả về 
                // trả về data đã post
                // để t console.log() data, vì răn mà t phải data.data
                // xong xuôi t commit nó lên mutation giải quyết,
                // nhiệm vụ của action là hết
                commit('SUA_DATA',data.data)
            })

        }
    }
})