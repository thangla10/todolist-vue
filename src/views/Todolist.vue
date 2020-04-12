<template>
    <div>
        <Table @naruto="nhanvao" :data="table"></Table>
        <div>{{hello}}</div>
    </div>
</template>
<script>
import Table from './../components/table'
import { mapActions , mapGetters } from 'vuex'

export default {
    data (){
        return {
            hello : 'hello word',
            table : [
            ],
        }
    },
    computed : {
        ...mapGetters(['getTable'])
    },
    methods : {
        nhanvao (value) {
            console.log(value)
        },
        ...mapActions(['FetchData','lamgido'])
    },
    components: {
        Table
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
        this.lamgido()
    }
}
</script>
<style lang="scss" scoped>
     
</style>