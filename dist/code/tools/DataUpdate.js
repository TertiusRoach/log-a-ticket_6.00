define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath", "code/tools/UseCapify", "code/tools/UseDatefy"], function (require, exports, GetEvent_1, GetPath_1, UseCapify_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataUpdate = void 0;
    var DataUpdate;
    (function (DataUpdate) {
        var forTicket = (function () {
            function forTicket(status) {
                var indexBody = document.querySelector('#index-body');
                var userSelect = indexBody.querySelector('#user-form select');
                var indexHeader = document.querySelector('#index-header');
                var loggedTickets = indexHeader.querySelector('#logged-tickets button');
                var logAticket = indexHeader.querySelector('#log-a-ticket button');
                var manageTickets = indexHeader.querySelector('#manage-tickets button');
                var activeButton = indexHeader.querySelector('.active-page');
                var indexMain = document.querySelector('#index-main');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var mainButton = '[id*="-ticket"] button';
                var logButton = indexOverlay.querySelector('#log-ticket button');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var assignDate = indexOverlay.querySelector('#assigned-date');
                var indexData = document.querySelector('#index-data');
                var ticketsData = indexData.querySelector('#tickets-data');
                var departmentsContainer = indexData.querySelector('#departments-data');
                var employeesContainer = indexData.querySelector('#employees-data');
                var employeesTotal = employeesContainer.children.length;
                var ticketsContainer = indexData.querySelector('#tickets-data');
                var ticketsCollection = ticketsData.getElementsByTagName('article');
                var ticketsTotal = ticketsCollection.length;
                function closeContainer(block) {
                    var page = block.split('-')[1];
                    indexOverlay.className = "default-".concat(page);
                    indexOverlay.style.display = 'none';
                    indexMain.style.display = 'grid';
                    indexOverlay.innerHTML = '';
                    logAticket.className = '';
                }
                function highlightButton(role) { }
                function receiverDefault(receiverName, receiverDepartment) {
                    switch (receiverName) {
                        case "".concat(undefined):
                            return receiverDepartment;
                        default:
                            return receiverName;
                    }
                }
                function refreshPages() {
                    new GetEvent_1.GetEvent.forPage('default-header', GetPath_1.GetPath.forHTML('header'));
                    new GetEvent_1.GetEvent.forPage('coworkers-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    new GetEvent_1.GetEvent.forPage("".concat(indexMain.className), GetPath_1.GetPath.forHTML('main'));
                }
                switch (status) {
                    case 'pending':
                        var logStatus = "".concat(findTicket('status', "".concat(status)));
                        var logRating = "".concat(findTicket('rating', "".concat(status)));
                        var logSubject = "".concat(findTicket('subject', "".concat(status)));
                        var logDescription = "".concat(findTicket('description', "".concat(status)));
                        var logSenderName = "".concat(findTicket('sender', "".concat(status)));
                        var logSenderDepartment = "".concat(findTicket('sender-department', "".concat(status)));
                        var logReceiverName = "".concat(findTicket('receiver', "".concat(status)));
                        var logReceiverDepartment = "".concat(findTicket('receiver-department', "".concat(status)));
                        var logDateShort = "".concat(findTicket('date-short', "".concat(status)));
                        var logDatePending = "".concat(findTicket('date-pending', "".concat(status)));
                        var logDateAssigned = "".concat(findTicket('date-assigned', "".concat(status)));
                        var logDateResolved = "".concat(findTicket('date-resolved', "".concat(status)));
                        var logNoteResolved = "".concat(findTicket('resolved-note', "".concat(status)));
                        var logDateDeleted = "".concat(findTicket('date-deleted', "".concat(status)));
                        var logNoteDeleted = "".concat(findTicket('deleted-note', "".concat(status)));
                        $(ticketsData).append("<article class=\"ticket ".concat(logStatus.toLowerCase(), "\">\n              <header>\n                <p class=\"shortdate\">").concat(logDateShort, "</p>\n                <p class=\"subject\">").concat(logSubject, "</p>\n                <p class=\"receiver\">").concat(receiverDefault(logReceiverName, logReceiverDepartment), "</p>\n              </header>                  \n              <footer>\n                <p class=\"ticket-status\">").concat(logStatus, "</p>\n                <p class=\"ticket-rating\">").concat(logRating, "</p>\n                <p class=\"subject-text\">").concat(logSubject, "</p>\n                <p class=\"description-text\">").concat(logDescription, "</p>\n                <p class=\"sender-name\">").concat(logSenderName, "</p>\n                <p class=\"sender-department\">").concat(logSenderDepartment, "</p>\n                <p class=\"receiver-name\">").concat(logReceiverName, "</p>\n                <p class=\"receiver-department\">").concat(logReceiverDepartment, "</p>\n                <p class=\"date-short\">").concat(logDateShort, "</p>\n                <p class=\"date-pending\">").concat(logDatePending, "</p>\n                <p class=\"date-assigned\">").concat(logDateAssigned, "</p>\n                <p class=\"date-resolved\">").concat(logDateResolved, "</p>\n                <p class=\"note-resolved\">").concat(logNoteResolved, "</p>\n                <p class=\"date-deleted\">").concat(logDateDeleted, "</p>\n                <p class=\"note-deleted\">").concat(logNoteDeleted, "</p>\n              </footer>\n            </article>"));
                        closeContainer('index-overlay');
                        refreshPages();
                        break;
                    case 'assigned':
                        var assignStatus = "".concat(findTicket('status', "".concat(status)));
                        var assignRating = "".concat(findTicket('rating', "".concat(status)));
                        var assignSubject = "".concat(findTicket('subject', "".concat(status)));
                        var assignDescription = "".concat(findTicket('description', "".concat(status)));
                        var assignSenderName = "".concat(findTicket('sender', "".concat(status)));
                        var assignSenderDepartment = "".concat(findTicket('sender-department', "".concat(status)));
                        var assignReceiverName = "".concat(findTicket('receiver', "".concat(status)));
                        var assignReceiverDepartment = "".concat(findTicket('receiver-department', "".concat(status)));
                        var assignDateShort = "".concat(findTicket('date-short', "".concat(status)));
                        var assignDatePending = "".concat(findTicket('date-pending', "".concat(status)));
                        var assignDateAssigned = "".concat(findTicket('date-assigned', "".concat(status)));
                        var assignDateResolved = "".concat(findTicket('date-resolved', "".concat(status)));
                        var assignNoteResolved = "".concat(findTicket('resolved-note', "".concat(status)));
                        var assignDateDeleted = "".concat(findTicket('date-deleted', "".concat(status)));
                        var assignNoteDeleted = "".concat(findTicket('deleted-note', "".concat(status)));
                        $(ticketsData).append("<article class=\"ticket ".concat(assignStatus.toLowerCase(), "\">\n              <header>\n                <p class=\"shortdate\">").concat(assignDateShort, "</p>\n                <p class=\"subject\">").concat(assignSubject, "</p>\n                <p class=\"receiver\">").concat(assignReceiverName, "</p>\n              </header>                  \n              <footer>\n                <p class=\"ticket-status\">").concat(assignStatus, "</p>\n                <p class=\"ticket-rating\">").concat(assignRating, "</p>\n                <p class=\"subject-text\">").concat(assignSubject, "</p>\n                <p class=\"description-text\">").concat(assignDescription, "</p>\n                <p class=\"sender-name\">").concat(assignSenderName, "</p>\n                <p class=\"sender-department\">").concat(assignSenderDepartment, "</p>\n                <p class=\"receiver-name\">").concat(assignReceiverName, "</p>\n                <p class=\"receiver-department\">").concat(assignReceiverDepartment, "</p>\n                <p class=\"date-short\">").concat(assignDateShort, "</p>\n                <p class=\"date-pending\">").concat(assignDatePending, "</p>\n                <p class=\"date-assigned\">").concat(assignDateAssigned, "</p>\n                <p class=\"date-resolved\">").concat(assignDateResolved, "</p>\n                <p class=\"note-resolved\">").concat(assignNoteResolved, "</p>\n                <p class=\"date-deleted\">").concat(assignDateDeleted, "</p>\n                <p class=\"note-deleted\">").concat(assignNoteDeleted, "</p>\n              </footer>\n            </article>"));
                        closeContainer('index-overlay');
                        refreshPages();
                        break;
                    case 'resolved':
                        console.log("Ticket: ".concat(UseCapify_1.UseCapify.forString(' ', status)));
                        closeContainer('index-overlay');
                        refreshPages();
                        break;
                    case 'deleted':
                        console.log("Ticket: ".concat(UseCapify_1.UseCapify.forString(' ', status)));
                        closeContainer('index-overlay');
                        refreshPages();
                        break;
                }
                console.log('--DataUpdate.js Loaded');
            }
            return forTicket;
        }());
        DataUpdate.forTicket = forTicket;
        function findDepartment(userName) {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            for (var i = 0; i < employeesTotal; i++) {
                var firstName = employeesCollection[i].children[0].textContent;
                var middleName = employeesCollection[i].children[1].textContent;
                var lastName = employeesCollection[i].children[2].textContent;
                var department = employeesCollection[i].children[3].textContent;
                var occupation = employeesCollection[i].children[4].textContent;
                var role = employeesCollection[i].children[5].textContent;
                var employeeName = "".concat(firstName, " ").concat(lastName);
                if (employeeName === userName) {
                    return department;
                }
            }
        }
        function findTicket(info, status) {
            var indexBody = document.querySelector('#index-body');
            var indexHeader = document.querySelector('#index-header');
            var indexMain = document.querySelector('#index-main');
            var indexSidebar = document.querySelector('#index-sidebar');
            var indexData = document.querySelector('#index-data');
            var employeesContainer = indexData.querySelector('#employees-data');
            var employeesTotal = employeesContainer.children.length;
            var liveStatus;
            var liveRating;
            var liveSubject;
            var liveDescription;
            var liveSenderName;
            var liveSenderDepartment;
            var liveReceiverName;
            var liveReceiverDepartment;
            var liveDateShort;
            var liveDatePending;
            var liveDateAssigned;
            var liveDateResolved;
            var liveNoteResolved;
            var liveDateDeleted;
            var liveNoteDeleted;
            switch (status) {
                case 'pending':
                    switch (info) {
                        case 'status':
                            liveStatus = 'Pending';
                            return liveStatus;
                        case 'rating':
                            liveRating = undefined;
                            return liveRating;
                        case 'subject':
                            liveSubject = "".concat($('#ticket-subject').val());
                            return liveSubject;
                        case 'description':
                            liveDescription = "".concat($('#ticket-description').val());
                            return liveDescription;
                        case 'sender':
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            return liveSenderName;
                        case 'sender-department':
                            var indexData_1 = document.querySelector('#index-data');
                            var employeesContainer_1 = indexData_1.querySelector('#employees-data');
                            var employeesTotal_1 = employeesContainer_1.children.length;
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            for (var i = 0; i < employeesTotal_1; i++) {
                                if ("".concat(get(i, 'first-name'), " ").concat(get(i, 'last-name')) === liveSenderName) {
                                    liveSenderDepartment = get(i, 'department');
                                    return liveSenderDepartment;
                                }
                            }
                        case 'receiver':
                            var colleagueSelect = document.querySelector('#index-overlay #colleague-form select');
                            switch ('undefined') {
                                case colleagueSelect.value:
                                    liveReceiverName = undefined;
                                    break;
                                default:
                                    liveReceiverName = UseCapify_1.UseCapify.forString('-', colleagueSelect.value);
                            }
                            return;
                        case 'receiver-department':
                            var departmentSelect = document.querySelector('#index-overlay #department-form select');
                            liveReceiverDepartment = UseCapify_1.UseCapify.forString('-', departmentSelect.value);
                            return liveReceiverDepartment;
                        case 'date-short':
                            liveDateShort = UseDatefy_1.UseDatefy.forToday('2000-01-01');
                            return liveDateShort;
                        case 'date-pending':
                            var pendingDate = document.querySelector('#index-overlay #pending-date');
                            liveDatePending = pendingDate.innerText;
                            return liveDatePending;
                        case 'date-assigned':
                            liveDateAssigned = undefined;
                            return liveDateAssigned;
                        case 'date-resolved':
                            liveDateResolved = undefined;
                            return liveDateResolved;
                        case 'resolved-note':
                            liveNoteResolved = undefined;
                            return liveNoteResolved;
                        case 'date-deleted':
                            liveDateDeleted = undefined;
                            return liveDateDeleted;
                        case 'deleted-note':
                            liveNoteDeleted = undefined;
                            return liveNoteDeleted;
                    }
                case 'assigned':
                    switch (info) {
                        case 'status':
                            liveStatus = 'Assigned';
                            return liveStatus;
                        case 'rating':
                            liveRating = undefined;
                            return liveRating;
                        case 'subject':
                            liveSubject = "".concat($('#ticket-subject').val());
                            return liveSubject;
                        case 'description':
                            liveDescription = "".concat($('#ticket-description').val());
                            return liveDescription;
                        case 'sender':
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            return liveSenderName;
                        case 'sender-department':
                            liveSenderName = "".concat(UseCapify_1.UseCapify.forString('-', "".concat($('#user-form select').val())));
                            for (var i = 0; i < employeesTotal; i++) {
                                if ("".concat(get(i, 'first-name'), " ").concat(get(i, 'last-name')) === liveSenderName) {
                                    liveSenderDepartment = get(i, 'department');
                                    return liveSenderDepartment;
                                }
                            }
                        case 'receiver':
                            var colleagueSelect = document.querySelector('#index-overlay #ticket-container footer #colleague-form select');
                            switch (colleagueSelect) {
                                case null:
                                    liveReceiverName = undefined;
                                default:
                                    liveReceiverName = UseCapify_1.UseCapify.forString('-', colleagueSelect.value);
                            }
                            return liveReceiverName;
                        case 'receiver-department':
                            var departmentSelect = document.querySelector('#index-overlay #department-form select');
                            liveReceiverDepartment = UseCapify_1.UseCapify.forString('-', departmentSelect.value);
                            return liveReceiverDepartment;
                        case 'date-short':
                            liveDateShort = UseDatefy_1.UseDatefy.forToday('2000-01-01');
                            return liveDateShort;
                        case 'date-pending':
                            var pendingDate = document.querySelector('#index-overlay #pending-date');
                            liveDatePending = pendingDate.innerText;
                            return liveDatePending;
                        case 'date-assigned':
                            var assignedDate = document.querySelector('#index-overlay #assigned-date');
                            liveDateAssigned = assignedDate.innerText;
                            return liveDateAssigned;
                        case 'date-resolved':
                            liveDateResolved = undefined;
                            return liveDateResolved;
                        case 'resolved-note':
                            liveNoteResolved = undefined;
                            return liveNoteResolved;
                        case 'date-deleted':
                            liveDateDeleted = undefined;
                            return liveDateDeleted;
                        case 'deleted-note':
                            liveNoteDeleted = undefined;
                            return liveNoteDeleted;
                    }
                case 'resolved':
                    break;
                case 'deleted':
                    break;
            }
        }
        function findUser() {
            var indexBody = document.querySelector('#index-body');
            var userSelect = indexBody.querySelector('#user-form select');
            var userIndex = userSelect.selectedIndex;
            var userName = userSelect.children[userIndex].textContent;
            return "".concat(userName);
        }
        function get(index, data) {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            var firstName = employeesCollection[index].children[0].textContent;
            var middleName = employeesCollection[index].children[1].textContent;
            var lastName = employeesCollection[index].children[2].textContent;
            var department = employeesCollection[index].children[3].textContent;
            var occupation = employeesCollection[index].children[4].textContent;
            var role = employeesCollection[index].children[5].textContent;
            switch (data) {
                case 'first-name':
                    return firstName;
                case 'middle-name':
                    return middleName;
                case 'last-name':
                    return lastName;
                case 'department':
                    return department;
                case 'occupation':
                    return occupation;
                case 'role':
                    return role;
            }
        }
        function userDepartment() {
            var employeesData = document.querySelector('#employees-data');
            var employeesCollection = employeesData.getElementsByTagName('article');
            var employeesTotal = employeesData.getElementsByTagName('article').length;
            var userSelect = document.querySelector('#user-form select');
            var userName = userSelect.selectedOptions[0].textContent;
            for (var i = 0; i < employeesTotal; i++) {
                var firstName = employeesCollection[i].children[0].textContent;
                var middleName = employeesCollection[i].children[1].textContent;
                var lastName = employeesCollection[i].children[2].textContent;
                var department = employeesCollection[i].children[3].textContent;
                var occupation = employeesCollection[i].children[4].textContent;
                var role = employeesCollection[i].children[5].textContent;
                var employeeName = "".concat(firstName, " ").concat(lastName);
                if (employeeName === userName) {
                    return department;
                }
            }
        }
    })(DataUpdate = exports.DataUpdate || (exports.DataUpdate = {}));
});

//# sourceMappingURL=dist/code/tools/DataUpdate.js.map
