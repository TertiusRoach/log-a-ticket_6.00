import { GetEmployee } from 'code/tools/GetArray';
//--|►| ReplaceData |◄|--//
export namespace ReplaceData {
  /*--▼ BHMSO ▼--*/
  const bodyPathHTML: String = 'html/index-body'; //--► Body <body> ◄--//
  const bodyPathTS: String = 'code/events/indexBody';
  let bodyJS: HTMLBodyElement = document.querySelector('#index-body');
  let bodyJQ: JQuery<HTMLBodyElement> = $('#index-body');

  const headerPathHTML: String = 'html/index-header'; //--► Header <header> ◄--//
  const headerPathTS: String = 'code/events/indexHeader';
  let headerJS: HTMLElement = document.querySelector('#index-header');
  let headerJQ: JQuery<HTMLElement> = $('#index-header');

  const mainPathHTML: String = 'html/index-main'; //--► Main <main> ◄--//
  const mainPathTS: String = 'code/events/indexMain';
  let mainJS: HTMLElement = document.querySelector('#index-main');
  let mainJQ: JQuery<HTMLElement> = $('#index-main');

  const sidebarPathHTML: String = 'html/index-sidebar'; //--► Sidebar <aside> ◄--//
  const sidebarPathTS: String = 'code/events/indexSidebar';
  let sidebarJS: HTMLElement = document.querySelector('#index-sidebar');
  let sidebarJQ: JQuery<HTMLElement> = $('#index-sidebar');

  const overlayPathHTML: String = 'html/index-overlay'; //--► Overlay <section> ◄--//
  const overlayPathTS: String = 'code/events/indexOverlay';
  let overlayJS: HTMLElement = document.querySelector('#index-overlay');
  let overlayJQ: JQuery<HTMLElement> = $('#index-overlay');

  export class initiateBlock {
    constructor(pageBlock: String | 'body' | 'header' | 'main' | 'header' | 'overlay') {
      switch (pageBlock) {
        case 'body':
          // Code Here
          break;
        case 'header':
          // Code Here
          break;
        case 'main':
          let replaceText = () => {
            const userSelectJS: HTMLElement = document.querySelector('.default-sidebar header h1:nth-child(2)');
            const userSelectJQ: JQuery<HTMLElement> = $('.default-sidebar header h1:nth-child(2)');

            const colleagueSelectJS = document.querySelector('.active-colleague h3:nth-child(2)');
            const colleagueSelectJQ = $('.active-colleague h3:nth-child(2)');

            let pageName: String = mainJS.classList[0];
            switch (pageName) {
              case 'logged-main':
                $('#user-name').text(userSelectJS.textContent);
                break;
              case 'manage-main':
                const employeesTotal = GetEmployee.employees().length;
                for (let i = 0; i < employeesTotal; i++) {
                  let firstName: String = GetEmployee.employees()[i].firstName;
                  let lastName: String = GetEmployee.employees()[i].lastName;
                  if (`${firstName} ${lastName}` === userSelectJS.textContent) {
                    $('[class*="main"] header h1').text(`${GetEmployee.employees()[i].department}`);
                  }
                }
                break;
              case 'user-main':
                $('#user-name').text(userSelectJS.textContent);
                break;
              case 'colleague-main':
                $('#colleague-name').text(colleagueSelectJS.textContent);
                break;
            }
          };
          replaceText();
          let countTickets = () => {
            let activeTabJS: HTMLButtonElement = document.querySelector('.active-tab');
            let activeTabJQ: JQuery<HTMLButtonElement> = $('.active-tab');

            const pendingTotalJQ: number = $('#tickets-container .pending').length;
            const assignedTotalJQ: number = $('#tickets-container .assigned').length;
            const resolvedTotalJQ: number = $('#tickets-container .resolved').length;
            const deletedTotalJQ: number = $('#tickets-container .deleted').length;
            const everythingTotalJQ: number = pendingTotalJQ + assignedTotalJQ + resolvedTotalJQ + deletedTotalJQ;

            let tabStatusJS: String = activeTabJS.id.split('-')[0];
            switch (tabStatusJS) {
              case 'pending':
                $('[id*="notification"] h2').text(pendingTotalJQ);
                break;
              case 'assigned':
                $('[id*="notification"] h2').text(assignedTotalJQ);
                break;
              case 'resolved':
                $('[id*="notification"] h2').text(resolvedTotalJQ);
                break;
              case 'deleted':
                $('[id*="notification"] h2').text(deletedTotalJQ);
                break;
              case 'everything':
                $('[id*="notification"] h2').text(everythingTotalJQ);
                break;
            }
          };
          countTickets();
          $('[id*="tab"]').on('click', () => {
            countTickets();
          });

          break;
        case 'sidebar':
          // Code Here
          break;
        case 'overlay':
          // Code Here
          break;
      }
    }
  }
}
