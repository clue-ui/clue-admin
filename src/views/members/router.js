/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

export default {
  route: [
    {
      path: '/members',
      name: 'site-option',
      component: () => import(/* webpackChunkName: "chunk.member" */ './src/index')
    }
  ]
}
