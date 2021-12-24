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
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
      let userName: String = userSelect.selectedOptions[0].textContent;
      let userDepartment: String = findDepartment(userName);

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsMain: HTMLDivElement = indexMain.querySelector('#tickets-container');
      let loggedHeader: HTMLElement = indexMain.querySelector('#logged-header h1');
      let manageHeader: HTMLElement = indexMain.querySelector('#manage-header h1');
      let coworkerHeader: HTMLElement = indexMain.querySelector('#coworker-header h1');
      let colleagueHeader: HTMLElement = indexMain.querySelector('#colleague-header h1');
      let userHeader: HTMLElement = indexMain.querySelector('#user-name');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');
      let employeesData: HTMLDivElement = indexData.querySelector('#employees-data');
      let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
      let employeesTotal: Number = employeesCollection.length;
      let ticketsData: HTMLDivElement = indexData.querySelector('#tickets-data');
      let ticketsCollection: HTMLCollection = ticketsData.getElementsByTagName('article');
      let ticketsTotal: Number = ticketsCollection.length;

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function clearTickets(container: HTMLDivElement, status: String | 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything') {
        container.innerHTML = '';
        container.className = '';
        container.className = `${status}-tickets`;
      }

      /* Last ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      clearTickets(ticketsMain, status);
      switch (page) {
        case 'colleague-main':
          let activeColleague = document.querySelector('#colleague-name').textContent;
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
            if (receiverName === activeColleague && ticketStatus === status) {
              //--▼ Colleague Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="sender">${senderName}</p>
                  
                  <div style="display: none">
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
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'coworker-main':
          let activeCoworker = document.querySelector('#coworker-header').lastChild.textContent;
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

            if (senderName === activeCoworker && ticketStatus === status) {
              //--▼ Coworker Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="receiver">${receiverDefault()}</p>
                  
                  <div style="display: none">
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
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'logged-main':
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

            if (senderName === userName && ticketStatus === status) {
              //--▼ Logged Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="receiver">${receiverDefault()}</p>
                  
                  <div style="display: none">
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
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'manage-main':
          manageHeader.innerHTML = `${findDepartment(userName)}`;
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
              //--▼ Manage Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="sender">${senderName}</p>
                  
                  <div style="display: none">
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
                  </div>
                </article>`
              );
            }
          }
          break;
        case 'user-main':
          ticketsMain.innerHTML = '';
          ticketsMain.className = '';
          ticketsMain.className = `${status}-tickets`;

          userHeader.innerHTML = `${userName}`;
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

            if (userDepartment === receiverDepartment && receiverName === userName) {
              //--▼ Manage Main ▼--//
              $(ticketsMain).append(
                `<article class="${ticketStatus}" onClick="$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');">
                  <p class="shortdate">${dateShort}</p>
                  <p class="subject">${subjectText}</p>
                  <p class="sender">${senderName}</p>
                  
                  <div style="display: none">
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
                  </div>
                </article>`
              );
            }
          }
          break;
      }
    }
  }
  export class forSidebar {
    constructor(page: 'coworkers-sidebar' | 'default-sidebar' | 'employees-sidebar') {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');
      let userSelect: HTMLSelectElement = indexBody.querySelector('#user-form select');
      let userTotal: Number = userSelect.getElementsByTagName('option').length;

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      let departmentsData: HTMLDivElement;
      let employeesData: HTMLDivElement;
      let ticketsData: HTMLDivElement;
      let userDepartment: String;
      let userName: String;

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      /* Events ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      /* Last ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      switch (page) {
        case 'coworkers-sidebar':
          /* Declarations ▼ =-=-=-=-=-=-=-=-=-= ◄ */
          userName = findUser();
          userDepartment = findDepartment(userName);

          let coworkerHeader: HTMLSelectElement = indexSidebar.querySelector('#view-coworkers header');
          let coworkerFooter: HTMLElement = indexSidebar.querySelector('#view-coworkers footer');
          let coworkerButtons: HTMLCollection;
          let departmentSelect: HTMLSelectElement = indexSidebar.querySelector('#department-form select');

          departmentsData = indexData.querySelector('#departments-data');
          employeesData = indexData.querySelector('#employees-data');
          ticketsData = indexData.querySelector('#tickets-data');
          /* Functions ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          let appendCoworker = (coworkerFooter: HTMLElement, nameClass: String, firstName: String, lastName: String) => {
            $(coworkerFooter).append(`<span class="${nameClass}"
                                            onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                        <h1 class="notification">0</h1>
                                        <h1 class="text">${firstName} ${lastName}</h1>
                                      </span>`);
          };
          let buildCoworkers = (selectedDepartment: String, recall: boolean) => {
            coworkerFooter.innerHTML = '';

            let employeesTotal = employeesData.children.length;
            for (let i = 0; i < employeesTotal; i++) {
              let firstName: String = get(i, 'first-name');
              let middleName: String = get(i, 'middle-name');
              /*
              let middleName: String;
              switch (get(i, 'middle-name')) {
                case `${undefined}`:
                  middleName = ' ';
                default:
                  middleName = ` ${get(i, 'middle-name')} `;
              }
              */
              let lastName: String = get(i, 'last-name');
              let department: String = get(i, 'department');
              let occupation: String = get(i, 'occupation');
              let role: String = get(i, 'role');

              if (UseValufy.forString(department) === `${selectedDepartment}`) {
                var classValue: String = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
                var mainHeader: HTMLCollection = indexMain.getElementsByTagName('header');
                var activeName: String;
                if (typeof mainHeader[0] !== `${undefined}`) {
                  activeName = mainHeader[0].lastChild.textContent;
                }
                var indexName: String = `${firstName} ${lastName}`;
                var userName: String = findUser();

                switch (recall) {
                  case true:
                    if (activeName === indexName) {
                      $(coworkerFooter).append(`<span class="${classValue} active-colleague"
                                                      onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                                  <h1 class="notification">0</h1>
                                                  <h1 class="text">${firstName} ${lastName}</h1>
                                                </span>`);
                    } else {
                      appendCoworker(coworkerFooter, classValue, firstName, lastName);
                    }
                    break;
                  case false:
                    if (userName === indexName) {
                      $(coworkerFooter).append(`<span class="${classValue} active-colleague"
                                                      onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                                  <h1 class="notification">0</h1>
                                                  <h1 class="text">${firstName} ${lastName}</h1>
                                                </span>`);
                    } else {
                      appendCoworker(coworkerFooter, classValue, firstName, lastName);
                    }
                    break;
                }
              }
            }
          };
          let buildDropdown = (userDepartment: String) => {
            departmentSelect.innerHTML = '';

            let departmentsTotal = departmentsData.children.length;
            for (let i = 0; i < departmentsTotal; i++) {
              let department: String = `${departmentsData.children[i].id}`;
              let option = document.createElement('option');
              option.value = UseValufy.forString(department);
              option.textContent = UseCapify.forString(' ', department);
              if (userDepartment === UseCapify.forString(' ', department)) {
                option.selected = true;
              } else {
                option.selected = false;
              }
              departmentSelect.append(option);
            }
            buildCoworkers(departmentSelect.selectedOptions[0].value, false);
          };
          buildDropdown(findDepartment(findUser()));

          coworkerButtons = coworkerFooter.getElementsByTagName('span');
          let recall = (coworkerButtons: HTMLCollection) => {
            $(coworkerButtons).on('click', () => {
              indexSidebar.style.display = 'none';
              new GetEvent.forPage('coworker-main', GetPath.forHTML('main'));
            });
          };
          /* Events ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          $(departmentSelect).on('change', () => {
            buildCoworkers(departmentSelect.selectedOptions[0].value, true);

            var coworkerButtons: HTMLCollection = coworkerFooter.getElementsByTagName('span');
            recall(coworkerButtons);
          });
          /* Last ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */

          recall(coworkerButtons);
          break;
        case 'default-sidebar':
          break;
        case 'employees-sidebar':
          /* First ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          indexSidebar.querySelector('#view-employees header span .text').textContent = `${findUser()}`;
          indexSidebar.querySelector('#view-employees header span').className = 'active-colleague';
          /* Function ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */
          let buildEmployees = () => {
            let employeesFooter: HTMLSelectElement = indexSidebar.querySelector('#view-employees footer');
            userDepartment = findDepartment(findUser());
            employeesFooter.innerHTML = '';

            employeesData = indexData.querySelector('#employees-data');
            let employeesTotal: Number = employeesData.getElementsByTagName('article').length;
            for (let i = 0; i < employeesTotal; i++) {
              let firstName: String = get(i, 'first-name');
              let middleName: String = get(i, 'middle-name');
              let lastName: String = get(i, 'last-name');
              let department: String = get(i, 'department');
              let occupation: String = get(i, 'occupation');
              let role: String = get(i, 'role');

              var classValue: String = UseValufy.forString(`${firstName} ${lastName}`);
              if (userDepartment === department) {
                if (`${firstName} ${lastName}` !== `${findUser()}`) {
                  $(employeesFooter).append(`<span class="${classValue}"
                                                  onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                                              <h1 class="notification">0</h1>
                                              <h1 class="text">${firstName} ${lastName}</h1>
                                            </span>`);
                }
              }

              var employeesButton: HTMLSpanElement = employeesFooter.querySelector('span');
            }
          };
          /* Last ▼ =-=-=-=-=-=-=-=-=-=-=- ◄ */

          buildEmployees();
          break;
      }
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
}
