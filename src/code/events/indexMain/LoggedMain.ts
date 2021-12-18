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

//--|►| LoggedMain |◄|--//
export namespace LoggedMain {
  export class initiateEvents {
    constructor() {
      new DataRead.forMain('logged-main', 'pending');

      const pendingTab: HTMLButtonElement = document.querySelector('#pending-tab');
      const assignedTab: HTMLButtonElement = document.querySelector('#assigned-tab');
      const deletedTab: HTMLButtonElement = document.querySelector('#deleted-tab');

      $(pendingTab)
        .on('click', () => {
          new DataRead.forMain('logged-main', 'pending');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(assignedTab)
        .on('click', () => {
          new DataRead.forMain('logged-main', 'assigned');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(deletedTab)
        .on('click', () => {
          new DataRead.forMain('logged-main', 'deleted');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      /* ►=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=◄ */
      console.log('--LoggedMain.js Loaded');
      /* ►=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=◄ */
    }
  }
}
