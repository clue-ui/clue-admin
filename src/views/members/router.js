/**
 * router option
 *
 * @author [author]
 * @since [version]
 */

let route = [
  {
    path: '/members',
    name: 'site-option',
    component: () => import(/* webpackChunkName: "member.site" */ './src/index')
  }
]

export default route
