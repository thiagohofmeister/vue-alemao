import Route from './Route'
import Layout from '@/components/Layout'

// views
import Home from '@/views/Home'

// errors
import NotFound from '@/views/NotFound'

/**
 * Rotas da aplicação.
 *
 * @type {Route[]}
 */
const routes = [
  new Route(Layout, '/').setChildren([
    new Route(Home, '', 'home')
  ]),
  new Route(NotFound, '/not_found'),
  {path: '*', redirect: '/not_found'}
]

export default routes
