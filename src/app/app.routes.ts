import { Routes } from '@angular/router';
import { Home } from './features/organizer/home/home';
import { ApiHome } from './features/api/pages/api-home/api-home';
import { InternalOrganizer } from './layouts/components/internal-organizer/internal-organizer';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
            {
                path: '',
                component: InternalOrganizer,
            },
        ]
    },
];
