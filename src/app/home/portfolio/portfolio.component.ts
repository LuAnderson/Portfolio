import { Component, OnInit, ViewChild } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    navigation: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
