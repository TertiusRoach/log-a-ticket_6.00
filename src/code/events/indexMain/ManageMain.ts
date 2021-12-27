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
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forMain('manage-main', 'pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
      let userName: String = userSelect.selectedOptions[0].textContent;

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let openUser: HTMLButtonElement = indexMain.querySelector('#open-employees');
      let pendingTab: HTMLButtonElement = indexMain.querySelector('#pending-tab');
      let assignedTab: HTMLButtonElement = indexMain.querySelector('#assigned-tab');
      let deletedTab: HTMLButtonElement = indexMain.querySelector('#deleted-tab');
      let ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(ticketsMain).on('click', () => {
        let activeTicket: HTMLElement = document.querySelector('.active-ticket');
        let activeStatus: String = activeTicket.classList[0];

        new GetEvent.forPage(`manage-${activeStatus}`, GetPath.forHTML('overlay'));
        indexOverlay.style.display = 'grid';
      });
      $(openUser).on('click', () => {
        /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
        loggedButton.className = '';
        manageButton.className = '';

        /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
        new GetEvent.forPage('user-main', GetPath.forHTML('main'));
      });

      $(pendingTab)
        .on('click', () => {
          ticketsMain.className = 'pending-tickets';
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(deletedTab)
        .on('click', () => {
          ticketsMain.className = 'deleted-tickets';
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      /*--► console.log('--ManageMain.js Loaded'); ◄--*/
    }
  }
}
