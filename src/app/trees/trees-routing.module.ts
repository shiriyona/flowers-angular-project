import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTreesComponent } from './components/all-trees/all-trees.component';

const routes: Routes = [
    { path: 'all-trees', component: AllTreesComponent },
    {
        path: '',
        redirectTo: 'all-trees',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TreesRoutingModule {
  
  }