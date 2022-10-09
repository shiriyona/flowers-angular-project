import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBushesComponent } from './components/all-bushes/all-bushes.component';


const routes: Routes = [
    { path: 'all-bushes', component: AllBushesComponent },
    {
        path: '',
        redirectTo: 'all-bushes',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BushesRoutingModule {
  
  }