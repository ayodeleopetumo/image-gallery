import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-listing',
  styleUrls: ['image-listing.component.scss'],
  templateUrl: 'image-listing.component.html'
})
export class ImageListingComponent implements OnInit {
  @Input() images: Image[];
  @Output() showSelected: EventEmitter<Image> = new EventEmitter<Image>();

  constructor() {}

  ngOnInit() {}

  setSelectedImage(image) {
    this.showSelected.emit(image);
  }
}
