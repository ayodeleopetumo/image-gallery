import { Component, OnInit, ViewChild } from '@angular/core';

import { faImages } from '@fortawesome/free-solid-svg-icons';
import { ImageGalleryService } from '../../image-gallery.service';

import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-gallery',
  styleUrls: ['image-gallery.component.scss'],
  templateUrl: 'image-gallery.component.html'
})
export class ImageGalleryComponent implements OnInit {
  faImages = faImages;
  images: Image[];
  selectedImage: Image;
  imagePresent: boolean;
  defaultImages: Image[];
  temp: Image[];

  // Pagination Info
  total = 0;
  page = 1;
  limit = 3;
  startIndex = 0;
  endIndex = this.limit;

  constructor(private imageGalleryService: ImageGalleryService) {}

  ngOnInit() {
    this.initialiseGallery();
  }

  initialiseGallery() {
    if (localStorage.getItem('images') === null) {
      this.defaultImages = this.imageGalleryService.getDefaultImages();
      localStorage.setItem('images', JSON.stringify(this.defaultImages));
    }

    this.getImages();
  }

  getImages(updated?: boolean): void {
    if (!this.temp || updated) {
      this.temp = JSON.parse(localStorage.getItem('images'));
    }
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;

    this.images = this.temp.slice(start, end);
    this.total = this.temp.length;
  }

  goToPage(n: number): void {
    this.page = n;
    this.getImages();
  }

  onNext(): void {
    this.page++;
    this.getImages();
  }

  onPrev(): void {
    this.page--;
    this.getImages();
  }

  handleUpload(image): void {
    this.imageGalleryService.uploadImage(image);
    this.getImages(true);
  }

  handleDelete(image): void {
    this.imageGalleryService.deleteImage(image);
    this.getImages(true);
  }

  handleClose(state): void {
    this.imagePresent = false;
  }

  showImageViewer(image): void {
    this.selectedImage = image;
    this.imagePresent = true;
  }
}
