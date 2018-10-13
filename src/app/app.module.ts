import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './common/core/core.module';
import { MainModule } from './main/main.module';
import { HomeComponent } from './main/components/home/home.component';
import { CupsComponent } from './main/components/cups/cups.component';
import { OrderComponent } from './main/components/order/order.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cups', component: CupsComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MainModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
