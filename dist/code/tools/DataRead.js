define(["require", "exports"], function (require, exports) {
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
                var employeesCollection = employeesData.getElementsByTagName('article');
                var ticketsCollection = ticketsData.getElementsByTagName('article');
                var userName = userSelect.selectedOptions[0].textContent;
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
                function buildTickets(page, status) {
                    var loggedHeader = document.querySelector('#logged-header h1');
                    var manageHeader = document.querySelector('#manage-header h1');
                    var ticketsTotal = ticketsCollection.length;
                    switch (page) {
                        case 'colleague-main':
                            break;
                        case 'coworker-main':
                            break;
                        case 'logged-main':
                            ticketsMain.innerHTML = '';
                            ticketsMain.className = '';
                            ticketsMain.className = "".concat(status, "-tickets");
                            loggedHeader.innerHTML = "".concat(userName);
                            var _loop_1 = function (i) {
                                var ticketInfo = ticketsCollection[i].children[1];
                                var ticketStatus = ticketInfo.children[0].textContent;
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
                                if (senderName === userName && ticketStatus.toLowerCase() === status) {
                                    $(ticketsMain).append("<article class=\"".concat(status, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                      <p class=\"shortdate\">").concat(dateShort, "</p>\n                      <p class=\"subject\">").concat(subjectText, "</p>\n                      <p class=\"receiver\">").concat(receiverDefault(), "</p>\n                    </article>"));
                                }
                            };
                            for (var i = 0; i < ticketsTotal; i++) {
                                _loop_1(i);
                            }
                            break;
                        case 'manage-main':
                            manageHeader.innerHTML = "".concat(findDepartment(userName));
                            ticketsMain.innerHTML = '';
                            ticketsMain.className = '';
                            ticketsMain.className = "".concat(status, "-tickets");
                            var userDepartment = findDepartment(userName);
                            for (var i = 0; i < ticketsTotal; i++) {
                                var ticketInfo = ticketsCollection[i].children[1];
                                var ticketStatus = ticketInfo.children[0].textContent;
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
                                if (receiverName === "".concat(undefined)) {
                                    if (userDepartment === receiverDepartment) {
                                        $(ticketsMain).append("<article class=\"".concat(status, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                        <p class=\"shortdate\">").concat(dateShort, "</p>\n                        <p class=\"subject\">").concat(subjectText, "</p>\n                        <p class=\"sender\">").concat(senderName, "</p>\n                      </article>"));
                                    }
                                }
                            }
                            console.log("".concat(findDepartment(userName)));
                            break;
                        case 'user-main':
                            break;
                    }
                }
                buildTickets(page, status);
            }
            return forMain;
        }());
        DataRead.forMain = forMain;
        var forSidebar = (function () {
            function forSidebar(page) {
            }
            return forSidebar;
        }());
        DataRead.forSidebar = forSidebar;
    })(DataRead = exports.DataRead || (exports.DataRead = {}));
});

//# sourceMappingURL=dist/code/tools/DataRead.js.map
