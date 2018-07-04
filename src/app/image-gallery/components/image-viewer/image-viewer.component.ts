import { Component, OnInit } from '@angular/core';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-viewer',
  styleUrls: ['image-viewer.component.scss'],
  template: `
    <div class="image-viewer">
      <a class="prev"><fa-icon [icon]="faAngleLeft"></fa-icon></a>

      <div class="image-viewer__content">
        <a class="delete-image"><fa-icon [icon]="faTrashAlt"></fa-icon></a>
        <img [src]="" [alt]="">
        <em></em>
      </div>

      <a class="next"><fa-icon [icon]="faAngleRight"></fa-icon></a>
    </div>
  `
})
export class ImageViewerComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faTrashAlt = faTrashAlt;

  constructor() {}

  ngOnInit() {}
}
