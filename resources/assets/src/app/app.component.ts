import { Component } from '@angular/core';
import { AlertBarOptions, TextPlacement } from 'ng2-alert-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public options: AlertBarOptions = new AlertBarOptions({
    textPlacement: TextPlacement.left,
    duration: 8000
  });
}
