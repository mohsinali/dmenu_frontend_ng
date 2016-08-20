import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CategoriesComponent } from './categories.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CategoriesComponent],
  providers: []
})

export class CategoriesModule { }