import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-merger',
  templateUrl: './merger.component.html',
  styleUrls: ['./merger.component.css'],
})
export class MergerComponent implements OnInit {
  @Input() data: any;
  backgroundcolor: any;

  constructor() {}

  ngOnInit(): void {
    this.backgroundcolor = `linear-gradient(to ${this.data.direction} bottom, ${this.data.color1} 50%, ${this.data.color2} 50%)`;
  }
}
