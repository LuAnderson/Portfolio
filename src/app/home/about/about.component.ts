import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  @Input('data') content: any; // tslint:disable-line: no-input-rename

  ngOnInit(): void {
  }

}
