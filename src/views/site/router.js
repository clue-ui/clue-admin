/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

export default {
  route: [
    {
      path: '/site/option',
      name: 'site-option',
      component: () => import(/* webpackChunkName: "chunk.pickup" */ './src/option')
    },
  ]
}
