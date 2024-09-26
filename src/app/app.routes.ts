import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Calamatta Stock App',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    },
    {
        path: '**',
        title: 'Page not found',
        loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent),
    }
];
