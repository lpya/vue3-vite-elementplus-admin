/*
 * @Description:监听输入变化
 * @Author: hutu
 * @Date: 2022-08-09 17:13:15
 * @LastEditors: hutu
 * @LastEditTime: 2022-09-28 13:56:12
 */
import { ref } from 'vue'

export function useInput() {
  const isFocus = ref<boolean>(false)
  /**
   * @desc:失去焦点
   * @return {*}
   */
  const listenBlur = () => {
    isFocus.value = false
  }
  /**
   * @desc: 获取焦点
   * @return {*}
   */
  const listenFocus = () => {
    isFocus.value = true
  }
  return {
    isFocus,
    listenBlur,
    listenFocus
  }
}
