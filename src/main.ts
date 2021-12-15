import { GetPage } from 'code/tools/GetPage';

//--|►| Main (Log a Ticket) |◄|--//
export namespace Get {
  export function color(
    name:
      | 'primary-dark'
      | 'primary-medium'
      | 'primary-medium'
      | 'secondary-dark'
      | 'secondary-medium'
      | 'secondary-medium'
      | 'tertiary-dark'
      | 'tertiary-medium'
      | 'tertiary-medium'
      | 'pending-default'
      | 'pending-opacity'
      | 'assigned-default'
      | 'assigned-opacity'
      | 'resolved-default'
      | 'resolved-opacity'
      | 'deleted-default'
      | 'deleted-opacity'
  ) {
    switch (name) {
      case 'primary-dark':
        return '#084887';
      case 'primary-medium':
        return '#4c72a4';
      case 'primary-medium':
        return '#909cc2';
      case 'secondary-dark':
        return '#f58a07';
      case 'secondary-medium':
        return '#f8af58';
      case 'secondary-medium':
        return '#fcd5aa';
      case 'tertiary-dark':
        return '#024d04';
      case 'tertiary-medium':
        return '#08870c';
      case 'tertiary-medium':
        return '#94be94';
      case 'pending-default':
        return '#f8af58';
      case 'pending-opacity':
        return 'rgba(245, 138, 7, 0.15)';
      case 'assigned-default':
        return '#4c72a4';
      case 'assigned-opacity':
        return 'rgba(144, 156, 194, 0.75)';
      case 'resolved-default':
        return '#08870c';
      case 'resolved-opacity':
        return 'rgba(8, 135, 12, 0.15)';
      case 'deleted-default':
        return '#f95555';
      case 'deleted-opacity':
        return 'rgba(249, 85, 85, 0.15)';
    }
  }
  export function path(path: 'body' | 'header' | 'main' | 'sidebar' | 'overlay' | 'data') {
    switch (path) {
      case 'body':
        return 'html/index-body/'; //--► Body <body> ◄--//
      case 'header':
        return 'html/index-header/'; //--► Header <header> ◄--//
      case 'main':
        return 'html/index-main/'; //--► Main <main> ◄--//
      case 'sidebar':
        return 'html/index-sidebar/'; //--► Sidebar <aside> ◄--//
      case 'overlay':
        return 'html/index-overlay/'; //--► Overlay <section> ◄--//
      case 'data':
        return 'html/index-data/'; //--► Data <iframe> ◄--//
    }
  }
}

export namespace Start {
  //--▼ GetPage.initiateCode(pagePath, pageName) ▼--//
  new GetPage.initiateCode(Get.path('body'), 'default-body');
  new GetPage.initiateCode(Get.path('overlay'), 'default-overlay');

  /*--► console.log('--main.js Loaded'); ◄--*/
}
