import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../image-gallery/models/image.interface';

@Component({
  selector: 'app-pagination',
  styleUrls: ['pagination.component.scss'],
  templateUrl: 'pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() imageList: Image[];

  constructor() {}

  ngOnInit() {}
}
