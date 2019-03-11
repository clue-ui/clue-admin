/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

export default {
  name: 'clue-ui/goods',
  descript: '商品页面',
  route: [
    {
      path: '/goods',
      name: 'site-goods',
      component: () => import(/* webpackChunkName: "chunk.pickup" */ './src/index')
    }
  ],
  extra: {
    // todo
  }
}
