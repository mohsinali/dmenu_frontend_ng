import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'
import { AppComponent }       from './app.component'
import { routing,
         appRoutingProviders } from './app.routing'
import { HeroesModule } from './heroes/heroes.module' 

@NgModule({
  imports: [ BrowserModule, FormsModule, HeroesModule, routing ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
