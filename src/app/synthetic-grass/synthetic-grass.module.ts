import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SyntheticGrassDetailComponent } from './components/all-synthetic-grass/synthetic-grass-detail/synthetic-grass-detail.component';
import { AllSyntheticGrassComponent } from './components/all-synthetic-grass/all-synthetic-grass.component';
import { SyntheticGrassListComponent } from './components/all-synthetic-grass/synthetic-grass-list/synthetic-grass-list.component';
import { SyntheticGrassItemComponent } from './components/all-synthetic-grass/synthetic-grass-list/synthetic-grass-item/synthetic-grass-item.component';
import { SyntheticGrassRoutingModule } from './synthetic-grass-routing.module';
import { SyntheticGrassService } from './services/synthetic-grass.service';


@NgModule({
  declarations: [
    AllSyntheticGrassComponent,
    SyntheticGrassDetailComponent,
    SyntheticGrassListComponent,
    SyntheticGrassItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    SyntheticGrassRoutingModule
  ],
  providers: [ SyntheticGrassService],
})
export class SyntheticGrassModule { }