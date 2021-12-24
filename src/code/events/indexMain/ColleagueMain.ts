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

//--|►| Colleague Main |◄|--//
export namespace ColleagueMain {
  export class initiateEvents {
    constructor() {
      // First ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      // Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let openEmployees: HTMLElement = indexMain.querySelector('#open-employees');
      let assignedTab: HTMLButtonElement = indexMain.querySelector('#assigned-tab');
      let resolvedTab: HTMLButtonElement = indexMain.querySelector('#resolved-tab');
      let deletedTab: HTMLButtonElement = indexMain.querySelector('#deleted-tab');
      let mainHeader: HTMLElement = indexMain.querySelector('#colleague-name');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');
      let activeColleague: String = indexSidebar.querySelector('.active-colleague .text').textContent;
      let employeeFooter: HTMLElement = indexSidebar.querySelector('#view-employees footer');
      let employeeButtons: HTMLCollection = employeeFooter.getElementsByTagName('span');
      mainHeader.textContent = `${activeColleague}`;

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      // Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

      // Classes ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      new DataRead.forMain('colleague-main', 'assigned');

      // Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      $(assignedTab)
        .on('click', () => {
          new DataRead.forMain('colleague-main', 'assigned');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(resolvedTab)
        .on('click', () => {
          new DataRead.forMain('colleague-main', 'resolved');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});

      $(deletedTab)
        .on('click', () => {
          new DataRead.forMain('colleague-main', 'deleted');
        })
        .on('mouseenter', () => {})
        .on('mouseleave', () => {});
      $(openEmployees).on('click', () => {
        indexSidebar.style.display = 'grid';
      });

      // Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */
      /*--► console.log('--ColleagueMain.js Loaded'); ◄--*/

      console.log('--ColleagueMain.js Loaded');
    }
  }
}
