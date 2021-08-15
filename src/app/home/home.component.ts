import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url: string = "../assets/Img/mob4.jpg";
  imageChange(event: any) {
    this.url = event.target.src;
  }
  id: any;
  drop(value: any) {
    if (this.id == value) {
      this.id = "";
    }
    else {
      this.id = value;
    }
  }
  partnersArray: any = [
    {
      imgName: "../assets/Img/brand-1.png"
    },
    {
      imgName: "../assets/Img/brand-2.png"
    },
    {
      imgName: "../assets/Img/brand-3.png"
    },
    {
      imgName: "../assets/Img/brand-4.png"
    },
    {
      imgName: "../assets/Img/brand-5.png"
    },
    {
      imgName: "../assets/Img/brand-6.png"
    },
    {
      imgName: "../assets/Img/brand-7.png"
    }
  ];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  };
  policyOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left" ></i>', '<i class="fa fa-caret-right" ></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }




}
