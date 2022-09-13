import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { OrderComponent } from 'src/app/order/components/order.component';
import { OrderRoutingModule } from './order-routing.module';


@NgModule({
  declarations: [
    OrderComponent  
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    OrderRoutingModule
  ],
  providers: [ ],
})
export class OrderModule { }