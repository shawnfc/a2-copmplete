import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fs-databinding></fs-databinding>
  `
})

export class AppComponent {
  title = 'The App Works!';
}
