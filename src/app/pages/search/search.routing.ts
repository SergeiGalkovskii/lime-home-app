import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    }
];

export const SearchRouter: ModuleWithProviders = RouterModule.forChild(routes);
