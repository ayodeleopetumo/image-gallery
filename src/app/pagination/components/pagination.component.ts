import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  styleUrls: ['pagination.component.scss'],
  templateUrl: 'pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() loading: boolean;
  @Input() pagesToShow: number;

  @Output() goPrev: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() goNext: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() goPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() checkPages: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  lastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.count / this.perPage);
    const pages: number[] = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }

    pages.sort((a, b) => a - b);
    this.checkPages.emit(pages);
    return pages;
  }
}
