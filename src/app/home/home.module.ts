import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TrainningComponent } from './trainning/trainning.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ProfessionalComponent,
    PortfolioComponent,
    TrainningComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
