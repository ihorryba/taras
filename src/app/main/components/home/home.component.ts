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

  products = [
    {
      сategory: 'Гофровані',
      img: '',
      colors: [
        {
          color: 'red',
          img: '',
          sizes: [
            { size: 110, cartonPrice: 0.99, boxPrice: 0.95,
              packs: {
                box: 800,
                carton: 20
              }
            },
            { size: 175, cartonPrice: 1.11, boxPrice: 1.07,
              packs: {
                box: 900,
                carton: 20
              }
            },
            { size: 250, cartonPrice: 1.43, boxPrice: 1.37,
              packs: {
                box: 700,
                carton: 20
              }
            },
            { size: 300, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 600,
                carton: 20
              }
            },
            { size: 340, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 560,
                carton: 20
              }
            },
            { size: 400, cartonPrice: 1.80, boxPrice: 1.73,
              packs: {
                box: 450,
                carton: 15
              }
            }
          ]
        },
        {
          color: 'green',
          img: '',
          sizes: [
            { size: 110, cartonPrice: 0.99, boxPrice: 0.95,
              packs: {
                box: 800,
                carton: 20
              }
            },
            { size: 175, cartonPrice: 1.11, boxPrice: 1.07,
              packs: {
                box: 900,
                carton: 20
              }
            },
            { size: 250, cartonPrice: 1.43, boxPrice: 1.37,
              packs: {
                box: 700,
                carton: 20
              }
            },
            { size: 300, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 600,
                carton: 20
              }
            },
            { size: 340, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 560,
                carton: 20
              }
            },
            { size: 400, cartonPrice: 1.80, boxPrice: 1.73,
              packs: {
                box: 450,
                carton: 15
              }
            }
          ]
        },
        {
          color: 'black',
          img: '',
          sizes: [
            { size: 110, cartonPrice: 0.99, boxPrice: 0.95,
              packs: {
                box: 800,
                carton: 20
              }
            },
            { size: 175, cartonPrice: 1.11, boxPrice: 1.07,
              packs: {
                box: 900,
                carton: 20
              }
            },
            { size: 250, cartonPrice: 1.43, boxPrice: 1.37,
              packs: {
                box: 700,
                carton: 20
              }
            },
            { size: 300, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 600,
                carton: 20
              }
            },
            { size: 340, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 560,
                carton: 20
              }
            },
            { size: 400, cartonPrice: 1.80, boxPrice: 1.73,
              packs: {
                box: 450,
                carton: 15
              }
            }
          ]
        },
        {
          color: 'brown',
          img: '',
          sizes: [
            { size: 110, cartonPrice: 0.99, boxPrice: 0.95,
              packs: {
                box: 800,
                carton: 20
              }
            },
            { size: 175, cartonPrice: 1.11, boxPrice: 1.07,
              packs: {
                box: 900,
                carton: 20
              }
            },
            { size: 250, cartonPrice: 1.43, boxPrice: 1.37,
              packs: {
                box: 700,
                carton: 20
              }
            },
            { size: 300, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 600,
                carton: 20
              }
            },
            { size: 340, cartonPrice: 1.61, boxPrice: 1.55,
              packs: {
                box: 560,
                carton: 20
              }
            },
            { size: 400, cartonPrice: 1.80, boxPrice: 1.73,
              packs: {
                box: 450,
                carton: 15
              }
            }
          ]
        }
      ]
    },
    {
      сategory: 'Двошарові',
      img: '',
      colors: [
        {
          color: 'craft',
          img: '',
          sizes: [
            { size: 175, cartonPrice: 1.39, boxPrice: 1.33,
              packs: {
                box: 800,
                carton: 20
              }
            },
            { size: 300, cartonPrice: 1.70, boxPrice: 1.63,
              packs: {
                box: 600,
                carton: 20
              }
            },
            { size: 400, cartonPrice: 2.09, boxPrice: 2.00,
              packs: {
                box: 500,
                carton: 20
              }
            }
          ]
        },
        {
          color: 'black',
          img: '',
          sizes: [
            { size: 175, cartonPrice: 1.39, boxPrice: 1.33,
              packs: {
                box: 800,
                carton: 20
              }
            },
            { size: 300, cartonPrice: 1.70, boxPrice: 1.63,
              packs: {
                box: 600,
                carton: 20
              }
            },
            { size: 400, cartonPrice: 2.09, boxPrice: 2.00,
              packs: {
                box: 500,
                carton: 20
              }
            }
          ]
        }
      ]
    },
    {
      сategory: 'Одношарові',
      img: '',
      colors: []
    },
    {
      сategory: 'Крафтові',
      img: '',
      colors: []
    }
  ];

  accessories = {
    cover: {
      title: 'Кришки',
      photos: [],
      products: [
        {
          diameter: 70, cartonPrice: 0.43, boxPrice: 0.41,
          size: [175],
          packs: {
            box: 2000,
            carton: 50
          }
        },
        {
          diameter: 71, cartonPrice: 0.44, boxPrice: 0.42,
          size: [175],
          packs: {
            box: 3000,
            carton: 50
          }
        },
        {
          diameter: 75, cartonPrice: 0.46, boxPrice: 0.44,
          size: [250],
          packs: {
            box: 3000,
            carton: 50
          }
        },
        {
          diameter: 80, cartonPrice: 0.47, boxPrice: 0.45,
          size: [300, 340],
          packs: {
            box: 2500,
            carton: 50
          }
        },
        {
          diameter: 90, cartonPrice: 0.52, boxPrice: 0.49,
          size: [400],
          packs: {
            box: 2000,
            carton: 50
          }
        },
        {
          diameter: 91, cartonPrice: 0.54, boxPrice: 0.52,
          size: [400],
          packs: {
            box: 2000,
            carton: 50
          }
        }
      ]
    },
    others: [
      {
        category: 'Мішалка дерев\'яна 14см',
        price: 17.50,
        inPack: 800
      },
      {
        category: 'Мішалка пластмасова 11см',
        price: 35.02,
        inPack: 800
      },
      {
        category: 'Мішалка пластмасова 14см',
        price: 38.51,
        inPack: 800
      },
      {
        category: 'Барна Серветка',
        price: 19.80,
        inPack: 400
      },
      {
        category: 'Трубочка гофрована "Мікс"',
        price: 13.86,
        inPack: 200
      },
      {
        category: 'Трубочка гофрована "Чорна"',
        price: 12.87,
        inPack: 200
      },
      {
        category: 'Трубочка гофрована "Чорна"',
        price: 69.10,
        inPack: 1000
      },
      {
        category: 'Трубочка фрешка "Мікс" D 6.8',
        price: 45.98,
        inPack: 500
      },
      {
        category: 'Трубочка фрешка "Чорна" D 8',
        price: 66.57,
        inPack: 500
      },
      {
        category: 'Термоманжети',
        price: 30.24,
        inPack: 100
      },
      {
        category: 'Підставка для стакана',
        price: 90.60,
        inPack: 50,
        section: 2
      },
      {
        category: 'Підставка для стакана',
        price: 171.60,
        inPack: 50,
        section: 4
      }
    ]
  };



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
