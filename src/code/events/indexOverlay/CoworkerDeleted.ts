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

//--|►| Coworker Deleted |◄|--//
export namespace CoworkerDeleted {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let logButton: HTMLElement = indexHeader.querySelector('#log-a-ticket button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      const ticketsContainer: HTMLDivElement = indexMain.querySelector('#tickets-container');
      indexMain.style.display = 'none';

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');
      let closeOverlay: HTMLButtonElement = indexOverlay.querySelector('#close-overlay');
      let liveSubject: HTMLInputElement = indexOverlay.querySelector('#ticket-subject');
      let liveDescription: HTMLTextAreaElement = indexOverlay.querySelector('#ticket-description');
      let liveDepartment: HTMLHeadingElement = indexOverlay.querySelector('#department-name');
      let liveColleague: HTMLHeadingElement = indexOverlay.querySelector('#colleague-name');
      let livePending: HTMLHeadingElement = indexOverlay.querySelector('#pending-date');
      let liveAssigned: HTMLHeadingElement = indexOverlay.querySelector('#assigned-date');
      let liveResolved: HTMLHeadingElement = indexOverlay.querySelector('#resolved-date');
      let liveNoteResolved: HTMLHeadingElement = indexOverlay.querySelector('#resolved-note');
      let liveDeleted: HTMLHeadingElement = indexOverlay.querySelector('#deleted-date');
      let liveNoteDeleted: HTMLHeadingElement = indexOverlay.querySelector('#deleted-note');

      liveSubject.value = `${getTicket('subject-text', ticketsContainer)}`;
      liveDescription.textContent = `${getTicket('description-text', ticketsContainer)}`;
      liveDepartment.textContent = `${getTicket('receiver-department', ticketsContainer)}`;
      livePending.textContent = `${getTicket('date-pending', ticketsContainer)}`;
      if (getTicket('receiver-name', ticketsContainer) === `${undefined}`) {
        liveColleague.style.display = 'none';
        liveAssigned.style.display = 'none';
      } else {
        liveColleague.textContent = `${getTicket('receiver-name', ticketsContainer)}`;
        liveAssigned.textContent = `${getTicket('date-assigned', ticketsContainer)}`;
      }
      liveDeleted.textContent = `${getTicket('date-deleted', ticketsContainer)}`;
      liveNoteDeleted.textContent = `${getTicket('note-deleted', ticketsContainer)}`;

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Classes ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(closeOverlay).on('click', () => {
        closeContainer('index-overlay');
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      console.log('--CoworkerDeleted.js Loaded');
    }
  }
  function closeContainer(block: String | 'index-header' | 'index-main' | 'index-sidebar' | 'index-overlay') {
    const indexMain: HTMLElement = document.querySelector('#index-main');
    var ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');
    var activeTicket: HTMLElement = ticketsMain.querySelector('.active-ticket');
    var container: HTMLElement = document.querySelector(`#${block}`);
    container.innerHTML = '';
    container.className = '';
    container.style.display = 'none';
    container.className = `default-${block.split('-')[1]}`;
    activeTicket.className = activeTicket.classList[0];

    indexMain.style.display = 'grid';
  }
  function getTicket(
    info:
      | String
      | 'ticket-status'
      | 'ticket-rating'
      | 'subject-text'
      | 'description-text'
      | 'sender-name'
      | 'sender-department'
      | 'receiver-name'
      | 'receiver-department'
      | 'date-short'
      | 'date-pending'
      | 'date-assigned'
      | 'date-resolved'
      | 'note-resolved'
      | 'date-deleted'
      | 'note-deleted',
    container: HTMLDivElement
  ) {
    var activeTicket = container.querySelector('.active-ticket');

    switch (info) {
      case 'ticket-status':
        var ticketStatus: String = activeTicket.children[3].children[0].innerHTML;
        return ticketStatus;
      case 'ticket-rating':
        var ticketRating: String = activeTicket.children[3].children[1].innerHTML;
        return ticketRating;
      case 'subject-text':
        var subjectText: String = activeTicket.children[3].children[2].innerHTML;
        return subjectText;
      case 'description-text':
        var descriptionText: String = activeTicket.children[3].children[3].innerHTML;
        return descriptionText;
      case 'sender-name':
        var senderName: String = activeTicket.children[3].children[4].innerHTML;
        return senderName;
      case 'sender-department':
        var senderDepartment: String = activeTicket.children[3].children[5].innerHTML;
        return senderDepartment;
      case 'receiver-name':
        var receiverName: String = activeTicket.children[3].children[6].innerHTML;
        return receiverName;
      case 'receiver-department':
        var receiverDepartment: String = activeTicket.children[3].children[7].innerHTML;
        return receiverDepartment;
      case 'date-short':
        var dateShort: String = activeTicket.children[3].children[8].innerHTML;
        return dateShort;
      case 'date-pending':
        var datePending: String = activeTicket.children[3].children[9].innerHTML;
        return datePending;
      case 'date-assigned':
        var dateAssigned: String = activeTicket.children[3].children[10].innerHTML;
        return dateAssigned;
      case 'date-resolved':
        var dateResolved: String = activeTicket.children[3].children[11].innerHTML;
        return dateResolved;
      case 'note-resolved':
        var noteResolved: String = activeTicket.children[3].children[12].innerHTML;
        return noteResolved;
      case 'date-deleted':
        var dateDeleted: String = activeTicket.children[3].children[13].innerHTML;
        return dateDeleted;
      case 'note-deleted':
        var noteDeleted: String = activeTicket.children[3].children[14].innerHTML;
        return noteDeleted;
    }
  }
}
