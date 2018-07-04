import { Component, OnInit } from '@angular/core';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-viewer',
  styleUrls: ['image-viewer.component.scss'],
  templateUrl: 'image-viewer.component.html'
})
export class ImageViewerComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faTrashAlt = faTrashAlt;

  constructor() {}

  ngOnInit() {}
}
