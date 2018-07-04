import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImageGalleryService {
  constructor(private http: Http) {}
}
