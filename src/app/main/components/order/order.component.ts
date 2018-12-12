import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form: FormGroup;
  small = false;
  aliases = ['xs', 'lt-sm'];
  sum = '';

  sizes = [
    { size: 110, price: 0.50 },
    { size: 175, price: 1 },
    { size: 250, price: 1.50 },
    { size: 300, price: 2 }
  ];

  packs = [
    { number: 10, name: 'Рукав' },
    { number: 50, name: 'Ящик' }
  ];

  constructor(
    private media: ObservableMedia,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();

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

  initForm(): void {
    this.form = this.formBuilder.group({
      size: null,
      pack: null,
      number: null
    });
    this.form.valueChanges.subscribe(res => {
      if (res.size && res.pack && res.number) {
        this.sum = String(res.pack * res.number * res.size) + 'грн';
      } else {
        this.sum = '';
      }
      console.log(res);
    });
  }
}
