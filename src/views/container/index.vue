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
      <el-button type="primary" @click="handleDialogVisible"
        >创建容器</el-button
      >
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
        <template v-slot="{ row }" v-if="item.prop === 'State'">
          <el-switch v-model="row.State" @change="changeState(row)" />
        </template>
        <template #default="{ row }" v-else-if="item.prop === 'Action'">
          <el-button type="danger" @click="DelItem(row)">删除</el-button>
          <el-button type="success" @click="AskItem(row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <Dialog v-model="dialogVisible" />
</template>

<script setup>
import { handleError, ref } from 'vue'
import { Search, Delete } from '@element-plus/icons-vue'
import {
  listContainers,
  startContainer,
  stopContainer,
  deleteContainer,
  askContainer
} from '@/api/container'
import { options } from './options'
import { ElMessage } from 'element-plus'
import Dialog from './components/dialog.vue'

const queryForm = ref({})

const tableData = ref([])

const dialogVisible = ref(false)

const initListContainer = async () => {
  const res = await listContainers()
  for (var item of res) {
    if (item.State === 'running') {
      item.State = true
    } else {
      item.State = false
    }
  }
  console.log(res)
  tableData.value = res
}
initListContainer()

const changeState = async (info) => {
  const containerInfo = ref({
    ContainerId: info.Id
  })
  console.log(info.State)
  if (info.State === false) {
    // change to false
    await stopContainer(containerInfo.value)
    ElMessage({
      message: 'Stop Container: success',
      type: 'success'
    })
  } else {
    await startContainer(containerInfo.value)
    ElMessage({
      message: 'Start Container: success',
      type: 'success'
    })
  }
}

const handleDialogVisible = () => {
  dialogVisible.value = true
}

const DelItem = async (info) => {
  const containerInfo = ref({
    ContainerId: info.Id
  })
  if (info.State === true) {
    alert('无法删除运行中的容器')
  } else {
    await deleteContainer(containerInfo.value)
    ElMessage({
      message: 'Delete Container: success',
      type: 'success'
    })
  }
}
const AskItem = async (info) => {
  const containerInfo = ref({
    ContainerId: info.Id
  })
  const res = await askContainer(containerInfo.value)
  console.log(res)
  alert(JSON.stringify(res))
}
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
