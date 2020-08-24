import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  @Input('data') content: any; // tslint:disable-line: no-input-rename

  ngOnInit() {
  }

}
