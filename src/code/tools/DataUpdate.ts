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
  export class forBlock {
    constructor(status: 'pending' | 'assigned' | 'resolved' | 'deleted') {
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLElement = indexBody.querySelector('#user-form select');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

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

      let ticketsContainer: HTMLDivElement = indexData.querySelector('#tickets-data');

      let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
      let ticketsTotal: Number = ticketsCollection.length;

      //----------------------------------------------------------------------------------

      switch (status) {
        case 'pending':
          var logStatus: String = `${returnTicket('status', `${status}`)}`;
          var logRating: String = `${returnTicket('rating', `${status}`)}`;
          var logSubject: String = `${returnTicket('subject', `${status}`)}`;
          var logDescription: String = `${returnTicket('description', `${status}`)}`;
          var logSenderName: String = `${returnTicket('sender', `${status}`)}`;
          var logSenderDepartment: String = `${returnTicket('sender-department', `${status}`)}`;
          var logReceiverName: String = `${returnTicket('receiver', `${status}`)}`;
          var logReceiverDepartment: String = `${returnTicket('receiver-department', `${status}`)}`;
          var logDateShort: String = `${returnTicket('date-short', `${status}`)}`;
          var logDatePending: String = `${returnTicket('date-pending', `${status}`)}`;
          var logDateAssigned: String = `${returnTicket('date-assigned', `${status}`)}`;
          var logDateResolved: String = `${returnTicket('date-resolved', `${status}`)}`;
          var logNoteResolved: String = `${returnTicket('resolved-note', `${status}`)}`;
          var logDateDeleted: String = `${returnTicket('date-deleted', `${status}`)}`;
          var logNoteDeleted: String = `${returnTicket('deleted-note', `${status}`)}`;

          /*
          console.log(logStatus);
          console.log(logRating);
          console.log(logSubject);
          console.log(logDescription);
          console.log(logSenderName);
          console.log(logSenderDepartment);
          console.log(logReceiverName);
          console.log(logReceiverDepartment);
          console.log(logDateShort);
          console.log(logDatePending);
          console.log(logDateAssigned);
          console.log(logDateResolved);
          console.log(logNoteResolved);
          console.log(logDateDeleted);
          console.log(logNoteDeleted);
          */

          for (let i = 0; i < ticketsTotal; i++) {}
          console.log(`Ticket: ${UseCapify.forString(' ', status)}`);
          break;
        case 'assigned':
          var logStatus: String = `${returnTicket('status', `${status}`)}`;
          var logRating: String = `${returnTicket('rating', `${status}`)}`;
          var logSubject: String = `${returnTicket('subject', `${status}`)}`;
          var logDescription: String = `${returnTicket('description', `${status}`)}`;
          var logSenderName: String = `${returnTicket('sender', `${status}`)}`;
          var logSenderDepartment: String = `${returnTicket('sender-department', `${status}`)}`;
          var logReceiverName: String = `${returnTicket('receiver', `${status}`)}`;
          var logReceiverDepartment: String = `${returnTicket('receiver-department', `${status}`)}`;
          var logDateShort: String = `${returnTicket('date-short', `${status}`)}`;
          var logDatePending: String = `${returnTicket('date-pending', `${status}`)}`;
          var logDateAssigned: String = `${returnTicket('date-assigned', `${status}`)}`;
          var logDateResolved: String = `${returnTicket('date-resolved', `${status}`)}`;
          var logNoteResolved: String = `${returnTicket('resolved-note', `${status}`)}`;
          var logDateDeleted: String = `${returnTicket('date-deleted', `${status}`)}`;
          var logNoteDeleted: String = `${returnTicket('deleted-note', `${status}`)}`;

          console.log(logStatus);
          console.log(logRating);
          console.log(logSubject);
          console.log(logDescription);
          console.log(logSenderName);
          console.log(logSenderDepartment);
          console.log(logReceiverName);
          console.log(logReceiverDepartment);
          console.log(logDateShort);
          console.log(logDatePending);
          console.log(logDateAssigned);
          console.log(logDateResolved);
          console.log(logNoteResolved);
          console.log(logDateDeleted);
          console.log(logNoteDeleted);

          console.log(`Ticket: ${UseCapify.forString(' ', status)}`);
          break;
        case 'resolved':
          console.log(`Ticket: ${UseCapify.forString(' ', status)}`);
          break;
        case 'deleted':
          console.log(`Ticket: ${UseCapify.forString(' ', status)}`);
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
  function returnTicket(
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
            liveReceiverDepartment = undefined;
            return;
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
            var colleagueSelect: HTMLSelectElement = document.querySelector('#index-overlay #colleague-form select');
            liveReceiverName = UseCapify.forString('-', colleagueSelect.value);
            return liveReceiverName;
          case 'receiver-department':
            var colleagueSelect: HTMLSelectElement = document.querySelector('#index-overlay #colleague-form select');
            liveReceiverName = UseCapify.forString('-', colleagueSelect.value);
            for (let i = 0; i < employeesTotal; i++) {
              if (`${get(i, 'first-name')} ${get(i, 'last-name')}` === liveReceiverName) {
                liveReceiverDepartment = get(i, 'department');
                return liveReceiverDepartment;
              }
            }

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
        break;
      case 'resolved':
        break;
      case 'deleted':
        break;
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
