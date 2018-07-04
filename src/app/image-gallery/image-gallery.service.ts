import { Injectable } from '@angular/core';

import { Data } from './models/data.model';
import { Image } from './models/image.interface';

@Injectable()
export class ImageGalleryService {
  data: any;
  images: Image[];

  constructor() {}

  getInitialImages() {
    this.data = Data;
    return this.data;
  }

  getImages() {
    return JSON.parse(localStorage.getItem('images'));
  }

  uploadImage(image) {
    this.images = JSON.parse(localStorage.getItem('images'));
    this.images.push(image);
    localStorage.setItem('images', JSON.stringify(this.images));
  }

  deleteImage(image) {
    this.images = JSON.parse(localStorage.getItem('images'));
    this.images = this.images.filter(img => img.imageName !== image.imageName);
    localStorage.setItem('images', JSON.stringify(this.images));
  }
}
