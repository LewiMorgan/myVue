<template>
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'atguigu',
            address:'beijing'
        }
    },
}
</script>

<style>
    .demo{
        background: gray;
    }
</style>