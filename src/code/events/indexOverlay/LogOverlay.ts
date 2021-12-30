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
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let logButton: HTMLElement = indexOverlay.querySelector('#log-ticket button');
      let assignButton: HTMLElement = indexOverlay.querySelector('#assign-ticket button');
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      let ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');
      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let colleagueSelect: HTMLSelectElement = indexOverlay.querySelector('#colleague-form select');
      let pendingMark: HTMLDivElement = indexOverlay.querySelector('.pending-mark');
      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');
      let pendingDate: HTMLElement = indexOverlay.querySelector('#pending-date');
      let assignedDate: HTMLElement = indexOverlay.querySelector('#assigned-date');
      let mainButton: String = '[id*="-ticket"] button';
      pendingDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function checkState(button: String | 'log-ticket') {
        var subjectJQ: String | JQuery<String> = `${$('#ticket-subject').val()}`;
        var descriptionJQ: String | JQuery<String> = `${$('#ticket-description').val()}`;

        switch (button) {
          case 'log-ticket':
            if (colleagueSelect.length === 1) {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
              pendingDate.className = 'disabled-text';
              assignedDate.className = 'disabled-text';
            } else if (subjectJQ === '' || descriptionJQ === '') {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
              pendingDate.className = 'disabled-text';
              assignedDate.className = 'disabled-text';
            } else if (subjectJQ !== '' && descriptionJQ === '') {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
              pendingDate.className = 'disabled-text';
              assignedDate.className = 'disabled-text';
            } else if (subjectJQ === '' && descriptionJQ !== '') {
              logButton.className = 'disabled-button';
              assignButton.className = 'disabled-button';
              pendingDate.className = 'disabled-text';
              assignedDate.className = 'disabled-text';
            } else if (colleagueSelect.value === 'select-colleague') {
              logButton.className = '';
              assignButton.className = 'disabled-button';
              pendingDate.className = '';
              assignedDate.className = 'disabled-text';
            } else if (colleagueSelect.value !== 'select-colleague') {
              assignedDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
            } else {
              logButton.className = '';
              assignButton.className = '';
              pendingDate.className = '';
              assignedDate.className = '';
            }
            break;
        }
      }
      function closeContainer(block: String | 'index-body' | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
        let container: HTMLElement = document.querySelector(`#${block}`);
        let page: String = block.split('-')[1];
        container.style.display = 'none';
        logAticket.className = '';
        container.innerHTML = '';
        container.className = `default-${page}`;
      }
      function toggleButton(colleague: String | 'select-colleague') {
        if (colleague !== 'select-colleague') {
          logButton.parentElement.style.display = 'none';
          assignButton.parentElement.style.display = 'grid';

          pendingMark.style.background = `${GetColor.primaryMedium()}`;
          assignedMark.style.background = `${GetColor.primaryDark()}`;
        }
      }

      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(mainButton).on('click', () => {
        if (logButton.className !== 'disabled-button') {
          switch (assignButton.className) {
            case 'disabled-button':
              new DataUpdate.forTicket('pending');
              break;
            default:
              new DataUpdate.forTicket('assigned');
          }
        }
        if ($(ticketSubject).val() === '') {
          ticketSubject.style.border = `2px solid ${GetColor.secondaryDark()}`;
        } else {
          ticketSubject.style.border = '';
        }
        if ($(ticketDescription).val() === '') {
          ticketDescription.style.border = `2px solid ${GetColor.secondaryDark()}`;
        } else {
          ticketDescription.style.border = '';
        }
      });

      $(assignButton)
        .on('mouseenter', () => {
          if (assignButton.className !== 'disabled-button') {
            assignButton.style.color = `${GetColor.primaryLight()}`;
          } else {
            assignButton.style.color = '';
          }
        })
        .on('mouseleave', () => {
          assignButton.style.color = '';
        });

      $(departmentSelect)
        .on('change', () => {
          assignedDate.innerText = undefined;
          assignedDate.style.display = 'none';
        })
        .on('click', () => {
          if (colleagueSelect.length === 1) {
            logButton.className = 'disabled-button';
            assignButton.className = 'disabled-button';
          } else {
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          }
        });

      $(colleagueSelect)
        .on('change', () => {
          assignedDate.innerText = UseDatefy.forToday('Weekday, 00 Month YYYY');
          assignedDate.style.display = 'grid';
          assignedDate.className = '';
          assignButton.className = '';

          checkState('log-ticket');
          toggleButton(colleagueSelect.value);
        })
        .on('click', () => {
          if (colleagueSelect.length === 1) {
            logButton.className = 'disabled-button';
            assignButton.className = 'disabled-button';
          } else {
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          }
        });

      $(ticketSubject)
        .on('keydown', () => {
          var subjectJQ: String | JQuery<String> = `${$('#ticket-subject').val()}`;
          var descriptionJQ: String | JQuery<String> = `${$('#ticket-description').val()}`;
          if (subjectJQ === '' || descriptionJQ === '') {
            logButton.className = 'disabled-button';
            assignButton.className = 'disabled-button';
            pendingDate.className = 'disabled-text';
            assignedDate.className = 'disabled-text';
          } else {
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          }
        })
        .on('keyup', () => {
          var subjectJQ: String | JQuery<String> = `${$('#ticket-subject').val()}`;
          var descriptionJQ: String | JQuery<String> = `${$('#ticket-description').val()}`;
          if (subjectJQ !== '' || descriptionJQ !== '') {
            if (colleagueSelect.value === 'select-colleague') {
              logButton.className = '';
              pendingDate.className = '';
            } else {
              logButton.className = '';
              pendingDate.className = '';
              assignButton.className = '';
              assignedDate.className = '';
            }
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          } else if (colleagueSelect.length === 1) {
            logButton.className = 'disabled-button';
            assignButton.className = 'disabled-button';
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          } else {
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          }
          if ($(ticketSubject).val() === '') {
            ticketSubject.style.border = `2px solid ${GetColor.secondaryDark()}`;
          } else {
            ticketSubject.style.border = '';
          }
        });
      $(ticketDescription)
        .on('keydown', () => {
          var subjectJQ: String | JQuery<String> = `${$('#ticket-subject').val()}`;
          var descriptionJQ: String | JQuery<String> = `${$('#ticket-description').val()}`;
          if (subjectJQ === '' || descriptionJQ === '') {
            logButton.className = 'disabled-button';
            assignButton.className = 'disabled-button';
            pendingDate.className = 'disabled-text';
            assignedDate.className = 'disabled-text';
          } else {
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          }
          if ($(ticketDescription).val() === '') {
            ticketDescription.style.border = '';
          }
        })
        .on('keyup', () => {
          var subjectJQ: String | JQuery<String> = `${$('#ticket-subject').val()}`;
          var descriptionJQ: String | JQuery<String> = `${$('#ticket-description').val()}`;
          if (subjectJQ !== '' || descriptionJQ !== '') {
            if (colleagueSelect.value === 'select-colleague') {
              logButton.className = '';
              pendingDate.className = '';
            } else {
              logButton.className = '';
              pendingDate.className = '';
              assignButton.className = '';
              assignedDate.className = '';
            }
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          } else if (colleagueSelect.length === 1) {
            logButton.className = 'disabled-button';
            assignButton.className = 'disabled-button';
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          } else {
            checkState('log-ticket');
            toggleButton(colleagueSelect.value);
          }
          if ($(ticketDescription).val() === '') {
            ticketDescription.style.border = `2px solid ${GetColor.secondaryDark()}`;
          } else {
            ticketDescription.style.border = '';
          }
        });
      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
        indexMain.style.display = 'grid';
      });
      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      checkState('log-ticket');
      console.log('--LogOverlay.js Loaded');
    }
  }
}
