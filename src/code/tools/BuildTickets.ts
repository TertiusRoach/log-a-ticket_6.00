import { GetTicket, GetEmployee } from 'code/tools/GetArray';
//--|►| BuildTickets |◄|--//
export namespace BuildTickets {
  export function initiateCode(pageName: String) {
    let metadataJS: HTMLDivElement = document.querySelector('#metadata div');
    let metadataJQ: JQuery<HTMLDivElement> = $('#metadata div');

    $('#tickets-container').empty();
    switch (pageName) {
      case 'logged-main':
        const filterLogged: Number = metadataJQ.length;
        BuildTickets.getMetadata(filterLogged, pageName, metadataJS, metadataJQ);
        break;
      case 'manage-main':
        const filterManage: Number = metadataJQ.length;
        BuildTickets.getMetadata(filterManage, pageName, metadataJS, metadataJQ);
        break;
      case 'user-main':
        const filterUser: Number = metadataJQ.length;
        BuildTickets.getMetadata(filterUser, pageName, metadataJS, metadataJQ);
        break;
      case 'colleague-main':
        const filterColleague: Number = metadataJQ.length;
        BuildTickets.getMetadata(filterColleague, pageName, metadataJS, metadataJQ);
        break;
    }
  }
  export function getMetadata(
    metadataTotal: Number,
    pageName: String | 'logged-main' | 'manage-main' | 'user-main' | 'colleague-main',
    metadataJS: HTMLDivElement,
    metadataJQ: JQuery<HTMLDivElement>
  ) {
    const userSelectJS: HTMLElement = document.querySelector('.default-sidebar header h1:nth-child(2)');
    const userSelectJQ: JQuery<HTMLElement> = $('.default-sidebar header h1:nth-child(2)');
    const colleagueSelectJS = document.querySelector('.active-colleague h3:nth-child(2)');
    const colleagueSelectJQ = $('.active-colleague h3:nth-child(2)');

    const indexTotal = metadataTotal;
    switch (pageName) {
      case 'logged-main':
        for (let i = 0; i < indexTotal; i++) {
          let ticketStatus: String = metadataJQ[i].children[0].innerHTML;
          let ticketRating: String = metadataJQ[i].children[1].innerHTML;
          let subjectText: String = metadataJQ[i].children[2].innerHTML;
          let descriptionText: String = metadataJQ[i].children[3].innerHTML;
          let senderName: String = metadataJQ[i].children[4].innerHTML;
          let senderDepartment: String = metadataJQ[i].children[5].innerHTML;
          const receiverName: String = metadataJQ[i].children[6].innerHTML;
          const receiverDepartment: String = metadataJQ[i].children[7].innerHTML;
          let dateShort: String = metadataJQ[i].children[8].innerHTML;
          let datePending: String = metadataJQ[i].children[9].innerHTML;
          let dateAssigned: String = metadataJQ[i].children[10].innerHTML;
          let dateResolved: String = metadataJQ[i].children[11].innerHTML;
          let noteResolved: String = metadataJQ[i].children[12].innerHTML;
          let dateDeleted: String = metadataJQ[i].children[13].innerHTML;
          let noteDeleted: String = metadataJQ[i].children[14].innerHTML;

          let receiverUndefined = () => {
            switch (`${undefined}`) {
              case receiverName:
                return receiverDepartment;
              default:
                return receiverName;
            }
          };

          if (userSelectJS.innerHTML === senderName) {
            $('#tickets-container').append(
              `<article class="ticket ${ticketStatus.toLowerCase()}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                <p class="shortdate">${dateShort}</p>
                <p class="subject">${subjectText}</p>
                <p class="receiver">${receiverUndefined()}</p>
                
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
        }
        break;
      case 'manage-main':
        const employeesTotal = GetEmployee.employees().length;
        let getDepartment: String | undefined;
        for (let i = 0; i < employeesTotal; i++) {
          if (userSelectJS.innerHTML === `${GetEmployee.employees()[i].firstName} ${GetEmployee.employees()[i].lastName}`) {
            getDepartment = GetEmployee.employees()[i].department;
          }
        }
        const userDepartment: String = getDepartment;
        for (let i = 0; i < indexTotal; i++) {
          let ticketStatus: String = metadataJQ[i].children[0].innerHTML;
          let ticketRating: String = metadataJQ[i].children[1].innerHTML;
          let subjectText: String = metadataJQ[i].children[2].innerHTML;
          let descriptionText: String = metadataJQ[i].children[3].innerHTML;
          let senderName: String = metadataJQ[i].children[4].innerHTML;
          let senderDepartment: String = metadataJQ[i].children[5].innerHTML;
          const receiverName: String = metadataJQ[i].children[6].innerHTML;
          const receiverDepartment: String = metadataJQ[i].children[7].innerHTML;
          let dateShort: String = metadataJQ[i].children[8].innerHTML;
          let datePending: String = metadataJQ[i].children[9].innerHTML;
          let dateAssigned: String = metadataJQ[i].children[10].innerHTML;
          let dateResolved: String = metadataJQ[i].children[11].innerHTML;
          let noteResolved: String = metadataJQ[i].children[12].innerHTML;
          let dateDeleted: String = metadataJQ[i].children[13].innerHTML;
          let noteDeleted: String = metadataJQ[i].children[14].innerHTML;

          if (userDepartment === receiverDepartment && receiverName === `${undefined}`) {
            $('#tickets-container').append(
              `<article class="ticket ${ticketStatus.toLowerCase()}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                <p class="shortdate">${dateShort}</p>
                <p class="subject">${subjectText}</p>
                <p class="sender">${senderName}</p>
                
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
        }
        break;
      case 'user-main':
        for (let i = 0; i < indexTotal; i++) {
          let ticketStatus: String = metadataJQ[i].children[0].innerHTML;
          let ticketRating: String = metadataJQ[i].children[1].innerHTML;
          let subjectText: String = metadataJQ[i].children[2].innerHTML;
          let descriptionText: String = metadataJQ[i].children[3].innerHTML;
          let senderName: String = metadataJQ[i].children[4].innerHTML;
          let senderDepartment: String = metadataJQ[i].children[5].innerHTML;
          let receiverName: String = metadataJQ[i].children[6].innerHTML;
          let receiverDepartment: String = metadataJQ[i].children[7].innerHTML;
          let dateShort: String = metadataJQ[i].children[8].innerHTML;
          let datePending: String = metadataJQ[i].children[9].innerHTML;
          let dateAssigned: String = metadataJQ[i].children[10].innerHTML;
          let dateResolved: String = metadataJQ[i].children[11].innerHTML;
          let noteResolved: String = metadataJQ[i].children[12].innerHTML;
          let dateDeleted: String = metadataJQ[i].children[13].innerHTML;
          let noteDeleted: String = metadataJQ[i].children[14].innerHTML;

          if (userSelectJS.innerHTML === receiverName) {
            $('#tickets-container').append(
              `<article class="ticket ${ticketStatus.toLowerCase()}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                <p class="shortdate">${dateShort}</p>
                <p class="subject">${subjectText}</p>
                <p class="sender">${senderName}</p>
                
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
        }
        break;
      case 'colleague-main':
        for (let i = 0; i < indexTotal; i++) {
          let ticketStatus: String = metadataJQ[i].children[0].innerHTML;
          let ticketRating: String = metadataJQ[i].children[1].innerHTML;
          let subjectText: String = metadataJQ[i].children[2].innerHTML;
          let descriptionText: String = metadataJQ[i].children[3].innerHTML;
          let senderName: String = metadataJQ[i].children[4].innerHTML;
          let senderDepartment: String = metadataJQ[i].children[5].innerHTML;
          let receiverName: String = metadataJQ[i].children[6].innerHTML;
          let receiverDepartment: String = metadataJQ[i].children[7].innerHTML;
          let dateShort: String = metadataJQ[i].children[8].innerHTML;
          let datePending: String = metadataJQ[i].children[9].innerHTML;
          let dateAssigned: String = metadataJQ[i].children[10].innerHTML;
          let dateResolved: String = metadataJQ[i].children[11].innerHTML;
          let noteResolved: String = metadataJQ[i].children[12].innerHTML;
          let dateDeleted: String = metadataJQ[i].children[13].innerHTML;
          let noteDeleted: String = metadataJQ[i].children[14].innerHTML;

          if (colleagueSelectJS.innerHTML === receiverName) {
            $('#tickets-container').append(
              `<article class="ticket ${ticketStatus.toLowerCase()}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
              <p class="shortdate">${dateShort}</p>
              <p class="subject">${subjectText}</p>
              <p class="sender">${senderName}</p>
              
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
        }
        break;
    }
  }
  let convert = (To: 'toCamelCase' | 'to Separate' | 'to-value', string: String) => {
    switch (To) {
      case 'toCamelCase':
        break;
      case 'to Separate':
        let firstLetter = string.split('-')[0].toLowerCase().charAt(0).toUpperCase();
        let firstRemaining = string.split('-')[0].slice(1).toLowerCase();

        let secondLetter = string.split('-')[1].toLowerCase().charAt(0).toUpperCase();
        let secondRemaining = string.split('-')[1].slice(1).toLowerCase();

        return `${firstLetter + firstRemaining} ${secondLetter + secondRemaining}`;
      case 'to-value':
        let firstValue = string.split(' ')[0].toLowerCase();
        let secondValue = string.split(' ')[1].toLowerCase();

        return `${firstValue}-${secondValue}`;
    }
  };
}
