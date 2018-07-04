import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-listing',
  styleUrls: ['image-listing.component.scss'],
  templateUrl: 'image-listing.component.html'
})
export class ImageListingComponent implements OnInit {
  @Input() images;

  constructor() {}

  ngOnInit() {}
}
