/*
 * @Description:验证
 * @Author: hutu
 * @Date: 2021-12-24 15:56:26
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-24 16:01:48
 */

/**
 * @desc: 判断用户是否存在
 * @param {string} username 用户名
 * @return {*}
 */
export const validUsername = (username: string): boolean => {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(username.trim()) >= 0
}
