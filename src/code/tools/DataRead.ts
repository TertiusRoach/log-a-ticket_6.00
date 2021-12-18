//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| DataRead (Tool) |◄|--//
export namespace DataRead {
  export class forMain {
    constructor(page: 'colleague-main' | 'coworker-main' | 'logged-main' | 'manage-main' | 'user-main', status: 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything') {
      const loggedHeader: HTMLElement = document.querySelector('#logged-header h1');
      const manageHeader: HTMLElement = document.querySelector('#manage-header h1');
      const ticketsMain: HTMLDivElement = document.querySelector('#tickets-container');
      const userSelect: HTMLSelectElement = document.querySelector('#user-form select');
      const employeesData: HTMLDivElement = document.querySelector('#employees-data');
      const ticketsData: HTMLDivElement = document.querySelector('#tickets-data');

      function findDepartment(userName: String) {
        let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = employeesCollection[i].children[0].textContent;
          let middleName: String = employeesCollection[i].children[1].textContent;
          let lastName: String = employeesCollection[i].children[2].textContent;
          let department: String = employeesCollection[i].children[3].textContent;

          let employeeName: String = `${firstName} ${lastName}`;
          if (employeeName === userName) {
            return department;
          }
        }
      }

      let userName: String = userSelect.selectedOptions[0].textContent;
      let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
      let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
      let ticketsTotal: Number = ticketsCollection.length;
      let userDepartment: String = findDepartment(userName);

      switch (page) {
        case 'colleague-main':
          break;
        case 'coworker-main':
          break;
        case 'logged-main':
          ticketsMain.innerHTML = '';
          ticketsMain.className = '';
          ticketsMain.className = `${status}-tickets`;
          loggedHeader.innerHTML = `${userName}`;
          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo: HTMLCollection | any = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            let receiverDefault = () => {
              switch (receiverName) {
                case `${undefined}`:
                  return receiverDepartment;
                default:
                  return receiverName;
              }
            };

            if (senderName === userName && ticketStatus.toLowerCase() === status) {
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                    <p class="shortdate">${dateShort}</p>
                    <p class="subject">${subjectText}</p>
                    <p class="receiver">${receiverDefault()}</p>
                  </article>`
              );
            }
          }
          break;
        case 'manage-main':
          manageHeader.innerHTML = `${findDepartment(userName)}`;
          ticketsMain.innerHTML = '';
          ticketsMain.className = '';
          ticketsMain.className = `${status}-tickets`;
          for (let i = 0; i < ticketsTotal; i++) {
            const ticketInfo = ticketsCollection[i].children[1];
            let ticketStatus: String = ticketInfo.children[0].textContent.toLowerCase();
            let ticketRating: String = ticketInfo.children[1].textContent;
            let subjectText: String = ticketInfo.children[2].textContent;
            let descriptionText: String = ticketInfo.children[3].textContent;
            let senderName: String = ticketInfo.children[4].textContent;
            let senderDepartment: String = ticketInfo.children[5].textContent;
            let receiverName: String = ticketInfo.children[6].textContent;
            let receiverDepartment: String = ticketInfo.children[7].textContent;
            let dateShort: String = ticketInfo.children[8].textContent;
            let datePending: String = ticketInfo.children[9].textContent;
            let dateAssigned: String = ticketInfo.children[10].textContent;
            let dateResolved: String = ticketInfo.children[11].textContent;
            let noteResolved: String = ticketInfo.children[12].textContent;
            let dateDeleted: String = ticketInfo.children[13].textContent;
            let noteDeleted: String = ticketInfo.children[14].textContent;

            if (userDepartment === receiverDepartment && receiverName === `${undefined}`) {
              //manage-main
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                      <p class="shortdate">${dateShort}</p>
                      <p class="subject">${subjectText}</p>
                      <p class="sender">${senderName}</p>
                    </article>`
              );
            }
          }
          break;
        case 'user-main':
          break;
      }
    }
  }
  export class forSidebar {
    constructor(page: 'coworker-sidebar' | 'employees-sidebar') {}
  }
}
