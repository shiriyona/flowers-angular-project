import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlowersModule } from './flowers/flowers.module';
import { OrderModule } from './order/order.module';
import { InformationModule } from './information/information.module';
import { TreesModule } from './trees/trees.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FlowersModule,
    OrderModule,
    InformationModule,
    TreesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
