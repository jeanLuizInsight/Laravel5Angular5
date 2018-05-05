// Angular Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component

// Screens Components

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' }
   
    // rotas protegidas...
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
