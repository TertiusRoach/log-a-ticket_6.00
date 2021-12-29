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
      new DataRead.forOverlay('log-overlay');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let activeButton: HTMLButtonElement = indexHeader.querySelector('.active-page');
      let logAticket: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let logButton: HTMLElement = indexOverlay.querySelector('#log-ticket button');
      let assignButton: HTMLElement = indexOverlay.querySelector('#assign-ticket button');
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      let ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');
      let departmentForm: HTMLFormElement = indexOverlay.querySelector('#department-form');
      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');

      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let pendingDate: HTMLElement = indexOverlay.querySelector('#pending-date');
      pendingDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
      /*
      let assignedDate: HTMLElement = indexOverlay.querySelector('#assigned-date');
      assignedDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
      */

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function checkState(button: String | 'log-ticket') {
        var subjectJQ: String | JQuery<String> = `${$('#ticket-subject').val()}`;
        var descriptionJQ: String | JQuery<String> = `${$('#ticket-description').val()}`;

        switch (button) {
          case 'log-ticket':
            if (subjectJQ === '' || descriptionJQ === '') {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
            } else if (subjectJQ !== '' && descriptionJQ === '') {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
            } else if (subjectJQ === '' && descriptionJQ !== '') {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
            } else {
              logButton.className = '';
              assignButton.className = '';
            }
            break;
        }
      }
      function closeContainer(block: String | 'index-body' | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
        let container: HTMLElement = document.querySelector(`#${block}`);
        let page: String = block.split('-')[1];
        document.querySelector(`#${block}`).innerHTML = '';
        container.style.display = 'none';
        activeButton.className = '';
        document.querySelector(`#${block}`).className = `default-${page}`;
      }
      function toggleButton(colleague: String | 'select-colleague') {
        if (colleague !== 'select-colleague') {
          logButton.parentElement.style.display = 'none';
          assignButton.parentElement.style.display = 'grid';
        }
      }

      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(colleagueSelect).on('change', () => {
        checkState('log-ticket');
        toggleButton(colleagueSelect.value);
      });
      $(ticketSubject).on('keyup', () => {
        checkState('log-ticket');
        toggleButton(colleagueSelect.value);
      });
      $(ticketDescription).on('keyup', () => {
        checkState('log-ticket');
        toggleButton(colleagueSelect.value);
      });

      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
        indexMain.style.display = 'grid';
      });

      /*
      $(departmentSelect).on('change', () => {
        checkState('log-ticket');
        toggleButton(colleagueSelect.value);
      });
      */

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      console.log('--LogOverlay.js Loaded');
    }
  }
}
