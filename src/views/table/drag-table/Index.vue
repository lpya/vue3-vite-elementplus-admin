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
import { ArticleApi } from '@/api/article'
import Sortable from 'sortablejs'
const article = ref<IArticle[]>([])
let newIndexArr = ref<number[]>([])
const oldIndexArr: number[] = []

onMounted(() => {
  initDrapTable()
})

const getData = async () => {
  const res = await ArticleApi.getArticle()
  const { errcode, datas } = res
  if (errcode === 0) {
    article.value = datas.splice(0, 10)
    for (let i = 0, len = article.value.length; i < len; i++) {
      oldIndexArr.push(article.value[i].id)
    }
    newIndexArr.value = oldIndexArr
  }
}
getData()

const initDrapTable = () => {
  const tbody = document.querySelectorAll('.drag-table .el-table__body-wrapper table > tbody')[0] as unknown as HTMLElement
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
