import { Get } from 'main';

//--|►| Default Overlay |◄|--//
export namespace DefaultOverlay {
  function tag(element: 'default-overlay' | 'manager-button' | 'employee-button') {
    switch (element) {
      case 'default-overlay':
        return document.querySelector('.default-overlay');
      case 'manager-button':
        return document.querySelector('#manager-tickets button');
      case 'employee-button':
        return document.querySelector('#employee-tickets button');
    }
  }
  export class initiateEvents {
    constructor() {
      console.log(tag('default-overlay'));

      console.log('--DefaultOverlay.js Loaded');
    }
  }
}
