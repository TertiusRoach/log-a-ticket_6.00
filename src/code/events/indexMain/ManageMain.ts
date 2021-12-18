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
//--|►| Manage Main |◄|--//
export namespace ManageMain {
  export class initiateEvents {
    constructor() {
      const userSelect: HTMLSelectElement = document.querySelector('#user-form select');
      const userName: String = userSelect.selectedOptions[0].textContent;
      const ticketsMain: HTMLDivElement = document.querySelector('#tickets-container');
      const ticketsData: HTMLDivElement = document.querySelector('#tickets-data');

      const pendingTab: HTMLButtonElement = document.querySelector('#pending-tab');
      const assignedTab: HTMLButtonElement = document.querySelector('#assigned-tab');
      const deletedTab: HTMLButtonElement = document.querySelector('#deleted-tab');

      $(pendingTab)
        .on('click', () => {
          new DataRead.forMain('manage-main', 'pending');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(deletedTab)
        .on('click', () => {
          new DataRead.forMain('manage-main', 'deleted');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      /* ►=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=◄ */
      new DataRead.forMain('manage-main', 'pending');

      console.log('--ManageMain.js Loaded');
      /* ►=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=◄ */
    }
  }
}
