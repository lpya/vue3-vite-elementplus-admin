<template>
  <div class="complex-table">
    <div class="container">
      <div class="complex-header">
        <div class="complex-header-action">
          <el-button type="warning" @click="refresh">
            <el-icon class="iconfont icon-sync"></el-icon>
          </el-button>
          <el-button type="primary">
            <el-icon class="iconfont icon-plus"></el-icon>
            <span>添加</span>
          </el-button>
          <el-button type="danger" @click="delSelectData">
            <el-icon class="iconfont icon-delete"></el-icon>
            <span>删除</span>
          </el-button>
          <el-button type="success">
            <el-icon class="iconfont icon-upload"></el-icon>
            <span>导出</span>
          </el-button>
        </div>
        <div class="complex-header-input">
          <el-input placeholder="请输入标题" style="width: 400px"></el-input>
        </div>
      </div>
      <div class="complex-content">
        <el-table
          v-loading="loading"
          class="complex-content-table"
          :data="tableData"
          :stripe="true"
          height="calc(100vh - 250px)"
          @selection-change="handleSelectionChange"
        >
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
              <el-button type="primary">编辑</el-button>
              <el-button :type="scope.row.status === 'published' ? '' : 'success'" @click="release(scope.row.id)">
                {{ scope.row.status === 'published' ? '草稿' : '发布' }}
              </el-button>
              <el-button type="danger" @click="delData(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="complex-content-paging">
          <el-pagination
            v-model:page-size="page.page_size"
            v-model:currentPage="page.page_number"
            background
            :page-sizes="[20, 40, 60, 80]"
            layout="total,sizes, prev, pager, next"
            :total="page.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, toRefs } from 'vue'
import { ArticleApi } from '@/api/article'

const state = reactive<IArticleState>({
  article: [],
  tableData: [],
  loading: false,
  ids: [],
  page: {
    total: 0,
    page_size: 20,
    page_number: 1
  }
})
const { tableData, loading, page } = toRefs(state)

onMounted(() => {
  getData()
})

const getData = async () => {
  state.loading = true
  const res = await ArticleApi.getArticle()
  const { errcode, datas } = res
  if (errcode === 0) {
    state.article = datas
    state.page.total = datas.length
    pagination(datas)
  } else {
    state.article = []
    state.page.total = 0
  }
  state.loading = false
}

const pagination = (datas: IArticle[]) => {
  const { page_number, page_size } = state.page
  state.tableData = datas.filter((item, index) => {
    return index < page_number * page_size && index >= (page_number - 1) * page_size
  })
}

const delData = (id: number) => {
  state.article = state.article.filter((item) => {
    return item.id !== id
  })
  state.page.total = state.article.length
  pagination(state.article)
}

const delSelectData = () => {
  const { ids } = state
  if (ids.length === 0) {
    ElMessage.warning('请选择文章')
    return false
  }
  ids.forEach((itemId) => {
    delData(itemId)
  })
  ElMessage.success('删除成功')
}

const release = (id: number) => {
  state.article.forEach((item) => {
    if (item.id === id) {
      item.status = item.status === 'draft' ? 'published' : 'draft'
      ElMessage.success('操作成功')
    }
  })
}

const refresh = () => {
  state.page.page_number = 1
  state.page.page_size = 20
  getData()
}

const handleSelectionChange = (articleList: IArticle[]) => {
  articleList.forEach((item) => {
    state.ids.push(item.id)
  })
}

const handleSizeChange = (size: number) => {
  state.page.page_size = size
  pagination(state.article)
}

const handleCurrentChange = (page: number) => {
  state.page.page_number = page
  pagination(state.article)
}
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
