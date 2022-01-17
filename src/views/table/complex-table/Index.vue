<!--
 * @Description: 综合表格
 * @Author: hutu
 * @Date: 2022-01-12 17:32:00
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 10:19:11
-->
<template>
  <div class="complex-table">
    <div class="container">
      <div class="complex-header">
        <div class="complex-header-action">
          <el-button type="info" size="small" @click="refresh">
            <el-icon class="iconfont icon-sync"></el-icon>
          </el-button>
          <el-button type="primary" size="small" @click="dialogVisible = true">
            <el-icon class="iconfont icon-plus"></el-icon>
            <span>添加</span>
          </el-button>
          <el-button type="danger" size="small" @click="delArr">
            <el-icon class="iconfont icon-delete"></el-icon>
            <span>删除</span>
          </el-button>
          <el-button type="info" size="small">
            <el-icon class="iconfont icon-upload"></el-icon>
            <span>导出</span>
          </el-button>
        </div>
        <div class="complex-header-input">
          <el-input size="small" placeholder="请输入标题" style="width: 400px"></el-input>
        </div>
      </div>
      <div class="complex-content">
        <el-table class="complex-content-table" v-loading="loading" :data="article" @selection-change="handleSelectionChange" :stripe="true" height="calc(100vh - 250px)">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="id" label="文章ID" width="80" align="center"></el-table-column>
          <el-table-column prop="created_at" label="创建时间" width="200" align="center"></el-table-column>
          <el-table-column prop="title" label="标题" align="center"></el-table-column>
          <el-table-column prop="author" label="作者" width="100" align="center"></el-table-column>
          <el-table-column prop="pageviews" label="阅读量" width="100" align="center"></el-table-column>
          <el-table-column prop="type" label="类别" width="100" align="center"></el-table-column>
          <el-table-column prop="status" label="状态" width="100" align="center">
            <template #default="scope">
              <el-tag :type="scope.row.status === 'published' ? 'success' : 'info'">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="250" align="center">
            <template #default="scope">
              <el-button size="small" type="primary">编辑</el-button>
              <el-button size="small" @click="release(scope.row.id)" :type="scope.row.status === 'published' ? '' : 'success'">{{ scope.row.status === 'published' ? '草稿' : '发布' }}</el-button>
              <el-button size="small" type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="complex-content-paging">
          <el-pagination background :page-size="pageSize" :page-sizes="[15, 30, 45, 60]" layout="sizes, prev, pager, next" :total="100" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElNotification, ElMessage } from 'element-plus'

import { ref } from 'vue'
import { getArticleList } from '@/api/article'
import { IArticleList } from '@/interface'
const article = ref<IArticleList[]>([]) //文章列表
const loading = ref<boolean>(true) //加载
const currentPage = ref<number>(1) //当前页
const pageSize = ref<number>(15) //每页大小
const ids = ref<number[]>([]) //用户选择ids
const dialogVisible = ref<boolean>(false) //加载

/**
 * @desc: 获取文章列表
 */
const handleGetArticleList = async () => {
  loading.value = true
  const res = await getArticleList({ page: currentPage.value, limit: pageSize.value })
  const { code, data } = res.data
  if (code === 10000) {
    article.value = data.items
  }
  loading.value = false
}
/**
 * @desc: 删除
 * @param {number} id
 * @return {*}
 */
const del = (id: number) => {
  article.value = article.value.filter((item) => {
    return item.id !== id
  })
  ElNotification.success({
    title: '温馨提示',
    message: '删除成功',
    showClose: true
  })
}
/**
 * @desc: 删除所选
 * @param {*}
 * @return {*}
 */
const delArr = () => {
  if (ids.value.length === 0) {
    ElMessage.warning('请选择文章')
    return false
  }
  ids.value.forEach((item) => {
    article.value = article.value.filter((itemTwo) => {
      return itemTwo.id !== item
    })
  })
  ElNotification.success({
    title: '温馨提示',
    message: '删除成功',
    showClose: true
  })
}
/**
 * @desc: 发布
 * @param {number} id
 * @return {*}
 */
const release = (id: number) => {
  article.value.forEach((item) => {
    if (item.id === id) {
      item.status = item.status === 'draft' ? 'published' : 'draft'
      ElMessage.success('操作成功')
    }
  })
}
/**
 * @desc: 刷新
 */
const refresh = () => {
  currentPage.value = 1
  handleGetArticleList()
}
/**
 * @desc: 监听用户全选
 * @param {IArticleList[]} arr
 * @return {*}
 */
const handleSelectionChange = (arr: IArticleList[]) => {
  const arrIds: number[] = []
  arr.forEach((item) => {
    arrIds.push(item.id)
  })
  ids.value = arrIds
}
/**
 * @desc: 关闭弹窗
 * @param {*}
 * @return {*}
 */
const handleClose = () => {
  dialogVisible.value = false
}
/**
 * @desc:设置显示条数
 * @param {number} size 显示条数
 */
const handleSizeChange = (size: number) => {
  pageSize.value = size
  handleGetArticleList()
}
/**
 * @desc:设置当前页数
 * @param {number} page 页数
 */
const handleCurrentChange = (page: number) => {
  currentPage.value = page
  handleGetArticleList()
}

handleGetArticleList()
</script>
<style lang="scss">
.complex-table {
  height: 100%;
  .container {
    .complex-header {
      display: flex;
      justify-content: space-between;
      background: $white;
      padding: 20px;
      border-top: 1px solid #eee;
      &-action {
        flex: 1;
      }
      &-input {
        display: flex;
        .el-input {
          margin-right: 15px;
        }
      }
    }
    .complex-content {
      margin: 20px;
      padding: 20px;
      border-radius: 4px;
      background: $white;
      &-table {
        background: $baseBg;
      }
      &-paging {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: $white;
        padding-top: 15px;
      }
    }
  }
}
</style>
