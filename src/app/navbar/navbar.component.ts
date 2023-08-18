import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = false;

  toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  getCollapseVal(): boolean {
    return this.isCollapsed;
  }

}
