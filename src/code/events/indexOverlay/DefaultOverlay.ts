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

import { Use } from 'main';

export namespace DefaultOverlay {
  export class initiateEvents {
    constructor() {
      new DataCreate.initiateCode('index-data');
      new GetEvent.forPage('default-header', GetPath.forHTML('header'));

      const defaultOverlay = document.querySelector('.default-overlay');
      const managerButton = document.querySelector('#manager-tickets button');
      const employeeButton = document.querySelector('#employee-tickets button');

      function highlight(button: 'manager-button' | 'employee-button') {
        let managerButton = defaultOverlay.parentElement.children[1].children[0].children[0];
        let employeeButton = defaultOverlay.parentElement.children[1].children[2].children[0];

        switch (button) {
          case 'manager-button':
            managerButton.className = 'active-page';
            employeeButton.className = '';
            break;
          case 'employee-button':
            managerButton.className = '';
            employeeButton.className = 'active-page';
            break;
        }
      }
      function selectUser(role: 'Manager' | 'Employee') {
        let managersArray = [];
        let employeesArray = [];

        for (let i = 0; i < GetArray.employees().length; i++) {
          switch (GetArray.employees()[i].role) {
            case 'Manager':
              managersArray.push(`${GetArray.employees()[i].firstName} ${GetArray.employees()[i].lastName}`);
              break;
            case 'Employee':
              employeesArray.push(`${GetArray.employees()[i].firstName} ${GetArray.employees()[i].lastName}`);
              break;
          }
        }

        let userIndex: number;
        let userSelected: String;
        switch (role) {
          case 'Manager':
            userIndex = Math.floor(Math.random() * managersArray.length);
            userSelected = managersArray[userIndex];
            break;
          case 'Employee':
            userIndex = Math.floor(Math.random() * employeesArray.length);
            userSelected = employeesArray[userIndex];
            break;
        }
        return userSelected;
      }
      function buildEmployees(userName: String) {
        let employeesTotal = GetArray.employees().length;
        let userForm: HTMLElement = document.querySelector('#user-form select');

        userForm.innerHTML = '';
        for (let i = 0; i < employeesTotal; i++) {
          let employeeName = `${GetArray.employees()[i].firstName} ${GetArray.employees()[i].lastName}`;
          let employeeValue = `${GetArray.employees()[i].firstName.toLowerCase()}-${GetArray.employees()[i].lastName.toLowerCase()}`;

          if (employeeName === userName) {
            $('#user-form select').append(`<option value="${employeeValue}" selected>${userName}</option>`);
          } else if (employeeName !== userName) {
            $('#user-form select').append(`<option value="${employeeValue}">${employeeName}</option>`);
          }
        }
      }

      $(managerButton).on('mouseenter', () => {
        new GetEvent.forPage('logged-main', GetPath.forHTML('main'));

        buildEmployees(selectUser('Manager'));
        highlight('manager-button');
      });
      $(employeeButton).on('mouseenter', () => {
        new GetEvent.forPage('manage-main', GetPath.forHTML('main'));

        buildEmployees(selectUser('Employee'));
        highlight('employee-button');
      });

      console.log('--DefaultOverlay.js Loaded');
    }
  }
}
/*
      function clearContainer(pageName: String, containerJS: HTMLElement, containerJQ: JQuery<HTMLElement>) {
        containerJS.innerHTML = '';
        containerJS.className = '';
        containerJS.style.display = 'none';
        containerJS.className = `${pageName}`;
      }
      function buildColleagues(userValue: String) {
        // Get Department
        let userDepartment: String;
        const employeesTotal = GetArray.employees().length;
        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = GetArray.employees()[i].firstName;
          let lastName: String = GetArray.employees()[i].lastName;

          if (`${firstName} ${lastName}` === `${Use.capitalize(userValue)}`) {
            userDepartment = GetArray.employees()[i].department;
          }
        }
        // Append Colleagues
        for (let i = 0; i < employeesTotal; i++) {
          let firstName: String = GetArray.employees()[i].firstName;
          let lastName: String = GetArray.employees()[i].lastName;

          switch (userDepartment) {
            case `${GetArray.employees()[i].department}`:
              if (`${firstName} ${lastName}` !== `${Use.capitalize(userValue)}`) {
                $('#employees').append(`
                          <div onClick="$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');">
                            <span style="cursor: default">
                              <h3>0</h3>
                            </span>
                            <h3 class="colleague-name">${firstName} ${lastName}</h3>
                          </div>`);
              }
          }
        }
      }
      */
