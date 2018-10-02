import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    console.log('header');
    this.toggleMenu.emit();
  }

}
