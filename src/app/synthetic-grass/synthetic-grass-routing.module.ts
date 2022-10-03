import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSyntheticGrassComponent } from './components/all-synthetic-grass/all-synthetic-grass.component';



const routes: Routes = [
    { path: 'syntheticGrass', component: AllSyntheticGrassComponent },
    {
        path: '',
        redirectTo: 'all-synthetic-grass',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SyntheticGrassRoutingModule {
  
  }