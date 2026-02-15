import { Routes } from '@angular/router';
import { Home } from './features/organizer/home/home';
import { ApiHome } from './features/api/pages/api-home/api-home';
import { InternalOrganizer } from './layouts/components/internal-organizer/internal-organizer';
import { RegisterPage } from './layouts/auth-layout/pages/register-page/register-page';
import { AuthPage } from './layouts/auth-layout/pages/auth-page/auth-page';
import { LoginPage } from './layouts/auth-layout/pages/login-page/login-page';

export const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {
                path: '',
                redirectTo: 'register', // Redireciona a raiz para /register
                pathMatch: 'full'
            },
            {
                path: 'register',
                component: RegisterPage
            },
            {
                path: 'login',
                component: LoginPage
            }
        ]
    },
    {
        path: 'home',
        component: Home,
        children: [
            {
                path: '',
                component: InternalOrganizer,
            },
        ]
    },
];
