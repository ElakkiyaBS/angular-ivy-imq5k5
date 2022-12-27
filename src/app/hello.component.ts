import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello!</h1>
  <div>
  <p>Property Binding</p>
  </div>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
}
