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

//--|►| Logged Pending |◄|--//
export namespace LoggedPending {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forOverlay('logged-pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let logAticket: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');
      let activeTicket = ticketsMain.querySelector('.active-ticket');
      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');

      let assignButton: HTMLButtonElement = indexOverlay.querySelector('#assign-ticket button');
      let deleteButton: HTMLButtonElement = indexOverlay.querySelector('#delete-ticket button');
      let moveButton: HTMLButtonElement = indexOverlay.querySelector('#move-ticket button');
      let saveButton: HTMLButtonElement = indexOverlay.querySelector('#save-ticket button');

      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');

      /*
      
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      let ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');



      let mainButton: String = '[id*="-ticket"] button';
      pendingDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
      */

      let pendingMark: HTMLDivElement = indexOverlay.querySelector('.pending-mark');
      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');
      let deletedMark: HTMLDivElement = indexOverlay.querySelector('.deleted-mark');

      let pendingDate: HTMLElement = indexOverlay.querySelector('#pending-date');
      let assignedDate: HTMLElement = indexOverlay.querySelector('#assigned-date');
      let deletedDate: HTMLElement = indexOverlay.querySelector('#deleted-date');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function closeContainer(block: String | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
        let container: HTMLElement = document.querySelector(`#${block}`);
        container.innerHTML = '';
        container.className = '';
        container.className = `default-${block.split('-')[1]}`;
        container.style.display = 'none';

        var status: String = activeTicket.classList[0];
        activeTicket.className = `${status}`;
        indexMain.style.display = 'grid';
      }
      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      console.log(assignButton);

      $(colleagueSelect).on('click', () => {
        if (colleagueSelect.value === 'select-colleague') {
          assignButton.parentElement.style.display = 'none';
          deleteButton.parentElement.style.display = 'flex';
          moveButton.parentElement.style.display = 'none';
          saveButton.parentElement.style.display = 'none';
        } else {
          assignButton.parentElement.style.display = 'flex';
          deleteButton.parentElement.style.display = 'none';
          moveButton.parentElement.style.display = 'none';
          saveButton.parentElement.style.display = 'none';
        }
      });

      $(deleteButton)
        .on('mouseenter', () => {
          deletedMark.style.background = `${GetColor.primaryDark()}`;

          pendingMark.style.background = `${GetColor.primaryMedium()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;

          deleteButton.style.color = `${GetColor.deletedDefault()}`;
          deletedDate.textContent = UseDatefy.forToday('Weekday, 00 Month YYYY');
          deletedDate.style.display = 'grid';
          deletedDate.className = '';
        })
        .on('mouseleave', () => {
          pendingMark.style.background = `${GetColor.primaryDark()}`;
          assignedMark.style.background = `${GetColor.primaryMedium()}`;

          deletedMark.style.background = `${GetColor.primaryMedium()}`;

          deleteButton.style.color = '';
          deletedDate.style.display = 'none';
          deletedDate.textContent = 'undefined';
          deletedDate.className = 'disabled-text';
        });
      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      console.log('--LoggedPending.js Loaded');
    }
  }
}
