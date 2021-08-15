import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-means',
  templateUrl: './means.component.html',
  styleUrls: ['./means.component.css']
})
export class MeansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url: string = "../assets/Img/s3.jpg";
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
