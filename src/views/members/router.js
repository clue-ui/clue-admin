/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

export default {
  name: 'member',
  auth: '作者信息',
  descript: '描述信息',
  route: [
    {
      path: '/members',
      name: 'site-option',
      component: () => import(/* webpackChunkName: "chunk.member" */ './src/index')
    }
  ],
  extra: {
    // todo
  }
}
