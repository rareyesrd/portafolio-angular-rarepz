import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HomePageComponent,
  HeroComponent,
  ExperienceComponent,
  SkillsComponent,
} from '@home-page';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
