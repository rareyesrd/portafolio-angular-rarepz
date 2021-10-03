import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ExperienceComponent,
  HomePageComponent,
  SkillsComponent,
  GithubComponent,
  AboutComponent,
  HeroComponent,
} from '@home-page';

@NgModule({
  declarations: [
    ExperienceComponent,
    HomePageComponent,
    SkillsComponent,
    GithubComponent,
    AboutComponent,
    HeroComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
