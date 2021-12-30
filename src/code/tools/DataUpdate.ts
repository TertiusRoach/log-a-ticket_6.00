//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

import { UseCapify } from 'code/tools/UseCapify';
import { UseDatefy } from 'code/tools/UseDatefy';
import { UseValufy } from 'code/tools/UseValufy';

//--|►| DataUpdate (Tool) |◄|--//
export namespace DataUpdate {
  export class forTicket {
    constructor(status: 'pending' | 'assigned' | 'resolved' | 'deleted') {
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLElement = indexBody.querySelector('#user-form select');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedTickets: HTMLButtonElement = indexHeader.querySelector('#logged-tickets button');
      let logAticket: HTMLButtonElement = indexHeader.querySelector('#log-a-ticket button');
      let manageTickets: HTMLButtonElement = indexHeader.querySelector('#manage-tickets button');
      let activeButton: HTMLButtonElement = indexHeader.querySelector('.active-page');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let mainButton: String = '[id*="-ticket"] button';
      let logButton: HTMLElement = indexOverlay.querySelector('#log-ticket button');
      let assignButton: HTMLElement = indexOverlay.querySelector('#assign-ticket button');
      let ticketSubject: HTMLElement = indexOverlay.querySelector('#ticket-subject');
      let ticketDescription: HTMLElement = indexOverlay.querySelector('#ticket-description');
      let departmentSelect: HTMLSelectElement = indexOverlay.querySelector('#department-form select');
      let pendingMark: HTMLDivElement = indexOverlay.querySelector('.pending-mark');
      let assignedMark: HTMLDivElement = indexOverlay.querySelector('.assigned-mark');
      let assignDate: HTMLElement = indexOverlay.querySelector('#assigned-date');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
      let departmentsContainer: HTMLDivElement = indexData.querySelector('#departments-data');
      let employeesContainer: HTMLDivElement = indexData.querySelector('#employees-data');
      let employeesTotal: Number = employeesContainer.children.length;

      let ticketsContainer: HTMLDivElement = indexData.querySelector('#tickets-data');

      let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
      let ticketsTotal: Number = ticketsCollection.length;

      function closeContainer(block: 'index-overlay') {
        let page: String = block.split('-')[1];
        indexOverlay.className = `default-${page}`;
        indexOverlay.style.display = 'none';
        indexMain.style.display = 'grid';
        indexOverlay.innerHTML = '';
        logAticket.className = '';
      }
      function highlightButton(role: String | 'Manager' | 'Employee') {}
      function receiverDefault(receiverName: String | `${undefined}`, receiverDepartment: String) {
        switch (receiverName) {
          case `${undefined}`:
            return receiverDepartment;
          default:
            return receiverName;
        }
      }
      function refreshPages() {
        new GetEvent.forPage('default-header', GetPath.forHTML('header'));
        new GetEvent.forPage('coworkers-sidebar', GetPath.forHTML('sidebar'));
        new GetEvent.forPage(`${indexMain.className}`, GetPath.forHTML('main'));
      }

      switch (status) {
        case 'pending':
          var logStatus: String = `${findTicket('status', `${status}`)}`;
          var logRating: String = `${findTicket('rating', `${status}`)}`;
          var logSubject: String = `${findTicket('subject', `${status}`)}`;
          var logDescription: String = `${findTicket('description', `${status}`)}`;
          var logSenderName: String = `${findTicket('sender', `${status}`)}`;
          var logSenderDepartment: String = `${findTicket('sender-department', `${status}`)}`;
          var logReceiverName: String = `${findTicket('receiver', `${status}`)}`;
          var logReceiverDepartment: String = `${findTicket('receiver-department', `${status}`)}`;
          var logDateShort: String = `${findTicket('date-short', `${status}`)}`;
          var logDatePending: String = `${findTicket('date-pending', `${status}`)}`;
          var logDateAssigned: String = `${findTicket('date-assigned', `${status}`)}`;
          var logDateResolved: String = `${findTicket('date-resolved', `${status}`)}`;
          var logNoteResolved: String = `${findTicket('resolved-note', `${status}`)}`;
          var logDateDeleted: String = `${findTicket('date-deleted', `${status}`)}`;
          var logNoteDeleted: String = `${findTicket('deleted-note', `${status}`)}`;

          $(ticketsData).append(
            `<article class="ticket ${logStatus.toLowerCase()}">
              <header>
                <p class="shortdate">${logDateShort}</p>
                <p class="subject">${logSubject}</p>
                <p class="receiver">${receiverDefault(logReceiverName, logReceiverDepartment)}</p>
              </header>                  
              <footer>
                <p class="ticket-status">${logStatus}</p>
                <p class="ticket-rating">${logRating}</p>
                <p class="subject-text">${logSubject}</p>
                <p class="description-text">${logDescription}</p>
                <p class="sender-name">${logSenderName}</p>
                <p class="sender-department">${logSenderDepartment}</p>
                <p class="receiver-name">${logReceiverName}</p>
                <p class="receiver-department">${logReceiverDepartment}</p>
                <p class="date-short">${logDateShort}</p>
                <p class="date-pending">${logDatePending}</p>
                <p class="date-assigned">${logDateAssigned}</p>
                <p class="date-resolved">${logDateResolved}</p>
                <p class="note-resolved">${logNoteResolved}</p>
                <p class="date-deleted">${logDateDeleted}</p>
                <p class="note-deleted">${logNoteDeleted}</p>
              </footer>
            </article>`
          );

          closeContainer('index-overlay');
          refreshPages();
          break;
        case 'assigned':
          var assignStatus: String = `${findTicket('status', `${status}`)}`;
          var assignRating: String = `${findTicket('rating', `${status}`)}`;
          var assignSubject: String = `${findTicket('subject', `${status}`)}`;
          var assignDescription: String = `${findTicket('description', `${status}`)}`;
          var assignSenderName: String = `${findTicket('sender', `${status}`)}`;
          var assignSenderDepartment: String = `${findTicket('sender-department', `${status}`)}`;
          var assignReceiverName: String = `${findTicket('receiver', `${status}`)}`;
          var assignReceiverDepartment: String = `${findTicket('receiver-department', `${status}`)}`;
          var assignDateShort: String = `${findTicket('date-short', `${status}`)}`;
          var assignDatePending: String = `${findTicket('date-pending', `${status}`)}`;
          var assignDateAssigned: String = `${findTicket('date-assigned', `${status}`)}`;
          var assignDateResolved: String = `${findTicket('date-resolved', `${status}`)}`;
          var assignNoteResolved: String = `${findTicket('resolved-note', `${status}`)}`;
          var assignDateDeleted: String = `${findTicket('date-deleted', `${status}`)}`;
          var assignNoteDeleted: String = `${findTicket('deleted-note', `${status}`)}`;

          $(ticketsData).append(
            `<article class="ticket ${assignStatus.toLowerCase()}">
              <header>
                <p class="shortdate">${assignDateShort}</p>
                <p class="subject">${assignSubject}</p>
                <p class="receiver">${assignReceiverName}</p>
              </header>                  
              <footer>
                <p class="ticket-status">${assignStatus}</p>
                <p class="ticket-rating">${assignRating}</p>
                <p class="subject-text">${assignSubject}</p>
                <p class="description-text">${assignDescription}</p>
                <p class="sender-name">${assignSenderName}</p>
                <p class="sender-department">${assignSenderDepartment}</p>
                <p class="receiver-name">${assignReceiverName}</p>
                <p class="receiver-department">${assignReceiverDepartment}</p>
                <p class="date-short">${assignDateShort}</p>
                <p class="date-pending">${assignDatePending}</p>
                <p class="date-assigned">${assignDateAssigned}</p>
                <p class="date-resolved">${assignDateResolved}</p>
                <p class="note-resolved">${assignNoteResolved}</p>
                <p class="date-deleted">${assignDateDeleted}</p>
                <p class="note-deleted">${assignNoteDeleted}</p>
              </footer>
            </article>`
          );

          closeContainer('index-overlay');
          refreshPages();
          break;
        case 'resolved':
          console.log(`Ticket: ${UseCapify.forString(' ', status)}`);

          closeContainer('index-overlay');
          refreshPages();
          break;
        case 'deleted':
          console.log(`Ticket: ${UseCapify.forString(' ', status)}`);

          closeContainer('index-overlay');
          refreshPages();
          break;
      }
      console.log('--DataUpdate.js Loaded');
    }
  }

  function findDepartment(userName: String) {
    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
    let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
    for (let i = 0; i < employeesTotal; i++) {
      let firstName: String = employeesCollection[i].children[0].textContent;
      let middleName: String = employeesCollection[i].children[1].textContent;
      let lastName: String = employeesCollection[i].children[2].textContent;
      let department: String = employeesCollection[i].children[3].textContent;
      let occupation: String = employeesCollection[i].children[4].textContent;
      let role: String = employeesCollection[i].children[5].textContent;

      let employeeName: String = `${firstName} ${lastName}`;
      if (employeeName === userName) {
        return department;
      }
    }
  }
  function findTicket(
    info:
      | 'status'
      | 'rating'
      | 'subject'
      | 'description'
      | 'sender'
      | 'sender-department'
      | 'receiver'
      | 'receiver-department'
      | 'date-short'
      | 'date-pending'
      | 'date-assigned'
      | 'date-resolved'
      | 'resolved-note'
      | 'date-deleted'
      | 'deleted-note',
    status: String | 'pending' | 'assigned' | 'resolved' | 'deleted'
  ) {
    const indexBody: HTMLBodyElement = document.querySelector('#index-body');

    const indexHeader: HTMLElement = document.querySelector('#index-header');

    const indexMain: HTMLElement = document.querySelector('#index-main');

    const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

    const indexData: HTMLElement = document.querySelector('#index-data');
    let employeesContainer: HTMLDivElement = indexData.querySelector('#employees-data');
    let employeesTotal: Number = employeesContainer.children.length;

    let liveStatus: String;
    let liveRating: undefined | number;
    let liveSubject: String | JQuery<String>;
    let liveDescription: String | JQuery<String>;
    let liveSenderName: String | JQuery<String>;
    let liveSenderDepartment: String | JQuery<String>;
    let liveReceiverName: String | undefined;
    let liveReceiverDepartment: String | undefined;
    let liveDateShort: String;
    let liveDatePending: String;
    let liveDateAssigned: String;
    let liveDateResolved: String;
    let liveNoteResolved: String;
    let liveDateDeleted: String;
    let liveNoteDeleted: String;
    switch (status) {
      case 'pending':
        switch (info) {
          case 'status':
            liveStatus = 'Pending';
            return liveStatus;
          case 'rating':
            liveRating = undefined;
            return liveRating;
          case 'subject':
            liveSubject = `${$('#ticket-subject').val()}`;
            return liveSubject;
          case 'description':
            liveDescription = `${$('#ticket-description').val()}`;
            return liveDescription;
          case 'sender':
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            return liveSenderName;
          case 'sender-department':
            const indexData: HTMLElement = document.querySelector('#index-data');
            let employeesContainer: HTMLDivElement = indexData.querySelector('#employees-data');
            let employeesTotal: Number = employeesContainer.children.length;
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            for (let i = 0; i < employeesTotal; i++) {
              if (`${get(i, 'first-name')} ${get(i, 'last-name')}` === liveSenderName) {
                liveSenderDepartment = get(i, 'department');
                return liveSenderDepartment;
              }
            }
          case 'receiver':
            var colleagueSelect: HTMLSelectElement = document.querySelector('#index-overlay #colleague-form select');
            switch ('undefined') {
              case colleagueSelect.value:
                liveReceiverName = undefined;
                break;
              default:
                liveReceiverName = UseCapify.forString('-', colleagueSelect.value);
            }
            return;
          case 'receiver-department':
            var departmentSelect: HTMLSelectElement = document.querySelector('#index-overlay #department-form select');
            liveReceiverDepartment = UseCapify.forString('-', departmentSelect.value);
            return liveReceiverDepartment;
          case 'date-short':
            liveDateShort = UseDatefy.forToday('2000-01-01');
            return liveDateShort;
          case 'date-pending':
            var pendingDate: HTMLElement = document.querySelector('#index-overlay #pending-date');
            liveDatePending = pendingDate.innerText;
            return liveDatePending;
          case 'date-assigned':
            liveDateAssigned = undefined;
            return liveDateAssigned;
          case 'date-resolved':
            liveDateResolved = undefined;
            return liveDateResolved;
          case 'resolved-note':
            liveNoteResolved = undefined;
            return liveNoteResolved;
          case 'date-deleted':
            liveDateDeleted = undefined;
            return liveDateDeleted;
          case 'deleted-note':
            liveNoteDeleted = undefined;
            return liveNoteDeleted;
        }
      case 'assigned':
        switch (info) {
          case 'status':
            liveStatus = 'Assigned';
            return liveStatus;
          case 'rating':
            liveRating = undefined;
            return liveRating;
          case 'subject':
            liveSubject = `${$('#ticket-subject').val()}`;
            return liveSubject;
          case 'description':
            liveDescription = `${$('#ticket-description').val()}`;
            return liveDescription;
          case 'sender':
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            return liveSenderName;
          case 'sender-department':
            liveSenderName = `${UseCapify.forString('-', `${$('#user-form select').val()}`)}`;
            for (let i = 0; i < employeesTotal; i++) {
              if (`${get(i, 'first-name')} ${get(i, 'last-name')}` === liveSenderName) {
                liveSenderDepartment = get(i, 'department');
                return liveSenderDepartment;
              }
            }
          case 'receiver':
            var colleagueSelect: HTMLSelectElement = document.querySelector('#index-overlay #ticket-container footer #colleague-form select');
            switch (colleagueSelect) {
              case null:
                liveReceiverName = undefined;
              default:
                liveReceiverName = UseCapify.forString('-', colleagueSelect.value);
            }

            return liveReceiverName;
          case 'receiver-department':
            var departmentSelect: HTMLSelectElement = document.querySelector('#index-overlay #department-form select');
            liveReceiverDepartment = UseCapify.forString('-', departmentSelect.value);
            return liveReceiverDepartment;
          case 'date-short':
            liveDateShort = UseDatefy.forToday('2000-01-01');
            return liveDateShort;
          case 'date-pending':
            var pendingDate: HTMLElement = document.querySelector('#index-overlay #pending-date');
            liveDatePending = pendingDate.innerText;
            return liveDatePending;
          case 'date-assigned':
            var assignedDate: HTMLElement = document.querySelector('#index-overlay #assigned-date');
            liveDateAssigned = assignedDate.innerText;
            return liveDateAssigned;
          case 'date-resolved':
            liveDateResolved = undefined;
            return liveDateResolved;
          case 'resolved-note':
            liveNoteResolved = undefined;
            return liveNoteResolved;
          case 'date-deleted':
            liveDateDeleted = undefined;
            return liveDateDeleted;
          case 'deleted-note':
            liveNoteDeleted = undefined;
            return liveNoteDeleted;
        }
      case 'resolved':
        break;
      case 'deleted':
        break;
    }
  }
  function findUser() {
    const indexBody: HTMLBodyElement = document.querySelector('#index-body');
    let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
    let userIndex: number = userSelect.selectedIndex;
    let userName: String = userSelect.children[userIndex].textContent;
    return `${userName}`;
  }
  function get(index: number, data: String | 'first-name' | 'middle-name' | 'last-name' | 'department' | 'occupation' | 'role') {
    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
    let employeesTotal: Number = employeesData.getElementsByTagName('article').length;

    let firstName: String = employeesCollection[index].children[0].textContent;
    let middleName: String = employeesCollection[index].children[1].textContent;
    let lastName: String = employeesCollection[index].children[2].textContent;
    let department: String = employeesCollection[index].children[3].textContent;
    let occupation: String = employeesCollection[index].children[4].textContent;
    let role: String = employeesCollection[index].children[5].textContent;
    switch (data) {
      case 'first-name':
        return firstName;
      case 'middle-name':
        return middleName;
      case 'last-name':
        return lastName;
      case 'department':
        return department;
      case 'occupation':
        return occupation;
      case 'role':
        return role;
    }
  }

  function userDepartment() {
    const employeesData: HTMLDivElement = document.querySelector('#employees-data');
    let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
    let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
    let userSelect: HTMLSelectElement = document.querySelector('#user-form select');
    let userName: String = userSelect.selectedOptions[0].textContent;

    for (let i = 0; i < employeesTotal; i++) {
      let firstName: String = employeesCollection[i].children[0].textContent;
      let middleName: String = employeesCollection[i].children[1].textContent;
      let lastName: String = employeesCollection[i].children[2].textContent;
      let department: String = employeesCollection[i].children[3].textContent;
      let occupation: String = employeesCollection[i].children[4].textContent;
      let role: String = employeesCollection[i].children[5].textContent;

      let employeeName: String = `${firstName} ${lastName}`;
      if (employeeName === userName) {
        return department;
      }
    }
  }
}
