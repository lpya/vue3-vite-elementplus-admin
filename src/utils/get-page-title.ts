/**
 * @desc: 获取网站标题
 * @param {string} pageTitle 当前页面标题
 * @return {*}
 */
export function getPageTitle(pageTitle: string): string {
  const title = import.meta.env.VITE_SITE_NAME || 'Vue3-Element-Admin'
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
