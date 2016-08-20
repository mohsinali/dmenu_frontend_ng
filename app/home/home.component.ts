import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template: `
      <h2>Home Page</h2>
      <small>Homepage content goes here.</small>
      <a routerLink="/categories" routerLinkActive="active">Categories</a>
    `
})

export class HomeComponent{}