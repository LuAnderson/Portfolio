import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  deviceInfo = null;

  constructor(private deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
  }

  showMobileMenu() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    if (this.deviceService.isMobile()) {
      const navbar = document.getElementById('navbar');
      navbar.classList.toggle('active');
    }

    return;
  }
}
