import { Router } from '@vaadin/router'

const routes = [
  { path: '/', component: 'home-view' },
  { path: '/search/:query', component: 'search-view' },
  { path: '/sighting/:id', component: 'sighting-view' }
]

const main = document.querySelector('main')
const router = new Router(main)
router.setRoutes(routes)

export default router
