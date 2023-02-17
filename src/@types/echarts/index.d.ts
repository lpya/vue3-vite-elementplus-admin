// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入图表，图表后缀都为 Chart
import { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，组件后缀都为 Component
import { TitleComponentOption, TooltipComponentOption, GridComponentOption, GeoComponentOption } from 'echarts/components'
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型

declare global {
  type IEchartsOption = echarts.ComposeOption<
    BarSeriesOption | LineSeriesOption | PieSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | GeoComponentOption
  >
}
