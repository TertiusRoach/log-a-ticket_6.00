import { GetTicket } from 'code/tools/GetArray';
//--|►| BuildData |◄|--//
export namespace BuildData {
  export class initiateCode {
    constructor(sidebarJS?: HTMLElement, sidebarJQ?: JQuery<HTMLElement>) {
      $('#metadata').empty();

      //--► Pulling from GetArray and pushing to HTML ◄--//
      const ticketsTotal = GetTicket.tickets().length;
      for (let i = 0; i < ticketsTotal; i++) {
        $('#metadata').append(
          `<div>
            <p class="ticket-status">${GetTicket.tickets()[i].ticketStatus}</p>
            <p class="ticket-rating">${GetTicket.tickets()[i].ticketRating}</p>
            <p class="subject-text">${GetTicket.tickets()[i].subjectText}</p>
            <p class="description-text">${GetTicket.tickets()[i].descriptionText}</p>
            <p class="sender-name">${GetTicket.tickets()[i].senderName}</p>
            <p class="sender-department">${GetTicket.tickets()[i].senderDepartment}</p>
            <p class="receiver-name">${GetTicket.tickets()[i].receiverName}</p>
            <p class="receiver-department">${GetTicket.tickets()[i].receiverDepartment}</p>
            <p class="date-short">${GetTicket.tickets()[i].dateShort}</p>
            <p class="date-pending">${GetTicket.tickets()[i].datePending}</p>
            <p class="date-assigned">${GetTicket.tickets()[i].dateAssigned}</p>
            <p class="date-resolved">${GetTicket.tickets()[i].dateResolved}</p>
            <p class="note-resolved">${GetTicket.tickets()[i].noteResolved}</p>
            <p class="date-deleted">${GetTicket.tickets()[i].dateDeleted}</p>
            <p class="note-deleted">${GetTicket.tickets()[i].noteDeleted}</p>
          </div>`
        );
      }
    }
  }
}
