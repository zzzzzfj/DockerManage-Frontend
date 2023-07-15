<template>
  <el-dialog
    :model-value="dialogVisible"
    title="创建容器"
    width="30%"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="70px">
      <el-form-item label="镜像名">
        <el-input v-model="form.ImageName" placeholder="e.g. alpine" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleCreate"> 创建 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { createContainer } from '@/api/container'
import { ElMessage } from 'element-plus'

const emits = defineEmits(['update:modelValue'])

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleCreate = async () => {
  console.log(form.value.ImageName)
  await createContainer(form.value)
  ElMessage({
    message: 'Create Container: success',
    type: 'success'
  })
  handleClose()
}

const formRef = ref(null)

const form = ref({
  ImageName: ''
})
</script>

<style lang="scss" scoped></style>
