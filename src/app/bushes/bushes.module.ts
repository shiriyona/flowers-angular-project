import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { MatDialogModule } from "@angular/material/dialog";
import { BushesService } from "./services/bushes.service";
import { BushesRoutingModule } from "./bushes-routing.module";
import { AllBushesComponent } from './components/all-bushes/all-bushes.component';
import { BushesListComponent } from './components/all-bushes/bushes-list/bushes-list.component';
import { BushesDetailComponent } from './components/all-bushes/bushes-detail/bushes-detail.component';
import { BushItemComponent } from './components/all-bushes/bushes-list/bush-item/bush-item.component';

@NgModule({
    declarations: [   
    AllBushesComponent,
     BushesListComponent,
      BushesDetailComponent,
       BushItemComponent
  ],

    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        BushesRoutingModule
    ],
    providers: [ BushesService ],
})
export class BushesModule { }