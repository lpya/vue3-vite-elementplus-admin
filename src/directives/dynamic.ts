import { App } from 'vue'

export function dynamic(app: App<Element>) {
  app.directive('dynamic', (el, binding) => {
    const total = parseInt(el.innerText)
    const rate = 30
    const time = 1500
    let dNum = 0
    const step = Math.floor(total / (time / rate))
    let timer = setInterval(() => {
      dNum = dNum + step
      if (dNum >= total) {
        dNum = total
        clearInterval(timer)
        timer = null
      }
      el.innerText = dNum
    }, rate)
  })
}
