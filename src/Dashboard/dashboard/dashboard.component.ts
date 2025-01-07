import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "../../composonts/menu/menu.component";
import { FooterComponent } from "../../composonts/footer/footer.component";
import { HeaderComponent } from "../../composonts/header/header.component";
 
@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, MenuComponent, FooterComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
