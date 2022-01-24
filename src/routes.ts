import Form from './components/form'
import Error404 from './pages/error404'
import Home from './pages/home'

const routes = [
  {
    path: '/forms',
    component: Form,
    exact: false,
  },
  {
    path: '/404',
    canonicalPath: () => '/404',
    element: Error404,
  },
  {
    path: '/',
    canonicalPath: () => '/',
    element: Home,
    exact: true,
  },
]

export default routes
