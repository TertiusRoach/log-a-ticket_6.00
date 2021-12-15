//--|►| StyleTags |◄|--//
export namespace StyleTags {
  /*--▼ Colors ▼--*/
  const primaryDark: String = '#084887';
  const primaryMedium: String = '#4c72a4';
  const primaryLight: String = '#909cc2';

  const secondaryDark: String = '#f58a07';
  const secondaryMedium: String = '#f8af58';
  const secondaryLight: String = '#fcd5aa';

  const tertiaryDark: String = '#024d04';
  const tertiaryMedium: String = '#08870c';
  const tertiaryLight: String = '#94be94';

  const pendingDefault: String = '#f8af58';
  const pendingOpacity: String = 'rgba(245, 138, 7, 0.15)';

  const assignedDefault: String = '#4c72a4';
  const assignedOpacity: String = 'rgba(144, 156, 194, 0.75)';

  const resolvedDefault: String = '#08870c';
  const resolvedOpacity: String = 'rgba(8, 135, 12, 0.15)';

  const deletedDefault: String = '#f95555';
  const deletedOpacity: String = 'rgba(249, 85, 85, 0.15)';

  const ticketOdd: String = '#eef0f6';
  const ticketEven: String = '#cdd2e3';

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
  export class initiateEvents {
    constructor(pagePath: String, pageName: String) {
      const folderName = pagePath.split('/')[1];
      const segment = folderName.split('-')[1];

      switch (segment) {
        case 'body':
          // Code Here
          break;
        case 'header':
          if ('default-header' === pageName) {
            let highlightButton = (button: String) => {
              $(`${button} svg`).css('color', `${secondaryDark}`);
              $(`${button} svg`).css('cursor', 'default');
              $(`${button} h4`).css('color', `${secondaryDark}`);
              $(`${button} h4`).css('cursor', 'default');
            };
            let downplayButton = (button: ChildNode) => {
              $(button.childNodes[1]).css('color', '');
              $(button.childNodes[4]).css('color', '');
              $(button.childNodes[1]).css('cursor', 'pointer');
              $(button.childNodes[4]).css('cursor', 'pointer');

              $('#user-container h1:nth-child(2)').css('color', '');
              $('#user-container span').css('background', '');
              $('.active-colleague').removeClass('active-colleague');
            };

            $('#log-a-ticket').on('click', () => {
              $(`#log-a-ticket svg`).css('color', `${secondaryDark}`);
              $(`#log-a-ticket svg`).css('cursor', 'default');
              $(`#log-a-ticket h4`).css('color', `${secondaryDark}`);
              $(`#log-a-ticket h4`).css('cursor', 'default');
            });
            $('#logged-tickets').on('click', () => {
              highlightButton('#logged-tickets');
              downplayButton(headerJS.children[2]);
            });
            $('#manage-tickets').on('click', () => {
              highlightButton('#manage-tickets');
              downplayButton(headerJS.children[1]);
            });

            $('#log-a-ticket h4')
              .on('mouseenter', () => {
                $('#log-a-ticket').css('color', `${secondaryDark}`);
              })
              .on('mouseleave', () => {
                $('#log-a-ticket').css('color', '');
              });
            $('#logged-tickets h4')
              .on('mouseenter', () => {
                $('#logged-tickets').css('color', `${secondaryDark}`);
              })
              .on('mouseleave', () => {
                $('#logged-tickets').css('color', '');
              });
            $('#manage-tickets h4')
              .on('mouseenter', () => {
                $('#manage-tickets').css('color', `${secondaryDark}`);
              })
              .on('mouseleave', () => {
                $('#manage-tickets').css('color', '');
              });
          }
          break;
        case 'main':
          let highlightNotification = (status: 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything') => {
            const ticketsContainerJS = document.querySelector('#tickets-container');
            //--► Colors container by changing class ◄--//
            if (`${status}-tickets` !== ticketsContainerJS.className) {
              ticketsContainerJS.className = `${status}-tickets`;
            }
            switch (status) {
              case 'pending':
                $('[id*="notification"] h2').css('background', `${pendingDefault}`);
                break;
              case 'assigned':
                $('[id*="notification"] h2').css('background', `${assignedDefault}`);
                break;
              case 'resolved':
                $('[id*="notification"] h2').css('background', `${resolvedDefault}`);
                break;
              case 'deleted':
                $('[id*="notification"] h2').css('background', `${deletedDefault}`);
                break;
              case 'everything':
                $('[id*="notification"] h2').css('background', '');
                break;
            }
          };

          $('#pending-tab').on('click', () => {
            highlightNotification('pending');
          });
          $('#assigned-tab').on('click', () => {
            highlightNotification('assigned');
          });
          $('#resolved-tab').on('click', () => {
            highlightNotification('resolved');
          });
          $('#deleted-tab').on('click', () => {
            highlightNotification('deleted');
          });
          $('#everything-tab').on('click', () => {
            highlightNotification('everything');
          });
          break;
        case 'sidebar':
          let downplayHeader = (button: ChildNode) => {
            $(button.childNodes[1]).css('color', '');
            $(button.childNodes[4]).css('color', '');
            $(button.childNodes[1]).css('cursor', 'pointer');
            $(button.childNodes[4]).css('cursor', 'pointer');
          };
          $('#employees > header').on('click', () => {
            $('#user-container h1:nth-child(2)').css('color', `${secondaryDark}`);
            $('#user-container h1:nth-child(2)').css('cursor', 'default');
            $('#user-container span').css('background', `${primaryMedium}`);

            downplayHeader(headerJS.children[1]);
            downplayHeader(headerJS.children[2]);
          });
          $('#employees > div').on('click', () => {
            $('#user-container h1:nth-child(2)').css('color', '');
            $('#user-container h1:nth-child(2)').css('cursor', 'pointer');
            $('#user-container span').css('background', '');

            downplayHeader(headerJS.children[1]);
            downplayHeader(headerJS.children[2]);
          });
          break;
        case 'overlay':
          if ('colleague-assigned' === pageName) {
            // Code Here
          }
          if ('colleague-deleted' === pageName) {
            // Code Here
          }
          if ('colleague-resolved' === pageName) {
            // Code Here
          }
          if ('default-overlay' === pageName) {
            $('#manager-tickets').on('click', () => {
              highlightHeader('#logged-tickets');
            });
            $('#employee-tickets').on('click', () => {
              highlightHeader('#manage-tickets');
            });

            let highlightHeader = (button: String) => {
              $(`${button} svg`).css('color', `${secondaryDark}`);
              $(`${button} svg`).css('cursor', 'default');

              $(`${button} h4`).css('color', `${secondaryDark}`);
              $(`${button} h4`).css('cursor', 'default');
            };

            $('#manager-tickets h1')
              .on('mouseenter', () => {
                $('#manager-tickets').css('color', `${secondaryDark}`);
              })
              .on('mouseleave', () => {
                $('#manager-tickets').css('color', '');
              });

            $('#employee-tickets h1')
              .on('mouseenter', () => {
                $('#employee-tickets').css('color', `${secondaryDark}`);
              })
              .on('mouseleave', () => {
                $('#employee-tickets').css('color', '');
              });
          }
          if ('delete-overlay' === pageName) {
            // Code Here
          }
          if ('log-overlay' === pageName) {
            $('#close-overlay').on('click', () => {
              $(`#log-a-ticket svg`).css('color', '');
              $(`#log-a-ticket svg`).css('cursor', '');
              $(`#log-a-ticket h4`).css('color', '');
              $(`#log-a-ticket h4`).css('cursor', '');
            });
            $('#overlay-background').on('click', () => {
              $(`#log-a-ticket svg`).css('color', '');
              $(`#log-a-ticket svg`).css('cursor', '');
              $(`#log-a-ticket h4`).css('color', '');
              $(`#log-a-ticket h4`).css('cursor', '');
            });
          }
          if ('logged-assigned' === pageName) {
            // Code Here
          }
          if ('logged-deleted' === pageName) {
            // Code Here
          }
          if ('logged-pending' === pageName) {
            // Code Here
          }
          if ('logged-resolved' === pageName) {
            // Code Here
          }
          if ('manage-deleted' === pageName) {
            // Code Here
          }
          if ('manage-pending' === pageName) {
            // Code Here
          }
          if ('resolve-overlay' === pageName) {
            // Code Here
          }
          if ('user-assigned' === pageName) {
            // Code Here
          }
          if ('user-deleted' === pageName) {
            // Code Here
          }
          if ('user-resolved' === pageName) {
            // Code Here
          }
          break;
      }
    }
  }
  console.log('--style.js Loaded');
}
