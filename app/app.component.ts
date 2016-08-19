import { Component } from '@angular/core';

import {CategoriesComponent} from './categories_component/categories.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CategoriesComponent]
})
export class AppComponent { }
