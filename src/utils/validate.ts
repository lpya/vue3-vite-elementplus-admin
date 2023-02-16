/**
 * @desc: 判断用户是否存在
 * @param {string} username 用户名
 * @return {*}
 */
export const validUsername = (username: string): boolean => {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(username.trim()) >= 0
}
