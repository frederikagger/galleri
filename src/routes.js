import {store} from './store';

function lazyLoad(component) {
    return () => import(`@/components/${component}.vue`);
}

export const routes = [
    {
        path: '/',
        component: lazyLoad('Home'),
        name: 'Home',
    },
    {
        path: '/galleri',
        component: lazyLoad('Paintings'),
        name: 'Galleri',
        props: route => ({page: route.query.page})
    },
    {
        path: '/maleri/:id',
        component: lazyLoad('SliderBig'),
    },
    {
        path: '/om',
        component: lazyLoad('Om'),
        name: 'Om',
    },
    {
        path: '/kontakt',
        component: lazyLoad('Kontakt'),
        name: 'Kontakt',
    },
    {
        path: '/login',
        component: lazyLoad('Login'),
        name: 'Login',
        beforeEnter: (to, from, next) => {
            if (store.state.loggedIn) {
                next({name: 'Admin'});
            } else {
                next();
            }
        },
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
                path: '/upload',
                component: lazyLoad('Admin/FileUploader'),
                name: 'Upload',
            },
            {
                path: '/delete',
                component: lazyLoad('Admin/Delete'),
                name: 'Slet',
            },
            {
                path: '/indbakke',
                component: lazyLoad('Admin/Indbakke'),
                name: 'Indbakke',
                children: [
                    {
                        path: '/all',
                        component: lazyLoad('Admin/IndbakkeOversigt'),
                        name: 'Alle',
                    },
                    {
                        path: '/:id',
                        components: lazyLoad('Admin/Message'),
                        name: 'Besked',
                    },
                ],
            },
        ],
    },
    {
        path: '*', redirect: '/',
    },
];
