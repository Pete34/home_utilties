import { Component, OnInit } from '@angular/core';
import { SrcSetValues, imageArray } from './image-array';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: SrcSetValues[] = imageArray;
  start = 0;
  end = 1;
  imagesLength = this.images.length - 1;
  constructor() {}

  ngOnInit() {}

  nextPicture() {
    if (this.start < this.imagesLength) {
      this.end++;
      this.start++;
    } else {
      this.end = 1;
      this.start = 0;
    }
  }
}
