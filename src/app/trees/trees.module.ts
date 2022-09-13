import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { TreesRoutingModule } from './trees-routing.module';
import { AllTreesComponent } from './components/all-trees/all-trees.component';
import { TreesListComponent } from './components/all-trees/trees-list/trees-list.component';
import { TreeItemComponent } from './components/all-trees/trees-list/tree-item/tree-item.component';
import { TreesDetailComponent } from './components/all-trees/trees-detail/trees-detail.component';
import { TreesService } from './services/trees.sevice';


@NgModule({
  declarations: [
    AllTreesComponent,
    TreesListComponent,
    TreeItemComponent,
    TreesDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    TreesRoutingModule
  ],
  providers: [ TreesService ],
})

export class TreesModule { }