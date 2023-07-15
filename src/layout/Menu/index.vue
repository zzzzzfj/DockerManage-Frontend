<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#1f2d3e"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
  >
    <el-menu-item
      :index="'/' + item.path"
      v-for="(item, index) in menusList"
      :key="item.id"
      @click="savePath(item.path)"
    >
      <el-icon>
        <component :is="iconList[index]"> </component>
      </el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from 'vue'
// import variables from '@/styles/variables.scss'

const iconList = ref([
  // 图标问题,先不管
  'user',
  'setting',
  'shop',
  'tickets',
  'pie-chart',
  'user'
])
const defaultActive = ref(sessionStorage.getItem('path') || '/system')
const menusList = ref([])
const savePath = (path) => {
  sessionStorage.setItem('path', `${path}`)
}
const initMenusList = async () => {
  menusList.value = [
    {
      name: '系统信息',
      id: '1',
      path: 'system'
    },
    {
      name: '镜像管理',
      id: '2',
      path: 'images'
    },
    {
      name: '容器管理',
      id: '3',
      path: 'container'
    },
    {
      name: '存储管理',
      id: '4',
      path: 'storage'
    },
    {
      name: '网络管理',
      id: '5',
      path: 'network'
    },
    {
      name: '系统设置',
      id: '6',
      path: 'setting'
    }
  ]
  // menusList.value = await menuList()
  // console.log('menuList: \n' + menusList)
}
initMenusList()
</script>

<style lang="scss" scoped></style>
