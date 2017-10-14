import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { WelcomeComponent } from '../components/home/welcome.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'welcome',
        component: WelcomeComponent

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);