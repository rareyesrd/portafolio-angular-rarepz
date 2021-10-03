import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      percentage: 85,
      technology: 'Javascript',
      stroke: '#EFD82F',
    },
    {
      percentage: 80,
      technology: 'Typescript',
      stroke: '#2F74C0',
    },
    {
      percentage: 85,
      technology: 'Angular',
      stroke: '#D8392F',
    },
    {
      percentage: 70,
      technology: 'Docker',
      stroke: '#3091E6',
    },
    {
      percentage: 45,
      technology: 'Azure',
      stroke: '#2D85D0',
    },
    {
      percentage: 90,
      technology: 'Git',
      stroke: '#E84D33',
    },
    {
      percentage: 60,
      technology: 'React',
      stroke: '#5FD3F3',
    },
    {
      percentage: 65,
      technology: 'Vue',
      stroke: '#58B380',
    },
    // {
    //   percentage: 45,
    //   technology: 'Azure',
    // },
    // {
    //   percentage: 45,
    //   technology: 'Azure',
    // },
    // {
    //   percentage: 45,
    //   technology: 'Azure',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
