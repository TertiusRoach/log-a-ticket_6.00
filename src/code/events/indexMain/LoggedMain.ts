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
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forMain('logged-main', 'pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const loggedButton: HTMLElement = document.querySelector('#logged-tickets button');
      const manageButton: HTMLElement = document.querySelector('#manage-tickets button');

      const openCoworkers: HTMLButtonElement = document.querySelector('#open-coworkers');

      const pendingTab: HTMLButtonElement = document.querySelector('#pending-tab');
      const assignedTab: HTMLButtonElement = document.querySelector('#assigned-tab');
      const deletedTab: HTMLButtonElement = document.querySelector('#deleted-tab');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(openCoworkers).on('mouseenter', () => {
        let openSidebar: Element = openCoworkers.children[0];
        $(openSidebar).on('click', () => {
          /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
          loggedButton.className = '';
          manageButton.className = '';

          /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
          new GetEvent.forPage('coworker-main', GetPath.forHTML('main'));
        });
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
