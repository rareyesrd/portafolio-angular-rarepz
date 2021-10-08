import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio-page',
  templateUrl: './portafolio-page.component.html',
  styleUrls: ['./portafolio-page.component.scss'],
})
export class PortafolioPageComponent implements OnInit {
  projects = [
    {
      image: './assets/images/npm.png',
      title: 'NgLeafletUniversal',
      description:
        'Open source Angular module that extends and simplifies the Leaflet implementation for Angular with SSR support.',
      more: {
        text: 'View More',
        link: 'https://www.npmjs.com/package/ng-leaflet-universal',
      },
      code: {
        text: 'GitHub',
        link: 'https://github.com/rareyesrd/ng-leaflet-universal',
      },
    },
    {
      image: './assets/images/angular.png',
      title: 'Listing page - Angular',
      description:
        'A listing page demo, getting business from an API and listing them with pagination and a comments seccion.',
      more: {
        text: 'View More',
        link: 'https://listing-page-rd-qgv2fp8uo-rareyesrd.vercel.app/',
      },
      code: {
        text: 'GitHub',
        link: 'https://github.com/rareyesrd/listingPageRd',
      },
    },
    {
      image: './assets/images/angular.png',
      title: 'Log server',
      description:
        'An Angular implementation with a Elacticsearch conexion to log on kibana.',
      more: {
        text: null,
        link: null,
      },
      code: {
        text: 'GitHub',
        link: 'https://github.com/rareyesrd/log-server',
      },
    },
    {
      image: './assets/svg/crown.svg',
      title: 'Gamer Club VIP',
      description:
        'It is still in development, it is a web application intended for gamer so that they can share their player profile with other gamer and obtain benefits by solving challenges and leveling up',
      more: {
        text: 'View More',
        link: 'https://gamerclub.vip/',
      },
      code: {
        text: 'Private repository',
        link: 'https://github.com/ErickCSS/GamerClubVIP',
      },
    },
    {
      image: './assets/images/angular.png',
      title: 'CRUD App with Angular - Firebase',
      description:
        'A simple Todo app connected with firebase for creating, updating and deleting a todo item',
      more: {
        text: 'View More',
        link: 'https://crud-angular-firebase-36p8nlsjb-rareyesrd.vercel.app/',
      },
      code: {
        text: 'GitHub',
        link: 'https://github.com/rareyesrd/Crud-angular-firebase',
      },
    },
    {
      image: './assets/images/angular.png',
      title: 'Refactoring.do',
      description:
        'For a company expert on digital solutions for upstanding organizations',
      more: {
        text: 'View More',
        link: 'https://www.refactoring.do/',
      },
      code: {
        text: 'private Repository',
        link: 'https://github.com/rareyesrd/Crud-angular-firebase',
      },
    },
  ];

  websites = [
    {
      more: {
        text: 'View preview',
        link: 'https://dazzling-babbage-7af093.netlify.app/',
      },
    },
    {
      more: {
        text: 'View preview',
        link: 'https://boring-lalande-b7c6d7.netlify.app/',
      },
    },
    {
      more: {
        text: 'View preview',
        link: 'https://compassionate-mcclintock-5fe136.netlify.app/',
      },
    },
    {
      more: {
        text: 'View preview',
        link: 'https://imecasoldadura.com/',
      },
    },
    {
      more: {
        text: 'View preview',
        link: 'https://drgarridomendez.com/',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
