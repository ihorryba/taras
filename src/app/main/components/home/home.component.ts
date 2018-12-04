import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  small = false;
  aliases = ['xs', 'lt-sm'];

  constructor(
    private media: ObservableMedia,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.media.isActive('xs')) {
      this.small = true;
    } else {
      this.small = false;
    }
    this.media.subscribe(res => {
      if (this.aliases.indexOf(res.mqAlias) !== -1) {
        this.small = true;
      } else {
        this.small = false;
      }
    });
  }

  redirectTo(): void {
    this.router.navigate(['/cups']);
  }
}
