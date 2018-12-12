import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CupsComponent } from './components/cups/cups.component';
import { OrderComponent } from './components/order/order.component';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule.forRoot()
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
