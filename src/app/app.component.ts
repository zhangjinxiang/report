import { Component } from '@angular/core';
import { ZjxComponent } from './zjx.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  getChildIfo(value)
  {
    console.log("child content:"+value.name);
  }
}
