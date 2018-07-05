import { Injectable } from '@angular/core';

import { Data } from './models/data.model';
import { Image } from './models/image.interface';

@Injectable()
export class ImageGalleryService {
  data: any;
  images: Image[];

  constructor() {}

  getDefaultImages(): Image[] {
    return (this.data = Data);
  }

  checkLocalStorage(): Image[] {
    localStorage.getItem('images') !== null
      ? (this.images = JSON.parse(localStorage.getItem('images')))
      : (this.images = []);

    return this.images;
  }

  uploadImage(image): void {
    const imageStore = this.checkLocalStorage();
    imageStore.push(image);
    localStorage.setItem('images', JSON.stringify(imageStore));
  }

  deleteImage(image): void {
    let imageStore = this.checkLocalStorage();
    imageStore = imageStore.filter(img => img.imageName !== image.imageName);
    localStorage.setItem('images', JSON.stringify(imageStore));
  }
}
