import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url: string = "../assets/Img/chbag1.jpg";
  imageChange(event: any) {
    this.url = event.target.src;

  }
  url2: string = "../assets/Img/child.jpg";
  imageChange1(event: any) {
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

}
