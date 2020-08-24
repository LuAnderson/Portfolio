import { Component, OnInit, Input } from '@angular/core';
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

  @Input('data') content: any; // tslint:disable-line: no-input-rename

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
