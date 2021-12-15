define(["require", "exports", "code/tools/GetArray", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetArray_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultOverlay = void 0;
    var DefaultOverlay;
    (function (DefaultOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new GetEvent_1.GetEvent.forPage('default-header', GetPath_1.GetPath.forHTML('header'));
                var defaultOverlay = document.querySelector('.default-overlay');
                var managerButton = document.querySelector('#manager-tickets button');
                var employeeButton = document.querySelector('#employee-tickets button');
                function highlight(button) {
                    var managerButton = defaultOverlay.parentElement.children[1].children[0].children[0];
                    var employeeButton = defaultOverlay.parentElement.children[1].children[2].children[0];
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
                function selectUser(role) {
                    var managersArray = [];
                    var employeesArray = [];
                    for (var i = 0; i < GetArray_1.GetArray.employees().length; i++) {
                        switch (GetArray_1.GetArray.employees()[i].role) {
                            case 'Manager':
                                managersArray.push("".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName));
                                break;
                            case 'Employee':
                                employeesArray.push("".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName));
                                break;
                        }
                    }
                    var userIndex;
                    var userSelected;
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
                function buildEmployees(userName) {
                    var employeesTotal = GetArray_1.GetArray.employees().length;
                    var userForm = document.querySelector('#user-form select');
                    userForm.innerHTML = '';
                    for (var i = 0; i < employeesTotal; i++) {
                        var employeeName = "".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName);
                        var employeeValue = "".concat(GetArray_1.GetArray.employees()[i].firstName.toLowerCase(), "-").concat(GetArray_1.GetArray.employees()[i].lastName.toLowerCase());
                        if (employeeName === userName) {
                            $('#user-form select').append("<option value=\"".concat(employeeValue, "\" selected>").concat(userName, "</option>"));
                        }
                        else if (employeeName !== userName) {
                            $('#user-form select').append("<option value=\"".concat(employeeValue, "\">").concat(employeeName, "</option>"));
                        }
                    }
                }
                $(managerButton).on('mouseenter', function () {
                    new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                    buildEmployees(selectUser('Manager'));
                    highlight('manager-button');
                });
                $(employeeButton).on('mouseenter', function () {
                    new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                    buildEmployees(selectUser('Employee'));
                    highlight('employee-button');
                });
                console.log('--DefaultOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        DefaultOverlay.initiateEvents = initiateEvents;
    })(DefaultOverlay = exports.DefaultOverlay || (exports.DefaultOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DefaultOverlay.js.map
