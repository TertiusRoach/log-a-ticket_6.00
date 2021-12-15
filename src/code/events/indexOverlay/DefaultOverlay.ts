//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

export namespace DefaultOverlay {
  export class initiateEvents {
    constructor() {
      const defaultOverlay = document.querySelector('.default-overlay');
      const managerButton = document.querySelector('#manager-tickets button');
      const employeeButton = document.querySelector('#employee-tickets button');

      new GetEvent.forPage('default-header', GetPath.forHTML('header'));
      function highlight(button: 'manager-button' | 'employee-button') {
        let managerButton = defaultOverlay.parentElement.children[1].children[0].children[0];
        let employeeButton = defaultOverlay.parentElement.children[1].children[2].children[0];

        switch (button) {
          case 'manager-button':
            managerButton.className = 'active-page';
            employeeButton.className = '';
            break;
          case 'employee-button':
            managerButton.className = '';
            employeeButton.className = 'active-page';
            break;
        }
      }

      $(managerButton).on('mouseenter', () => {
        new GetEvent.forPage('logged-main', GetPath.forHTML('main'));

        highlight('manager-button');
      });
      $(employeeButton).on('mouseenter', () => {
        new GetEvent.forPage('manage-main', GetPath.forHTML('main'));

        highlight('employee-button');
      });

      console.log('--DefaultOverlay.js Loaded');
    }
  }
}
