import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CupsComponent } from './components/cups/cups.component';
import { OrderComponent } from './components/order/order.component';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    CupsComponent,
    OrderComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
