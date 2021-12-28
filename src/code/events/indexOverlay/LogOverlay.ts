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

//--|►| Log Overlay |◄|--//
export namespace LogOverlay {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let logButton: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      console.log(ticketSubject);

      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let pendingDate: HTMLElement = indexOverlay.querySelector('#pending-date');
      pendingDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
      /*
      let assignedDate: HTMLElement = indexOverlay.querySelector('#assigned-date');
      assignedDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
      */

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function closeContainer(block: String | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
        let container: HTMLElement = document.querySelector(`#${block}`);
        document.querySelector(`#${block}`).innerHTML = '';
        document.querySelector(`#${block}`).className = '';
        document.querySelector(`#${block}`).className = `default-${block.split('-')[1]}`;
        container.style.display = 'none';
      }
      function enableButton(state: String | 'log-ticket') {
        switch (state) {
          case 'log-ticket':
            /*
            let logSample: String = `<div id="log-ticket">
                                      <button class="">
                                        <i class="fad fa-ticket-alt fa-4x"></i>
                                        <h1>Log a Ticket</h1>
                                      </button>
                                    </div>`;
                                    */
            break;
        }
      }
      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(closeOverlay).on('click', () => {
        logButton.className = '';
        closeContainer('index-overlay');
        indexMain.style.display = 'grid';
      });
      $(ticketSubject).on('keyup', () => {
        let pressed: String | JQuery<String> = `${$('#ticket-subject').val()}`.split('').pop();
        console.log(pressed);
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      console.log('--LogOverlay.js Loaded');
    }
  }
}
