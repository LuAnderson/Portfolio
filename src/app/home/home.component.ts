import { Component, OnInit, Input } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  // tslint:disable-next-line: no-input-rename
  @Input('master') content: any;
  ngOnInit(): void {
    AOS.init();
  }
}
