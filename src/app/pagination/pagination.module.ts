import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './components/pagination.component';

@NgModule({
  imports: [CommonModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
  providers: []
})
export class PaginationModule {}
