import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.css'],
})
export class DiapoComponent implements OnInit {
  @Input() data: any;
  direction = '';

  constructor() {}

  ngOnInit(): void {
    if (this.data.reverse) {
      this.direction = 'info-container-reverse';
    } else {
      this.direction = 'info-container';
    }
  }
}
