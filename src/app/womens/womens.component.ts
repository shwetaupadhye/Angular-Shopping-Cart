import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url: string = "../assets/Img/sa11.jpg";
  url2: string = "../assets/Img/ka2.jpg"
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

}
