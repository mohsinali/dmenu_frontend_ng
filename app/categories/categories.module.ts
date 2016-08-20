import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CategoriesComponent } from './categories.component'
import { categoriesRouting } from './categories.routing'

@NgModule({
  imports: [CommonModule, FormsModule, categoriesRouting],
  declarations: [CategoriesComponent],
  providers: []
})

export class CategoriesModule { }