import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  deviceInfo = null;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: this.deviceService.isMobile() ? 2 : 3,
    keyboard: true,
    mousewheel: false,
    navigation: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: true,
  };

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
  }

}
