import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  profesionalExperience = [
    {
      time: 'Since Aug 2021',
      position: 'UI User Interface Manager,',
      place: 'Refactoring.do',
      typeOfWork: 'Remote',
      description:
        'Managing the design and development of web-based technical solutions that engage users and meet business requirements.',
    },

    {
      time: 'Since Jan 2021',
      position: 'Front end Developer,',
      place: 'Caribe Media Inc',
      typeOfWork: 'Presential',
      description:
        'Working on a web app project in a highly collaborative work environment using Scrum and Angular 11+ for development.',
    },

    {
      time: 'May 2019 – Jan 2021',
      position: 'Web designer,',
      place: 'Caribe Media Inc',
      typeOfWork: 'Presential',
      description:
        'Performing as a creator of web pages, understanding the needs of clients and translating them digitally.',
    },
  ];

  educationalExperience = [
    {
      time: 'Since 2016',
      title: 'Computer engineering',
      place: 'Technological University of Santiago (UTESA).',
    },

    {
      time: '2017-2018',
      title: 'English Immersion Program',
      place: 'Universidad Acción Pro-Educación y Cultura (UNAPEC).',
    },

    {
      time: '2017',
      title: 'AP Computer Science Principles',
      place: 'Online at CodeHS, Udemy, Coursera, Codecademy and YouTube.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
