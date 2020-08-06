import {store} from './store'

function lazyLoad(component) {
    return () => import(`@/components/${component}.vue`)
}

export const routes = [
    {
        path: '',
        component: lazyLoad('Home'),
        name: ''
    },
    {
        path: '/galleri/:id',
        component: lazyLoad('Paintings'),
        name: 'Galleri'
    },
    {
        path: '/om',
        component: lazyLoad('Om'),
        name: 'Om'
    },
    {
        path: '/kontakt',
        component: lazyLoad('Kontakt'),
        name: 'Kontakt'
    },
    {
        path: '/login',
        component: lazyLoad('Login'),
        name: 'Login',
        beforeEnter: (to, from, next) => {
            if (store.state.loggedIn){
                next({name: 'Admin'})
            }
            else {
                next();
            }
        }
    },
    {
        path: '/admin',
        beforeEnter: (to, from, next) => {
            if (store.state.loggedIn) {
                next();
            } else {
                next({name: 'Login'});
            }
        },
        component: lazyLoad('Admin/Admin'),
        name: 'Admin',
        children: [
            {
                path: '/upload', component: lazyLoad('Admin/FileUploader'), name: 'Upload',
            },
            {
                path: '/delete', component: lazyLoad('Admin/Delete'), name: 'Slet'
            },
        ]
    },
     {
         path: '*', redirect: '/galleri/1'
     }
]