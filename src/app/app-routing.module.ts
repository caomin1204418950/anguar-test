import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch: 'full'
  },
  {
    path:'home',loadChildren: './pages/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
              RouterModule.forRoot(routes),
              BrowserModule
           ],
  exports: [RouterModule],
  declarations:[AppComponent]
})
export class AppRoutingModule { }
