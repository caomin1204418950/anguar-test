import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [
      AppComponent
  ],
  declarations: [FirstPageComponent]
})
export class AppModule { }
