import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  }
}
