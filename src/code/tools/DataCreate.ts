//--|▼| Tools (Import) |▼|--//
import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

//--|►| DataCreate (Tool) |◄|--//
export namespace DataCreate {
  export class forBlock {
    constructor(arrayName: 'employees' | 'tickets') {
      const indexData: HTMLDivElement = document.querySelector('#index-data');
      const employeesContainer: HTMLDivElement = document.querySelector('#employees-data');
      const ticketsContainer: HTMLDivElement = document.querySelector('#tickets-data');

      switch (arrayName) {
        case 'employees':
          $(employeesContainer).empty();

          let employeesTotal: Number = GetArray.employees().length;
          for (let i = 0; i < employeesTotal; i++) {
            // console.log(`Employee - ${[i]}`);
          }
          //--► console.log(employeesContainer); ◄--//
          break;
        case 'tickets':
          $(ticketsContainer).empty();

          let ticketsTotal: Number = GetArray.tickets().length;
          for (let i = 0; i < ticketsTotal; i++) {
            //--▼ Defining a const first avoids undefined browser errors ▼--//
            const GetTickets = GetArray.tickets()[i];
            let ticketStatus: String = GetTickets.ticketStatus;
            let ticketRating: Number = GetTickets.ticketRating;
            let subjectText: String = GetTickets.subjectText;
            let descriptionText: String = GetTickets.descriptionText;
            let senderName: String = GetTickets.senderName;
            let senderDepartment: String = GetTickets.senderDepartment;
            let receiverName: String = GetTickets.receiverName;
            let receiverDepartment: String = GetTickets.receiverDepartment;
            let dateShort: String = GetTickets.dateShort;
            let datePending: String = GetTickets.datePending;
            let dateAssigned: String = GetTickets.dateAssigned;
            let dateResolved: String = GetTickets.dateResolved;
            let noteResolved: String = GetTickets.noteResolved;
            let dateDeleted: String = GetTickets.dateDeleted;
            let noteDeleted: String = GetTickets.noteDeleted;

            let receiverDefault = () => {
              switch (receiverName) {
                case `${undefined}`:
                  return receiverDepartment;
                default:
                  return receiverName;
              }
            };

            $('#tickets-data').append(
              `<article class="ticket ${ticketStatus.toLowerCase()}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                <header>
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="receiver">${receiverDefault()}</p>
                </header>                  
                <footer style="display: none">
                  <p class="ticket-status">${ticketStatus}</p>
                  <p class="ticket-rating">${ticketRating}</p>
                  <p class="subject-text">${subjectText}</p>
                  <p class="description-text">${descriptionText}</p>
                  <p class="sender-name">${senderName}</p>
                  <p class="sender-department">${senderDepartment}</p>
                  <p class="receiver-name">${receiverName}</p>
                  <p class="receiver-department">${receiverDepartment}</p>
                  <p class="date-short">${dateShort}</p>
                  <p class="date-pending">${datePending}</p>
                  <p class="date-assigned">${dateAssigned}</p>
                  <p class="date-resolved">${dateResolved}</p>
                  <p class="note-resolved">${noteResolved}</p>
                  <p class="date-deleted">${dateDeleted}</p>
                  <p class="note-deleted">${noteDeleted}</p>
                </footer>
              </article>`
            );
          }
          //--► console.log(ticketsContainer); ◄--//
          break;
      }
    }
  }
}
