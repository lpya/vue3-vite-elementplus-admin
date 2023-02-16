declare interface IAsyncRoutes {
  father: string //父级
  identifier: string //标识码，也是目录名称
  title: string //名称
  icon: string //图标
  type: string //类别 menu：侧边栏
  url: string //路径
  children?: IAsyncRoutes[]
}
