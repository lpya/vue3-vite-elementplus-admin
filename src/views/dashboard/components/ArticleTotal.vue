<template>
  <div class="article-total">
    <h2>文章统计</h2>
    <div class="container">
      <div class="container-title">
        <div class="container-title-total">
          <div>文章总数</div>
          <div v-dynamic>{{ 60 }}</div>
        </div>
        <div class="container-title-text">
          <div class="item">
            <div></div>
            <div>已发布</div>
          </div>
          <div class="item">
            <div></div>
            <div>待审核</div>
          </div>
          <div class="item">
            <div></div>
            <div>回收站</div>
          </div>
        </div>
      </div>
      <div class="container-charts">
        <ArticleChart :data="[47, 3, 10]" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ArticleChart from './ArticleChart.vue'
</script>
<style lang="scss">
.article-total {
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #666;

  height: 400px;

  h2 {
    font-size: 18px;
    padding-bottom: 50px;
  }

  > .container {
    display: flex;
    flex-flow: row;
    flex: 1;

    .container-title {
      .container-title-total {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 130px;
        background-image: linear-gradient(to bottom right, #1f4ff1, #4a81de);
        border-radius: 5px;
        color: #fff;

        div {
          // color: $white;
          font-weight: bold;

          &:last-child {
            margin-top: 10px;
            font-size: 16px;
          }
        }
      }

      .container-title-text {
        margin-top: 30px;

        > .item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          &:nth-child(1) div:first-child {
            background-image: linear-gradient(to bottom right, #4440b9, #7372cd);
          }

          &:nth-child(2) div:first-child {
            background-image: linear-gradient(to bottom right, #54bbec, #6ce4f2);
          }

          &:nth-child(3) div:first-child {
            background-image: linear-gradient(to bottom right, #f49053, #ebd292);
          }

          div {
            &:first-child {
              width: 80px;
              height: 30px;
              margin-right: 10px;
              border-radius: 5px;
            }

            &:last-child {
              width: 50px;
            }
          }
        }
      }
    }

    .container-charts {
      flex: 1;
    }
  }
}
</style>
