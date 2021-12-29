define(["require", "exports", "code/tools/UseCapify", "code/tools/UseDatefy"], function (require, exports, UseCapify_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataUpdate = void 0;
    var DataUpdate;
    (function (DataUpdate) {
        var forBlock = (function () {
            function forBlock(status) {
                var indexBody = document.querySelector('#index-body');
                var userSelect = indexBody.querySelector('#user-form select');
                var indexHeader = document.querySelector('#index-header');
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
                var ticketsContainer = indexData.querySelector('#tickets-data');
                var ticketsCollection = ticketsData.getElementsByTagName('article');
                var ticketsTotal = ticketsCollection.length;
                switch (status) {
                    case 'pending':
                        var logStatus = "".concat(returnTicket('status', "".concat(status)));
                        var logRating = "".concat(returnTicket('rating', "".concat(status)));
                        var logSubject = "".concat(returnTicket('subject', "".concat(status)));
                        var logDescription = "".concat(returnTicket('description', "".concat(status)));
                        var logSenderName = "".concat(returnTicket('sender', "".concat(status)));
                        var logSenderDepartment = "".concat(returnTicket('sender-department', "".concat(status)));
                        var logReceiverName = "".concat(returnTicket('receiver', "".concat(status)));
                        var logReceiverDepartment = "".concat(returnTicket('receiver-department', "".concat(status)));
                        var logDateShort = "".concat(returnTicket('date-short', "".concat(status)));
                        var logDatePending = "".concat(returnTicket('date-pending', "".concat(status)));
                        var logDateAssigned = "".concat(returnTicket('date-assigned', "".concat(status)));
                        var logDateResolved = "".concat(returnTicket('date-resolved', "".concat(status)));
                        var logNoteResolved = "".concat(returnTicket('resolved-note', "".concat(status)));
                        var logDateDeleted = "".concat(returnTicket('date-deleted', "".concat(status)));
                        var logNoteDeleted = "".concat(returnTicket('deleted-note', "".concat(status)));
                        for (var i = 0; i < ticketsTotal; i++) { }
                        console.log("Ticket: ".concat(UseCapify_1.UseCapify.forString(' ', status)));
                        break;
                    case 'assigned':
                        var logStatus = "".concat(returnTicket('status', "".concat(status)));
                        var logRating = "".concat(returnTicket('rating', "".concat(status)));
                        var logSubject = "".concat(returnTicket('subject', "".concat(status)));
                        var logDescription = "".concat(returnTicket('description', "".concat(status)));
                        var logSenderName = "".concat(returnTicket('sender', "".concat(status)));
                        var logSenderDepartment = "".concat(returnTicket('sender-department', "".concat(status)));
                        var logReceiverName = "".concat(returnTicket('receiver', "".concat(status)));
                        var logReceiverDepartment = "".concat(returnTicket('receiver-department', "".concat(status)));
                        var logDateShort = "".concat(returnTicket('date-short', "".concat(status)));
                        var logDatePending = "".concat(returnTicket('date-pending', "".concat(status)));
                        var logDateAssigned = "".concat(returnTicket('date-assigned', "".concat(status)));
                        var logDateResolved = "".concat(returnTicket('date-resolved', "".concat(status)));
                        var logNoteResolved = "".concat(returnTicket('resolved-note', "".concat(status)));
                        var logDateDeleted = "".concat(returnTicket('date-deleted', "".concat(status)));
                        var logNoteDeleted = "".concat(returnTicket('deleted-note', "".concat(status)));
                        console.log(logStatus);
                        console.log(logRating);
                        console.log(logSubject);
                        console.log(logDescription);
                        console.log(logSenderName);
                        console.log(logSenderDepartment);
                        console.log(logReceiverName);
                        console.log(logReceiverDepartment);
                        console.log(logDateShort);
                        console.log(logDatePending);
                        console.log(logDateAssigned);
                        console.log(logDateResolved);
                        console.log(logNoteResolved);
                        console.log(logDateDeleted);
                        console.log(logNoteDeleted);
                        console.log("Ticket: ".concat(UseCapify_1.UseCapify.forString(' ', status)));
                        break;
                    case 'resolved':
                        console.log("Ticket: ".concat(UseCapify_1.UseCapify.forString(' ', status)));
                        break;
                    case 'deleted':
                        console.log("Ticket: ".concat(UseCapify_1.UseCapify.forString(' ', status)));
                        break;
                }
                console.log('--DataUpdate.js Loaded');
            }
            return forBlock;
        }());
        DataUpdate.forBlock = forBlock;
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
        function returnTicket(info, status) {
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
                            liveReceiverDepartment = undefined;
                            return;
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
                            var colleagueSelect = document.querySelector('#index-overlay #colleague-form select');
                            liveReceiverName = UseCapify_1.UseCapify.forString('-', colleagueSelect.value);
                            return liveReceiverName;
                        case 'receiver-department':
                            var colleagueSelect = document.querySelector('#index-overlay #colleague-form select');
                            liveReceiverName = UseCapify_1.UseCapify.forString('-', colleagueSelect.value);
                            for (var i = 0; i < employeesTotal; i++) {
                                if ("".concat(get(i, 'first-name'), " ").concat(get(i, 'last-name')) === liveReceiverName) {
                                    liveReceiverDepartment = get(i, 'department');
                                    return liveReceiverDepartment;
                                }
                            }
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
                    break;
                case 'resolved':
                    break;
                case 'deleted':
                    break;
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
