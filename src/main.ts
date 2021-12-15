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

//--|►| Main (Log a Ticket) |◄|--//
export namespace Start {
  //--▼ GetPage.forPage(pageName, pagePath) ▼--//
  new GetEvent.forPage('default-body', GetPath.forHTML('body'));
  new GetEvent.forPage('default-overlay', GetPath.forHTML('overlay'));

  /*--► console.log('--main.js Loaded'); ◄--*/
}
export namespace Use {
  export function capitalize(employeeValue: String) {
    let firstSplit: String = employeeValue.split('-')[0];
    let firstName: String = `${firstSplit.charAt(0).toUpperCase() + firstSplit.slice(1)}`;

    let secondSplit: String = employeeValue.split('-')[1];
    let lastName: String = `${secondSplit.charAt(0).toUpperCase() + secondSplit.slice(1)}`;

    return `${firstName} ${lastName}`;
  }
  export function valuing(employeeName: String) {}
}
