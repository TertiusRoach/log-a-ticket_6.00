//--|▼| Tools (Import) |▼|--//
import { DataCreate } from 'code/tools/DataCreate';
import { DataErase } from 'code/tools/DataErase';
import { DataRead } from 'code/tools/DataRead';
import { DataUpdate } from 'code/tools/DataUpdate';

import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| Default Header |◄|--//
export namespace DefaultHeader {
  export class initiateEvents {
    constructor() {
      const loggedButton: HTMLElement = document.querySelector('#logged-tickets button');
      const logButton: HTMLElement = document.querySelector('#log-a-ticket button');
      const manageButton: HTMLElement = document.querySelector('#manage-tickets button');

      $(loggedButton).on('click', () => {
        new GetEvent.forPage('logged-main', GetPath.forHTML('main'));

        manageButton.className = '';
        loggedButton.className = 'active-page';
      });
      $(logButton).on('click', () => {
        new GetEvent.forPage('log-overlay', GetPath.forHTML('overlay'));
      });
      $(manageButton).on('click', () => {
        new GetEvent.forPage('manage-main', GetPath.forHTML('main'));

        loggedButton.className = '';
        manageButton.className = 'active-page';
      });

      /*--► console.log('--DefaultHeader.js Loaded'); ◄--*/
    }
  }
}
