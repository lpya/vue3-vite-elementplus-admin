<!--
 * @Description: 拖拽表格
 * @Author: hutu
 * @Date: 2022-01-12 17:32:00
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 10:21:02
-->
<template>
  <div class="drag-table">
    <div class="container">
      <el-table :data="article" :stripe="true">
        <el-table-column prop="id" label="文章ID" width="80" align="center"></el-table-column>
        <el-table-column prop="created_at" label="创建时间" width="200" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" width="200" align="center"></el-table-column>
        <el-table-column prop="pageviews" label="阅读量" width="100" align="center"> </el-table-column>
        <el-table-column prop="type" label="类别" width="100" align="center"> </el-table-column>
        <el-table-column prop="status" label="状态" width="100" align="center">
          <template #default="scope">
            <el-tag :type="scope.row.status === 'published' ? 'success' : 'info'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template #default>
            <el-icon class="iconfont icon-drag" style="font-size: 20px; cursor: pointer"></el-icon>
          </template>
        </el-table-column>
      </el-table>
      <div class="sort">
        <div>
          <el-tag>默认顺序</el-tag><span>[{{ oldIndexArr.toString() }}]</span>
        </div>
        <div>
          <el-tag>拖拽顺序</el-tag><span>[{{ newIndexArr.toString() }}]</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { getArticleList } from '@/api/article'
import { IArticleList } from '@/interface'
import Sortable from 'sortablejs'
const article = ref<IArticleList[]>([])
let newIndexArr = ref<number[]>([])
const oldIndexArr: number[] = []

/**
 * @desc: 获取文章列表
 */

const handleGetArticleList = async () => {
  const res = await getArticleList({ limit: 10 })
  const { code, data } = res.data
  if (code === 10000) {
    article.value = data.items
    for (let i = 0, len = article.value.length; i < len; i++) {
      oldIndexArr.push(article.value[i].id)
    }
    newIndexArr.value = oldIndexArr
  }
}

/**
 * @desc: 添加拖拽表格
 */
const initDrapTable = () => {
  const tbody = document.querySelectorAll('.drag-table .el-table__body-wrapper > table > tbody')[0] as unknown as HTMLElement
  Sortable.create(tbody, {
    animation: 100,
    onEnd(evt) {
      let newArr = article.value
      let oldIndex = evt.oldIndex || 0
      let newIndex = evt.newIndex || 0
      const currentRow = newArr.splice(oldIndex, 1)[0]
      newArr.splice(newIndex, 0, currentRow)
      article.value = []
      nextTick(() => {
        article.value = newArr
        newIndexArr.value = []
        for (let i = 0, len = article.value.length; i < len; i++) {
          newIndexArr.value.push(article.value[i].id)
        }
      })
    }
  })
}
handleGetArticleList()
onMounted(() => {
  initDrapTable()
})
</script>
<style lang="scss">
.drag-table {
  height: 100%;
  padding: 20px;
  overflow: auto;
  .container {
    padding: 20px;
    background: $white;
  }
  .sort {
    padding: 20px 20px 0px;
    div {
      padding-bottom: 15px;
      span {
        padding-left: 10px;
      }
    }
  }
}
</style>
