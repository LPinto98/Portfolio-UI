import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el_id: string){
    console.log("Scrolling to ",el_id);
    let el = document.getElementById(el_id);
    el?.scrollIntoView();
  }
  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-opaque');
    } else {
      element.classList.remove('navbar-opaque');
    }
  }
}
