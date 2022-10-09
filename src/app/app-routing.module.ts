import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'flowers', loadChildren: () => import('./flowers/flowers.module').then(m => m.FlowersModule)},
    { path: 'information', loadChildren: () => import('./information/information.module').then(m => m.InformationModule)},
    { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
    { path: 'trees', loadChildren: () => import('./trees/trees.module').then(m => m.TreesModule)},
    { path: 'bushes', loadChildren: () => import('./bushes/bushes.module').then(m => m.BushesModule)},
    { path: 'synthetic-grass', loadChildren: () => import('./synthetic-grass/synthetic-grass.module').then(m => m.SyntheticGrassModule)},
    {
        path: '',
        redirectTo: 'all flowers',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }