<template>
    <div>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastNmae</th>
                    <th>Email</th>
                    <th>Code</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.FistName }}</td>
                <td>{{ item.LastName }}</td>
                <td>{{ item['E-Mail'] }}</td>
                <td>{{ item.Code }}</td>
                <td>
                    <button @click="onRemove(item.id)">Xóa</button>
                    <button @click="onSua(item)">Sửa</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props : ['data'],
    mounted (){
        
    },
    methods : {
        truyenqua () {
            this.$emit('naruto', 123)
        },
        onRemove (id) {
            this.$emit('ID', id)
        },
        onSua (item) {
            this.$emit('item',item)
        }
    }
}
</script>
<style lang="scss" scoped>
table {
       width: 800px;
       margin: 0 auto;
       border-collapse:  collapse;
       thead {
           tr {
               height : 32px;
               th {
                   
               }
           }
       }
       tbody {
        tr {
            td {

            }
        }
       }
   }  
</style>