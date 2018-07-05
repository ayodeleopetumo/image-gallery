import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-viewer',
  styleUrls: ['image-viewer.component.scss'],
  templateUrl: 'image-viewer.component.html'
})
export class ImageViewerComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faTrashAlt = faTrashAlt;

  @Input() images: Image[];
  @Input() imageSelected: Image;
  @Output() doDelete: EventEmitter<Image> = new EventEmitter<Image>();
  @Output() closeViewer: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  doNavigate(direction) {
    let forward: boolean;
    direction === 'next' ? (forward = true) : (forward = false);
    const index = this.images.indexOf(this.imageSelected) + (forward ? 1 : -1);
    if (index >= 0 && index < this.images.length) {
      this.imageSelected = this.images[index];
    }
  }

  doRemove(image) {
    const confirmation = confirm(
      'You are about to delete this image, continue?'
    );
    if (confirmation) {
      this.doDelete.emit(image);
      this.doClose();
      alert('Image deleted');
    }
  }

  doClose() {
    this.closeViewer.emit(false);
  }
}
