import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFlowersComponent } from './components/all-flowers/all-flowers.component';



const routes: Routes = [
    { path: 'all-flowers', component: AllFlowersComponent },
    {
        path: '',
        redirectTo: 'all-flowers',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FlowersRoutingModule {
  
  }