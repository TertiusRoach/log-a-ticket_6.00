define(["require", "exports", "code/tools/GetArray"], function (require, exports, GetArray_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataRead = void 0;
    var DataRead;
    (function (DataRead) {
        var forMain = (function () {
            function forMain(page, status) {
                var userSelect = document.querySelector('#user-form select');
                var ticketsMain = document.querySelector('#tickets-container');
                var employeesData = document.querySelector('#employees-data');
                var ticketsData = document.querySelector('#tickets-data');
                var userName = userSelect.selectedOptions[0].textContent;
                var employeesCollection = employeesData.getElementsByTagName('article');
                var ticketsCollection = ticketsData.getElementsByTagName('article');
                var userDepartment = findDepartment(userName);
                var ticketsTotal = ticketsCollection.length;
                var loggedHeader = document.querySelector('#logged-header h1');
                var manageHeader = document.querySelector('#manage-header h1');
                var coworkerHeader = document.querySelector('#coworker-header h1');
                var colleagueHeader = document.querySelector('#colleague-header h1');
                var userHeader = document.querySelector('#user-name');
                function findDepartment(userName) {
                    var employeesTotal = employeesData.getElementsByTagName('article').length;
                    for (var i = 0; i < employeesTotal; i++) {
                        var firstName = employeesCollection[i].children[0].textContent;
                        var middleName = employeesCollection[i].children[1].textContent;
                        var lastName = employeesCollection[i].children[2].textContent;
                        var department = employeesCollection[i].children[3].textContent;
                        var employeeName = "".concat(firstName, " ").concat(lastName);
                        if (employeeName === userName) {
                            return department;
                        }
                    }
                }
                function clearTickets(container, status) {
                    container.innerHTML = '';
                    container.className = '';
                    container.className = "".concat(status, "-tickets");
                }
                clearTickets(ticketsMain, status);
                switch (page) {
                    case 'colleague-main':
                        break;
                    case 'coworker-main':
                        coworkerHeader.innerHTML = "".concat(userName);
                        var _loop_1 = function (i) {
                            var ticketInfo = ticketsCollection[i].children[1];
                            var ticketStatus = ticketInfo.children[0].textContent.toLowerCase();
                            var ticketRating = ticketInfo.children[1].textContent;
                            var subjectText = ticketInfo.children[2].textContent;
                            var descriptionText = ticketInfo.children[3].textContent;
                            var senderName = ticketInfo.children[4].textContent;
                            var senderDepartment = ticketInfo.children[5].textContent;
                            var receiverName = ticketInfo.children[6].textContent;
                            var receiverDepartment = ticketInfo.children[7].textContent;
                            var dateShort = ticketInfo.children[8].textContent;
                            var datePending = ticketInfo.children[9].textContent;
                            var dateAssigned = ticketInfo.children[10].textContent;
                            var dateResolved = ticketInfo.children[11].textContent;
                            var noteResolved = ticketInfo.children[12].textContent;
                            var dateDeleted = ticketInfo.children[13].textContent;
                            var noteDeleted = ticketInfo.children[14].textContent;
                            var receiverDefault = function () {
                                switch (receiverName) {
                                    case "".concat(undefined):
                                        return receiverDepartment;
                                    default:
                                        return receiverName;
                                }
                            };
                            if (senderName === userName && ticketStatus === status) {
                                $(ticketsMain).append("<article class=\"".concat(ticketStatus, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"receiver\">").concat(receiverDefault(), "</p>\n                  \n                  <div style=\"display: none\">\n                    <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                    <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                    <p class=\"subject-text\">").concat(subjectText, "</p>\n                    <p class=\"description-text\">").concat(descriptionText, "</p>\n                    <p class=\"sender-name\">").concat(senderName, "</p>\n                    <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                    <p class=\"receiver-name\">").concat(receiverName, "</p>\n                    <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                    <p class=\"date-short\">").concat(dateShort, "</p>\n                    <p class=\"date-pending\">").concat(datePending, "</p>\n                    <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                    <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                    <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                    <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                    <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                  </div>\n                </article>"));
                            }
                        };
                        for (var i = 0; i < ticketsTotal; i++) {
                            _loop_1(i);
                        }
                        break;
                    case 'logged-main':
                        loggedHeader.innerHTML = "".concat(userName);
                        var _loop_2 = function (i) {
                            var ticketInfo = ticketsCollection[i].children[1];
                            var ticketStatus = ticketInfo.children[0].textContent.toLowerCase();
                            var ticketRating = ticketInfo.children[1].textContent;
                            var subjectText = ticketInfo.children[2].textContent;
                            var descriptionText = ticketInfo.children[3].textContent;
                            var senderName = ticketInfo.children[4].textContent;
                            var senderDepartment = ticketInfo.children[5].textContent;
                            var receiverName = ticketInfo.children[6].textContent;
                            var receiverDepartment = ticketInfo.children[7].textContent;
                            var dateShort = ticketInfo.children[8].textContent;
                            var datePending = ticketInfo.children[9].textContent;
                            var dateAssigned = ticketInfo.children[10].textContent;
                            var dateResolved = ticketInfo.children[11].textContent;
                            var noteResolved = ticketInfo.children[12].textContent;
                            var dateDeleted = ticketInfo.children[13].textContent;
                            var noteDeleted = ticketInfo.children[14].textContent;
                            var receiverDefault = function () {
                                switch (receiverName) {
                                    case "".concat(undefined):
                                        return receiverDepartment;
                                    default:
                                        return receiverName;
                                }
                            };
                            if (senderName === userName && ticketStatus === status) {
                                $(ticketsMain).append("<article class=\"".concat(ticketStatus, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"receiver\">").concat(receiverDefault(), "</p>\n                  \n                  <div style=\"display: none\">\n                    <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                    <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                    <p class=\"subject-text\">").concat(subjectText, "</p>\n                    <p class=\"description-text\">").concat(descriptionText, "</p>\n                    <p class=\"sender-name\">").concat(senderName, "</p>\n                    <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                    <p class=\"receiver-name\">").concat(receiverName, "</p>\n                    <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                    <p class=\"date-short\">").concat(dateShort, "</p>\n                    <p class=\"date-pending\">").concat(datePending, "</p>\n                    <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                    <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                    <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                    <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                    <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                  </div>\n                </article>"));
                            }
                        };
                        for (var i = 0; i < ticketsTotal; i++) {
                            _loop_2(i);
                        }
                        break;
                    case 'manage-main':
                        manageHeader.innerHTML = "".concat(findDepartment(userName));
                        for (var i = 0; i < ticketsTotal; i++) {
                            var ticketInfo = ticketsCollection[i].children[1];
                            var ticketStatus = ticketInfo.children[0].textContent.toLowerCase();
                            var ticketRating = ticketInfo.children[1].textContent;
                            var subjectText = ticketInfo.children[2].textContent;
                            var descriptionText = ticketInfo.children[3].textContent;
                            var senderName = ticketInfo.children[4].textContent;
                            var senderDepartment = ticketInfo.children[5].textContent;
                            var receiverName = ticketInfo.children[6].textContent;
                            var receiverDepartment = ticketInfo.children[7].textContent;
                            var dateShort = ticketInfo.children[8].textContent;
                            var datePending = ticketInfo.children[9].textContent;
                            var dateAssigned = ticketInfo.children[10].textContent;
                            var dateResolved = ticketInfo.children[11].textContent;
                            var noteResolved = ticketInfo.children[12].textContent;
                            var dateDeleted = ticketInfo.children[13].textContent;
                            var noteDeleted = ticketInfo.children[14].textContent;
                            if (userDepartment === receiverDepartment && receiverName === "".concat(undefined)) {
                                $(ticketsMain).append("<article class=\"".concat(ticketStatus, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"sender\">").concat(senderName, "</p>\n                  \n                  <div style=\"display: none\">\n                    <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                    <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                    <p class=\"subject-text\">").concat(subjectText, "</p>\n                    <p class=\"description-text\">").concat(descriptionText, "</p>\n                    <p class=\"sender-name\">").concat(senderName, "</p>\n                    <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                    <p class=\"receiver-name\">").concat(receiverName, "</p>\n                    <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                    <p class=\"date-short\">").concat(dateShort, "</p>\n                    <p class=\"date-pending\">").concat(datePending, "</p>\n                    <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                    <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                    <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                    <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                    <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                  </div>\n                </article>"));
                            }
                        }
                        break;
                    case 'user-main':
                        ticketsMain.innerHTML = '';
                        ticketsMain.className = '';
                        ticketsMain.className = "".concat(status, "-tickets");
                        userHeader.innerHTML = "".concat(userName);
                        for (var i = 0; i < ticketsTotal; i++) {
                            var ticketInfo = ticketsCollection[i].children[1];
                            var ticketStatus = ticketInfo.children[0].textContent.toLowerCase();
                            var ticketRating = ticketInfo.children[1].textContent;
                            var subjectText = ticketInfo.children[2].textContent;
                            var descriptionText = ticketInfo.children[3].textContent;
                            var senderName = ticketInfo.children[4].textContent;
                            var senderDepartment = ticketInfo.children[5].textContent;
                            var receiverName = ticketInfo.children[6].textContent;
                            var receiverDepartment = ticketInfo.children[7].textContent;
                            var dateShort = ticketInfo.children[8].textContent;
                            var datePending = ticketInfo.children[9].textContent;
                            var dateAssigned = ticketInfo.children[10].textContent;
                            var dateResolved = ticketInfo.children[11].textContent;
                            var noteResolved = ticketInfo.children[12].textContent;
                            var dateDeleted = ticketInfo.children[13].textContent;
                            var noteDeleted = ticketInfo.children[14].textContent;
                            if (userDepartment === receiverDepartment && receiverName === userName) {
                                $(ticketsMain).append("<article class=\"".concat(ticketStatus, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"sender\">").concat(senderName, "</p>\n                  \n                  <div style=\"display: none\">\n                    <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                    <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                    <p class=\"subject-text\">").concat(subjectText, "</p>\n                    <p class=\"description-text\">").concat(descriptionText, "</p>\n                    <p class=\"sender-name\">").concat(senderName, "</p>\n                    <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                    <p class=\"receiver-name\">").concat(receiverName, "</p>\n                    <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                    <p class=\"date-short\">").concat(dateShort, "</p>\n                    <p class=\"date-pending\">").concat(datePending, "</p>\n                    <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                    <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                    <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                    <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                    <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                  </div>\n                </article>"));
                            }
                        }
                        break;
                }
            }
            return forMain;
        }());
        DataRead.forMain = forMain;
        var forSidebar = (function () {
            function forSidebar(page) {
                function build(type) {
                    var userName = $('#testing-form select option:selected').text();
                    switch (type) {
                        case 'header':
                            var departmentForm = document.querySelector('#department-form select');
                            var activeUser = $('#testing-form select option:selected').text();
                            var employeesTotal = GetArray_1.GetArray.employees().length;
                            var userDepartment = void 0;
                            for (var i = 0; i < employeesTotal; i++) {
                                var employeeName = "".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName);
                                if (activeUser === employeeName) {
                                    userDepartment = GetArray_1.GetArray.employees()[i].department;
                                }
                            }
                            $(departmentForm).empty();
                            $(departmentForm).append("<option value=\"".concat(textToValue(userDepartment), "\">").concat(userDepartment, "</option>"));
                            var departmentsTotal = GetArray_1.GetArray.departments().length;
                            for (var i = 0; i < departmentsTotal; i++) {
                                var coworkerDepartment = GetArray_1.GetArray.departments()[i].department;
                                if (userDepartment !== coworkerDepartment) {
                                    $(departmentForm).append("<option value=\"".concat(textToValue(coworkerDepartment), "\">").concat(coworkerDepartment, "</option>"));
                                }
                            }
                            break;
                        case 'footer':
                            var viewCoworkers = document.querySelector('#view-coworkers footer');
                            var viewDepartment = document.querySelector('#department-form select');
                            $(viewCoworkers).empty();
                            var department = valueToText(viewDepartment.value);
                            var coworkersTotal = GetArray_1.GetArray.employees().length;
                            for (var i = 0; i < coworkersTotal; i++) {
                                var firstName = "".concat(GetArray_1.GetArray.employees()[i].firstName);
                                var lastName = "".concat(GetArray_1.GetArray.employees()[i].lastName);
                                var employeeName = "".concat(firstName, " ").concat(lastName);
                                if (department === GetArray_1.GetArray.employees()[i].department) {
                                    var coworkerName = "".concat(GetArray_1.GetArray.employees()[i].firstName, " ").concat(GetArray_1.GetArray.employees()[i].lastName);
                                    if (userName !== coworkerName) {
                                        $(viewCoworkers).append("<span class=\"\" onClick=\"$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');\">\n                                            <h1 class=\"notification\">0</h1>\n                                            <h1 class=\"text\">".concat(employeeName, "</h1>\n                                          </span>"));
                                    }
                                }
                            }
                            break;
                    }
                }
                function clearContainer() {
                    $('.coworkers-sidebar').css('display', 'none');
                    $('.coworkers-sidebar').empty();
                }
                function textToValue(text) {
                    var array = text.split(' ');
                    switch (array[1]) {
                        case undefined:
                            return "".concat(array[0]).toLowerCase();
                        default:
                            return "".concat(array[0], "-").concat(array[1]).toLowerCase();
                    }
                }
                function valueToText(text) {
                    var array = text.split('-');
                    switch (array[1]) {
                        case undefined:
                            return "".concat(array[0].charAt(0).toUpperCase()).concat(array[0].slice(1));
                        default:
                            return "".concat(array[0].charAt(0).toUpperCase()).concat(array[0].slice(1), " ").concat(array[1].charAt(0).toUpperCase()).concat(array[1].slice(1));
                    }
                }
            }
            return forSidebar;
        }());
        DataRead.forSidebar = forSidebar;
    })(DataRead = exports.DataRead || (exports.DataRead = {}));
});

//# sourceMappingURL=dist/code/tools/DataRead.js.map
