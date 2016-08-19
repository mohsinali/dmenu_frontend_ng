import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { NavbarComponent } from './navbar'
import { appRouterProvider } from './app.routes'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent, appRouterProvider ]
})
export class AppModule { }
