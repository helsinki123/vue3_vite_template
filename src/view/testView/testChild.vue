<template>
  <div class="aaa">
    <div class="bbb">bbb</div>
    <el-upload v-model:file-list="fileList" class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed">
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500KB.
            </div>
        </template>
    </el-upload>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  </div>
    <!-- <div class="child">
      sass-loader@7.3.1，node-sass@4.14.1
      {{state.name}}
      {{parentProp.age}}
      <el-button @click="testEmit">testEmit</el-button>
    </div> -->
    
</template>
  
  <!-- <script>
  import { reactive } from 'vue'
  export default {
    props: ['parentProp'],
    setup(props,context){
      const state = reactive({name:"child"});
      console.log(props.parentProp);
      function testEmit(){
        context.emit('childEmit',"childEmitProp");
      }
    //   debugger
      return {
        state,
        testEmit
      }
    }
  };
  </script> -->
<script lang="ts" setup>

import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const fileList = ref<UploadUserFile[]>([
    {
        name: 'element-plus-logo.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
    {
        name: 'element-plus-logo2.svg',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
</script>

<style lang="scss">
.aaa{
  color:red;
}
</style>