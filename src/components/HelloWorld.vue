<template>
  <h3>this is home's page</h3>
  <el-button type="danger">test</el-button>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>
<script>
import { reactive } from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'home',
  setup () {
    let tableData = reactive([
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
    ])
    return {
      tableData
    }
  },
  // components: {
  //   HelloWorld
  // }
}
</script>
