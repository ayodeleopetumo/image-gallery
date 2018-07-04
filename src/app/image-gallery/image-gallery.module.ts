import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from '../pagination/pagination.module';

import { ImageGalleryComponent } from './containers/image-gallery/image-gallery.component';
import { ImageListingComponent } from './components/image-listing/image-listing.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FontAwesomeModule,
    PaginationModule
  ],
  exports: [ImageGalleryComponent],
  declarations: [
    ImageGalleryComponent,
    ImageListingComponent,
    ImageViewerComponent,
    ImageUploadComponent
  ],
  providers: []
})
export class ImageGalleryModule {}
