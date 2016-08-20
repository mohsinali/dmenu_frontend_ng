import { Injectable } from '@angular/core'

import { Category } from './category'

let CATEGORIES = [
  new Category('Chinese'),
  new Category('Pakistani'),
  new Category('Indian')
]

let categoriesPromise = Promise.resolve(CATEGORIES)

@Injectable()
export class CategoryService {
  getCategories() { return categoriesPromise }
}