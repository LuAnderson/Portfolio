import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ProfessionalComponent } from './professional/professional.component';
import { TrainningComponent } from './trainning/trainning.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ProfessionalComponent,
    TrainningComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
