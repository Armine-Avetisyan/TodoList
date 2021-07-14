import { Component } from "@angular/core";

@Component({
  selector: 'app-warning,',
  template: `
    <p>This is a warning, you are in danger!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        color: red;
        font-family: Verdana;
        font-size: 20px;
      }
    `
  ]
})

export class WarningComponent{

}
