import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FlowersRoutingModule } from './flowers-routing.module';
import { AllFlowersComponent } from './components/all-flowers/all-flowers.component';
import { FlowersService } from './sevices/flowers.sevice';
import { FlowersListComponent } from './components/flowers-list/flowers-list.component';
import { FlowerItemComponent } from './components/flowers-list/flower-item/flower-item.component';
import { FlowersDetailComponent } from './components/all-flowers/flowers-detail/flowers-detail.component';


@NgModule({
  declarations: [
    AllFlowersComponent,
    FlowersListComponent,
    FlowerItemComponent,
    FlowersDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FlowersRoutingModule
  ],
  providers: [ FlowersService ],
})
export class FlowersModule { }