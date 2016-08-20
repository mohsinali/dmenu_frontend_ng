import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing'
import { HomeComponent } from './home/home.component'
import { CategoriesModule } from './categories/categories.module'

@NgModule({
  imports: [ BrowserModule, FormsModule, CategoriesModule, routing ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
