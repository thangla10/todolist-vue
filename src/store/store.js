import Vue from 'vue'
import VueStore from 'vuex'
import axios from 'axios'

Vue.use(VueStore)

export default new VueStore.Store({
    state : {
        table :[]
    },
    getters : {
        getTable : state => state.table
    },
    mutations :{
        FETCH_DATA : function (state, data){
            // mutation gán lại cho state
            // vậy là điện thoại đã có data rồi
            state.table = data
        } 
    },
    actions : {
        FetchData :function(context) {
            console.log(context)
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
    }
})