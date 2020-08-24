import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor() { }
  @Input('data') content: any; // tslint:disable-line: no-input-rename

  ngOnInit() {
  }

}
