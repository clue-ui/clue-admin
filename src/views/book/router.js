/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

export default {
  name: 'clue-ui/book',
  descript: '书籍管理',
  route: [
    {
      path: '/book',
      name: 'book',
      component: () => import(/* webpackChunkName: "chunk.pickup" */ './src/index')
    }
  ],
  extra: {
    // todo
  }
}
