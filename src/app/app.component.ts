import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'taras';
  isShowMenu = false;

  constructor() {}

  ngOnInit(): void {
  }

  toggleMenu(): void {
    console.log('good');
    this.isShowMenu = !this.isShowMenu;
  }
}
