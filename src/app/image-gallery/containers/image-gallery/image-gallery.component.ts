import { Component, OnInit } from '@angular/core';

import { faImages } from '@fortawesome/free-solid-svg-icons';
import { ImageGalleryService } from '../../image-gallery.service';

import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-gallery',
  styleUrls: ['image-gallery.component.scss'],
  template: `
    <div class="container">
      <header>
        <h3><fa-icon [icon]="faImages"></fa-icon> Image Gallery</h3>
        <app-image-upload (imageUpload)="handleUpload($event)"></app-image-upload>
      </header>
      <app-image-listing [images]="images"></app-image-listing>
      <app-pagination [imageList]="images"></app-pagination>
    </div>
  `
})
export class ImageGalleryComponent implements OnInit {
  faImages = faImages;
  images: Image[];

  constructor(private imageGalleryService: ImageGalleryService) {}

  ngOnInit() {
    if (localStorage.getItem('images') === null) {
      const initialImages = this.imageGalleryService.getInitialImages();
      localStorage.setItem('images', JSON.stringify(initialImages));
      this.images = initialImages;
    } else {
      this.images = JSON.parse(localStorage.getItem('images'));
    }
  }

  handleUpload(image) {
    this.imageGalleryService.uploadImage(image);
    this.images = this.imageGalleryService.getImages();
  }
}