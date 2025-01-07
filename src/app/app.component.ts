import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentAuthComponent } from "../Login/component-auth/component-auth.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eLabWebUI';
}
