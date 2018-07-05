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
    return this.perPage * this.page > this.count;
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.count / this.perPage);
    const page = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    const times = pagesToShow - 1;

    pages.push(page);

    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < totalPages) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }

    pages.sort((a, b) => a - b);
    console.log(pages);
    return pages;
  }
}
