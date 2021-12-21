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
import { getScript } from 'jquery';

//--|►| LoggedMain |◄|--//
export namespace LoggedMain {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forMain('logged-main', 'pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let openCoworkers: HTMLButtonElement = indexMain.querySelector('#open-coworkers');
      let pendingTab: HTMLButtonElement = indexMain.querySelector('#pending-tab');
      let assignedTab: HTMLButtonElement = indexMain.querySelector('#assigned-tab');
      let deletedTab: HTMLButtonElement = indexMain.querySelector('#deleted-tab');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(openCoworkers).on('click', () => {
        loggedButton.className = '';
        manageButton.className = '';
        new GetEvent.forPage('coworker-main', GetPath.forHTML('main'));
      });

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

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      /*--► console.log('--LoggedMain.js Loaded'); ◄--*/
    }
  }
}
