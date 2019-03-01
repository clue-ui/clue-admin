/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

export default {
  name: 'clue-ui/pickup',
  descript: '网页路径拾取',
  route: [
    {
      path: '/pickup',
      name: 'site-option',
      component: () => import(/* webpackChunkName: "chunk.pickup" */ './src/index')
    }
  ],
  extra: {
    // todo
  }
}
