<template>
    <div>
        <AddTodo @input="giatriInput"></AddTodo>
        <Table @item="nhanitemvao" @ID="componentninhanvao" @naruto="nhanvao" :data="table"></Table>
        <div v-if="hienthi">
            <label>Sửa</label>
            <div style="display:flex;flex-flow:column wrap">
                <div>
                    <label>First Name</label>
                    <input v-model="firstname" type="text" >
                </div>
                <div>
                    <label>Last Name</label>
                    <input v-model="lastname" type="text" >
                </div>
                <div>
                    <label>Email</label>
                    <input v-model="email" type="text" >
                </div>
                <div>
                    <label>Code</label>
                    <input v-model="code" type="text" >
                </div>
                <button @click="suaxong">Sửa xong</button>
            </div>
        </div>
    </div>
</template>
<script>
import Table from './../components/table'
import AddTodo from './../components/AddTodo'
import { mapActions , mapGetters } from 'vuex'

export default {
    data (){
        return {
            firstname:'',
            lastname:'',
            email :'',
            code :'',
            id : 0,
            table : [
            ],
            hienthi : false
        }
    },
    computed : {
        ...mapGetters(['getTable'])
    },
    methods : {
        suaxong () {
            this.Sua({
                firstname : this.firstname,
                lastname : this.lastname,
                email : this.email,
                code : this.code,
                id : this.id
            })
        },
        nhanitemvao (item) {
            this.hienthi = true
            this.firstname = item.FistName
            this.lastname = item.LastName 
            this.email = item['E-Mail']
            this.code = item.Code
            this.id = item.id
        },
        giatriInput (giatri) {
            // gia tri nhận ở đây
            // nhận xog t gọi 1 action từ mapActions
            // t truyền giatri vô
            this.Add(giatri)
        },
        componentninhanvao (id) {
            this.Remove(id)
        },
        nhanvao (value) {
            console.log(value)
        },
        ...mapActions(['FetchData','Remove','Add','Sua'])
    },
    components: {
        Table,
        AddTodo
    },
    watch : {
        getTable : function (val){
            // gán dữ liệu zô table
            // sau khi gan lieu , nos truyền qua 
            this.table = val
        }
    },
    created(){
        // hàm này sau khi create xong observa data
        this.FetchData()
    }
}
</script>
<style lang="scss" scoped>
     
</style>