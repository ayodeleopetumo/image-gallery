import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-listing',
  styleUrls: ['image-listing.component.scss'],
  template: `
    <section class="image-listings">
      <ul *ngIf="images?.length; else noImages">
        <li *ngFor="let image of images">
          <a href="#"><img src={{ image.url }} alt="Blank Image"></a>
        </li>
      </ul>
    </section>
    <ng-template #noImages><p>No images to display. Click the (+) button to add image</p></ng-template>
  `
})
export class ImageListingComponent implements OnInit {
  @Input() images: Image[];

  constructor() {}

  ngOnInit() {}
}
