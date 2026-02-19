import { Routes } from '@angular/router';
import { Home } from './features/organizer/home/home';
import { InternalOrganizer } from './layouts/components/internal-organizer/internal-organizer';
import { RegisterPage } from './layouts/auth-layout/pages/register-page/register-page';
import { AuthPage } from './layouts/auth-layout/pages/auth-page/auth-page';
import { LoginPage } from './layouts/auth-layout/pages/login-page/login-page';
import { ConfirmAccount } from './layouts/auth-layout/pages/confirm-account/confirm-account';
import { authGuard } from './core/guards/auth/auth-guard';
import { guestGuard } from './core/guards/guest/guest-guard';
import { GroupHome } from './features/group/pages/group-home/group-home';
import { ApiHome } from './features/api/pages/api-home/api-home';

export const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        canActivate: [guestGuard],
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
            },
            {
                path: 'confirm-account',
                component: ConfirmAccount
            }
        ]
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: InternalOrganizer,
            },
            {
                path: 'group',
                component: GroupHome
            }, 
            {
                path: 'api',
                component: ApiHome
            }
        ]
    },
];
