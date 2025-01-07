import { Component } from '@angular/core';
import { Menu } from './menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

public menuProperities :Array<Menu> = [
{
  id: '1',
  titre: 'Home',
  icon: 'fa fa-home',
  url: '',
  sousMenu: [
 
    {
      id: '11',
      titre: 'Statistics',
      icon: 'fa fa-bar-chart',
      url: 'home',
    }
  ]

},
{
  id: '2',
  titre: 'Patient',
  icon: 'fa fa-users',
  url: '',
  sousMenu: [
    {
      id: '21',
      titre: 'Liste',
      icon: 'fa fa-list',
      url: '',
    },
    {
      id: '22',
      titre: 'Add Test Result',
      icon: 'fa fa-add',
      url: '',
    },

  ]
},
{
  id: '3',
  titre: 'Track Patient',
  icon: 'fa fa-map',
  url: '',
 
},
{
  id: '4',
  titre: 'Patient Report',
  icon: 'fa fa-user',
  url: '',
 
},
{
  id: '5',
  titre: '  Settings',
  icon: 'fa fa-cog',
  url: '',
  sousMenu: [
    {
      id: '51',
      titre: 'Profil',
      icon: 'fa fa-user',
      url: '',
    },
    {
      id: '52',
      titre: 'Update Profil',
      icon: 'fa fa-pencil',
      url: '',
    },
    {
      id: '53',
      titre: 'Change Password',
      icon: 'fa fa-key',
      url: '',
    },

    {
      id: '54',
      titre: 'Logout',
      icon: ' fa fa-sign-out',
      url: '',
    }
  ]
}
]
openedMenuId: string | null = null;

toggleMenu(menuId: string): void {
  this.openedMenuId = this.openedMenuId === menuId ? null : menuId;
}
constructor(private router:Router) { }
navigate(url?: string|undefined): void {
 this.router.navigate([url]);
  }

}
