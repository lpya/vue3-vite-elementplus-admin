<template>
  <div class="user-total">
    <div class="panel">
      <el-row :gutter="15">
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="panel-item panel-item-0">
            <div class="panel-item-header">
              <i class="iconfont icon-user"></i>
              <span>访客量</span>
            </div>
            <div v-dynamic class="panel-item-number">560</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="panel-item panel-item-1">
            <div class="panel-item-header">
              <i class="iconfont icon-areachart"></i>
              <span>访问量</span>
            </div>
            <div v-dynamic class="panel-item-number">646</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="panel-item panel-item-2">
            <div class="panel-item-header">
              <i class="iconfont icon-ip"></i>
              <span>IP数</span>
            </div>
            <div v-dynamic class="panel-item-number">541</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6">
          <div class="panel-item panel-item-3">
            <div class="panel-item-header">
              <i class="iconfont icon-file-text-fill"></i>
              <span>阅读量</span>
            </div>
            <div v-dynamic class="panel-item-number">6423</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="panel-chart">
      <h2>实时在线人数</h2>
      <OnlineChart />
    </div>
  </div>
</template>
<script lang="ts" setup>
import OnlineChart from './OnlineChart.vue'
</script>
<style lang="scss" scoped>
.user-total {
  .panel {
    margin: 20px 0 0;
    color: #fff;

    .panel-item {
      height: 100px;
      border-radius: 5px;
      margin-bottom: 20px;

      &-header {
        display: flex;
        align-items: center;
        height: 50px;

        i {
          background: #fff;
          padding: 8px;
          border-radius: 100%;
        }

        span {
          font-size: 16px;
        }
      }

      &-number {
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
    }

    .panel-item-0 {
      background-image: linear-gradient(to bottom right, #1f4ff1, #4a81de);

      i {
        color: #1f4ff1;
        margin: 0 10px;
      }
    }

    .panel-item-1 {
      background-image: linear-gradient(to bottom right, #4440b9, #7372cd);

      i {
        color: #4440b9;
        margin: 0 10px;
      }
    }

    .panel-item-2 {
      background-image: linear-gradient(to bottom right, #54bbec, #6ce4f2);

      i {
        color: #54bbec;
        margin: 0 10px;
      }
    }

    .panel-item-3 {
      background-image: linear-gradient(to bottom right, #f49053, #ebd292);

      i {
        color: #f49053;
        margin: 0 10px;
      }
    }
  }

  .panel-chart {
    display: flex;
    flex-flow: column;
    height: 280px;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;

    h2 {
      color: #666;
      font-size: 18px;
    }
  }
}
</style>
