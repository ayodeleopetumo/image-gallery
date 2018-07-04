import { Component, OnInit } from '@angular/core';

import { faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-gallery',
  styleUrls: ['image-gallery.component.scss'],
  template: `
    <div class="container">
      <header>
        <h3><fa-icon [icon]="faImages"></fa-icon> Image Gallery</h3>
        <app-image-upload></app-image-upload>
      </header>
      <app-image-listing></app-image-listing>
      <app-pagination></app-pagination>
    </div>
  `
})
export class ImageGalleryComponent implements OnInit {
  faImages = faImages;

  constructor() {}

  ngOnInit() {}
}
