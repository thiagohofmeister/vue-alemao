import Route from './Route'
import Layout from '@/components/Layout'

// views
import Home from '@/views/Home'
import Maintenance from '@/views/Maintenance'

// errors
import NotFound from '@/views/NotFound'

/**
 * Rotas da aplicação.
 *
 * @type {Route[]}
 */
const routes = [
  new Route(Layout, '/').setChildren([
    new Route(Maintenance, '', 'maintenance'),
    new Route(Home, 'home', 'home')
  ]),
  new Route(NotFound, '/not_found'),
  {path: '*', redirect: '/not_found'}
]

export default routes
