import './styles.css';
import './views/todo-view.js'
import './views/messages-view.js'
import './views/auth-view.js'
import './views/todo-view2/todo-view2.js'
import './views/nav-view.js'
import { Router } from '@vaadin/router';



// setup routing with vaadin routing  //
// allow html to load first by using this
window.addEventListener('load', () => {
    initRouter();
})

// IMPORTANT NOTE // Make sure that on your server (i.e. express), you always tell it to fall back to 
// index.html on routes it can't resolve.
// https://vaadin.com/learn/tutorials/lit-element/navigation-and-code-splitting
//https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml
function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      //render nav first, then render children into <slot><slot> on nav lit template
      path: '/',
      component: 'nav-view', 
      children: [
        {
          path: '/',
          component: 'todo-view',
          action: () => import(/* webpackChunkName: "todos" */ './views/todo-view'),
        },
        {
          path: '/messages',
          component: 'messages-view' },
        { 
          path: '/stats',
          component: 'stats-view', 
          action: () => import(/* webpackChunkName: "stats" */ './views/stats-view')
        },
        {
          path: '/auth',
          component: 'auth-view' 
        },
        {
          path: '/todo-view2',
          component: 'todo-view2'
        },
        {
          path: '(.*)',
          component: 'not-found-view',
          action: () =>
          import(/* webpackChunkName: "not-found-view" */ './views/not-found-view')
        }
          ]
    }
  ])
}

/*
//dynamic import, will only download this code bundle when navigating to it
            // stats is a label you can see in network console.
*/