import { Component, OnInit } from '@angular/core';

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

  handleDelete(image) {
    this.imageGalleryService.deleteImage(image);
    this.images = this.imageGalleryService.getImages();
  }

  handleClose(state) {
    this.imagePresent = false;
  }

  showImageViewer(image) {
    this.selectedImage = image;
    this.imagePresent = true;
  }
}
