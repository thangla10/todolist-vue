<template>
    <div>
        <label>Thêm vầo</label>
        <div style="display:flex;flex-flow:row nowrap">
            <div>
                <label>Fist name</label>
                <input v-model="input.firstname" type="text" />
            </div>
            <div>
                <label>Last name</label>
                <input v-model="input.lastname" type="text" />
            </div>
            <div>
                <label>Email name</label>
                <input v-model="input.email" type="text" />
            </div>
            <div>
                <label>Code name</label>
                <input v-model="input.code" type="text" />
            </div>
            <button @click="onThem" >Thêm</button>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            input : {
                firstname: '',
                lastname :'',
                email :'',
                code: ''
            },
        }
    },
    methods: {
        onThem () {
            // vì là component con, nên t truyền qua cha
            // giá trị là this.input , đặt tên là input
            this.$emit('input',this.input)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>