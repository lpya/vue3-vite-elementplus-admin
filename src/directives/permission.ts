import { App } from 'vue'
const adminBtn = ['admin']
const visitorBtn = ['visitor']
import { getToken } from '@/utils/auth'

export function permission(app: App<Element>) {
  app.directive('permission', (el, binding) => {
    const { oldValue, value } = binding
    if (JSON.stringify(oldValue) === JSON.stringify(value)) {
      return
    }
    let permissionBtn: string[] = []
    if (getToken() === 'admin') {
      permissionBtn = adminBtn
    } else {
      permissionBtn = visitorBtn
    }
    const hasPermission = value.some((item: string) => {
      return permissionBtn.includes(item)
    })
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  })
}
