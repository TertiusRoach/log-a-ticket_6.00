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

//--|►| Default Body |◄|--//
export namespace DefaultBody {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new GetEvent.forPage('default-data', GetPath.forHTML('data'));

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const userSelect: HTMLSelectElement = document.querySelector('#user-form select');
      const defaultOverlay: HTMLElement = document.querySelector('.default-overlay');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function findRole(userName: String) {
        let employeesData: HTMLDivElement = document.querySelector('.default-data #employees-data');
        let employeesCollection: HTMLCollection = employeesData.getElementsByTagName('article');
        let employeesTotal: Number = employeesData.getElementsByTagName('article').length;

        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = employeesCollection[i].children[0].textContent;
          let middleName: String = employeesCollection[i].children[1].textContent;
          let lastName: String = employeesCollection[i].children[2].textContent;
          let department: String = employeesCollection[i].children[3].textContent;
          let occupation: String = employeesCollection[i].children[4].textContent;
          let role: String = employeesCollection[i].children[5].textContent;
          let email: String = employeesCollection[i].children[6].textContent;
          let phone: String = employeesCollection[i].children[7].textContent;

          let employeeName: String = `${firstName} ${lastName}`;
          if (employeeName === userName) {
            return role.toLowerCase();
          }
        }
      }
      function refreshMain(role: String | 'manager' | 'employee') {
        let managerButton: Element = defaultOverlay.parentElement.children[2].children[0].children[0];
        let employeeButton: Element = defaultOverlay.parentElement.children[2].children[2].children[0];

        switch (role) {
          case 'manager':
            new GetEvent.forPage('logged-main', GetPath.forHTML('main'));

            managerButton.className = 'active-page';
            employeeButton.className = '';
            break;
          case 'employee':
            new GetEvent.forPage('manage-main', GetPath.forHTML('main'));

            managerButton.className = '';
            employeeButton.className = 'active-page';
            break;
        }
      }

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      $(userSelect).on('change', () => {
        let userName: String = userSelect.selectedOptions[0].textContent;
        refreshMain(findRole(userName));
      });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      /*--► console.log('--DefaultBody.js Loaded'); ◄--*/
    }
  }
}
