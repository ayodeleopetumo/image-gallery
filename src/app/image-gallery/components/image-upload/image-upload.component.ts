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
  templateUrl: 'image-upload.component.html'
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
      reader.onload = (e: any) => {
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
