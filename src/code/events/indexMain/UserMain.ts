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

//--|►| UserMain |◄|--//
export namespace UserMain {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forMain('user-main', 'assigned');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsMain: HTMLElement = indexMain.querySelector('#tickets-container');
      let openEmployees: HTMLElement = indexMain.querySelector('#open-employees');
      let assignedTab: HTMLButtonElement = indexMain.querySelector('#assigned-tab');
      let resolvedTab: HTMLButtonElement = indexMain.querySelector('#resolved-tab');
      let deletedTab: HTMLButtonElement = indexMain.querySelector('#deleted-tab');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(ticketsMain).on('click', () => {
        let activeTicket: HTMLElement = document.querySelector('.active-ticket');
        let activeStatus: String = activeTicket.classList[0];

        new GetEvent.forPage(`user-${activeStatus}`, GetPath.forHTML('overlay'));
        indexOverlay.style.display = 'grid';
      });
      $(openEmployees).on('click', () => {
        indexSidebar.style.display = 'grid';
      });

      $(assignedTab)
        .on('click', () => {
          ticketsMain.className = 'assigned-tickets';
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(resolvedTab)
        .on('click', () => {
          ticketsMain.className = 'resolved-tickets';
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
      /*--► console.log('--UserMain.js Loaded'); ◄--*/
    }
  }
}
