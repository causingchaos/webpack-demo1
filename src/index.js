import './styles.css';
import './views/todo-view.js'
import './views/not-found-view.js'
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
            path: '/',
            component: 'todo-view'
        },
        {
            path: '/stats',
            component: 'stats-view',
            //action: () => 
            //dynamic import, will only download this code bundle when navigating to it
            // stats is a label you can see in network console.
             //   import(/* webpackChunkName: "stats" */ '.views/stats-view')
        },
        {
            path: '(.*)',
            component: 'not-found-view',
            //action: () =>
              //  import(/* webpackChunkName: "not-found-view" */ '.views/not-found-view')
        }
    ])
}