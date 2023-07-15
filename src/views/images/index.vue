<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <!-- 搜索栏 -->
      <el-col :span="7">
        <el-input
          placeholder="请输入"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search">搜索</el-button>
      <el-button type="primary" @click="handlePullImage()">拉取镜像</el-button>
    </el-row>
    <!-- 表格栏 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in options"
        :key="index"
        :width="item.width"
      >
        <template #default v-if="item.prop === 'Action'">
          <el-button type="danger" :icon="Delete"></el-button>
          <!-- <el-button type="danger" :icon="Delete"></el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Delete } from '@element-plus/icons-vue'
import { listImages, pullImage } from '@/api/image'
import { options } from './options'

const queryForm = ref({})

const tableData = ref([])
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   }

const initListImages = async () => {
  const res = await listImages(queryForm.value)
  console.log(res.list)
  tableData.value = res.list
}
initListImages()

const handlePullImage = () => {}
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
