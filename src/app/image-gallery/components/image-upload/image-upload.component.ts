import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-image-upload',
  styleUrls: ['image-upload.component.scss'],
  template: `
    <a title="Add image" (click)="toggleImageUpload()"><fa-icon [icon]="faPlus"></fa-icon></a>
    <div class="upload-form"
      [style.opacity]="(showForm ? '1' : '0')"
      [style.transform]="(showForm ? 'translateY(0)' : 'translateY(-20px)')"
      [style.z-index]="(showForm ? '1' : '-1')">
      <form (ngSubmit)="processUpload()">
        <input type='file' id="uploadBannerImage" (change)="previewImage(imageInput)" #imageInput required>
        <div class="image-preview" *ngIf="imagePresent">
          <p>Preview:</p>
          <img [src]="imagePreview" alt="" id="preview">
        </div>
        <button type="submit" [disabled]="!imagePresent">Upload Image</button>
        <button type="cancel" (click)="clearForm()">Cancel</button>
      </form>
    </div>
  `
})
export class ImageUploadComponent implements OnInit {
  faPlus = faPlus;
  imagePresent = false;
  showForm = false;
  imagePreview: string;
  imageObj: Image;

  @Output() imageUpload: EventEmitter<Image> = new EventEmitter<Image>();
  @ViewChild('imageInput') imageInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  toggleImageUpload() {
    this.showForm = !this.showForm;
  }

  previewImage(image) {
    if (image.files && image.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(image.files[0]);
      reader.onload = e => {
        if (e.target.result) {
          this.imagePresent = true;
          this.imagePreview = e.target.result;
        }
      };
    }
  }

  processUpload() {
    if (this.imagePreview) {
      const imageName = this.imageInput.nativeElement.value.replace(
        /.*[\/\\]/,
        ''
      );
      this.imageObj = {
        url: this.imagePreview,
        imageName: imageName.replace(/\.[^/.]+$/, ''),
        dateCreated: new Date()
      };

      this.imageUpload.emit(this.imageObj);
      alert('Image has been uploaded');
      this.clearForm();
    }
  }

  clearForm() {
    this.showForm = false;
    this.imagePreview = '';
    this.imagePresent = false;
    this.imageInput.nativeElement.value = '';
  }
}
