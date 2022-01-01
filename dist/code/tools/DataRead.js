define(["require", "exports", "code/tools/GetColor", "code/tools/GetEvent", "code/tools/GetPath", "code/tools/UseCapify", "code/tools/UseValufy"], function (require, exports, GetColor_1, GetEvent_1, GetPath_1, UseCapify_1, UseValufy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataRead = void 0;
    var DataRead;
    (function (DataRead) {
        var forMain = (function () {
            function forMain(page, status) {
                var indexBody = document.querySelector('#index-body');
                var userSelect = indexBody.querySelector('#user-form select');
                var userName = userSelect.selectedOptions[0].textContent;
                var userDepartment = findDepartment(userName);
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var loggedHeader = indexMain.querySelector('#logged-header h1');
                var manageHeader = indexMain.querySelector('#manage-header h1');
                var coworkerHeader = indexMain.querySelector('#coworker-header h1');
                var colleagueHeader = indexMain.querySelector('#colleague-name');
                var userHeader = indexMain.querySelector('#user-name');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                var employeesData = indexData.querySelector('#employees-data');
                var employeesCollection = employeesData.getElementsByTagName('article');
                var employeesTotal = employeesCollection.length;
                var ticketsData = indexData.querySelector('#tickets-data');
                var ticketsCollection = ticketsData.getElementsByTagName('article');
                var ticketsTotal = ticketsCollection.length;
                function clearTickets(container, status) {
                    container.innerHTML = '';
                    container.className = '';
                    container.className = "".concat(status, "-tickets");
                }
                clearTickets(ticketsMain, status);
                switch (page) {
                    case 'colleague-main':
                        var selectedColleague = indexSidebar.querySelector('.active-colleague .text').textContent;
                        colleagueHeader.textContent = "".concat(selectedColleague);
                        var activeColleague = indexMain.querySelector('#colleague-name').textContent;
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
                            if (receiverName === activeColleague) {
                                $(ticketsMain).append("<article class=\"".concat(ticketStatus, "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"sender\">").concat(senderName, "</p>\n                  \n                  <div style=\"display: none\">\n                    <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                    <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                    <p class=\"subject-text\">").concat(subjectText, "</p>\n                    <p class=\"description-text\">").concat(descriptionText, "</p>\n                    <p class=\"sender-name\">").concat(senderName, "</p>\n                    <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                    <p class=\"receiver-name\">").concat(receiverName, "</p>\n                    <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                    <p class=\"date-short\">").concat(dateShort, "</p>\n                    <p class=\"date-pending\">").concat(datePending, "</p>\n                    <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                    <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                    <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                    <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                    <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                  </div>\n                </article>"));
                            }
                        }
                        break;
                    case 'coworker-main':
                        var activeCoworker = indexSidebar.querySelector('.active-colleague .text');
                        indexMain.querySelector('#coworker-header').innerHTML = "<span class=\"notification\">\n                                <h2 style=\"background: #08870c\">".concat(0, "</h2>\n                              </span>\n                              <h1 class=\"text ").concat(UseValufy_1.UseValufy.forString(activeCoworker.innerText), "\">").concat(activeCoworker.innerText, "</h1>");
                        var selectedCoworker = document.querySelector('#coworker-header').lastChild.textContent;
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
                            if (senderName === selectedCoworker) {
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
                            if (senderName === userName) {
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
                var indexBody = document.querySelector('#index-body');
                var userSelect = indexBody.querySelector('#user-form select');
                var userTotal = userSelect.getElementsByTagName('option').length;
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                var departmentsData;
                var employeesData;
                var ticketsData;
                var userDepartment;
                var userName;
                switch (page) {
                    case 'coworkers-sidebar':
                        userName = findUser();
                        userDepartment = findDepartment(userName);
                        var coworkerHeader = indexSidebar.querySelector('#view-coworkers header');
                        var coworkerFooter_1 = indexSidebar.querySelector('#view-coworkers footer');
                        var coworkerButtons = void 0;
                        var departmentSelect_1 = indexSidebar.querySelector('#department-form select');
                        departmentsData = indexData.querySelector('#departments-data');
                        employeesData = indexData.querySelector('#employees-data');
                        ticketsData = indexData.querySelector('#tickets-data');
                        var appendCoworker_1 = function (coworkerFooter, nameClass, firstName, lastName) {
                            $(coworkerFooter).append("<span class=\"".concat(nameClass, "\"\n                                            onClick=\"$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');\">\n                                        <h1 class=\"notification\">0</h1>\n                                        <h1 class=\"text\">").concat(firstName, " ").concat(lastName, "</h1>\n                                      </span>"));
                        };
                        var buildCoworkers_1 = function (selectedDepartment, recall) {
                            coworkerFooter_1.innerHTML = '';
                            var employeesTotal = employeesData.children.length;
                            for (var i = 0; i < employeesTotal; i++) {
                                var firstName = getData(i, 'first-name');
                                var middleName = getData(i, 'middle-name');
                                var lastName = getData(i, 'last-name');
                                var department = getData(i, 'department');
                                var occupation = getData(i, 'occupation');
                                var role = getData(i, 'role');
                                if (UseValufy_1.UseValufy.forString(department) === "".concat(selectedDepartment)) {
                                    var classValue = "".concat(firstName.toLowerCase(), "-").concat(lastName.toLowerCase());
                                    var mainHeader = indexMain.getElementsByTagName('header');
                                    var activeName;
                                    if (typeof mainHeader[0] !== "".concat(undefined)) {
                                        activeName = mainHeader[0].lastChild.textContent;
                                    }
                                    var indexName = "".concat(firstName, " ").concat(lastName);
                                    var userName = findUser();
                                    switch (recall) {
                                        case true:
                                            if (activeName === indexName) {
                                                $(coworkerFooter_1).append("<span class=\"".concat(classValue, " active-colleague\"\n                                                      onClick=\"$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');\">\n                                                  <h1 class=\"notification\">0</h1>\n                                                  <h1 class=\"text\">").concat(firstName, " ").concat(lastName, "</h1>\n                                                </span>"));
                                            }
                                            else {
                                                appendCoworker_1(coworkerFooter_1, classValue, firstName, lastName);
                                            }
                                            break;
                                        case false:
                                            if (userName === indexName) {
                                                $(coworkerFooter_1).append("<span class=\"".concat(classValue, " active-colleague\"\n                                                      onClick=\"$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');\">\n                                                  <h1 class=\"notification\">0</h1>\n                                                  <h1 class=\"text\">").concat(firstName, " ").concat(lastName, "</h1>\n                                                </span>"));
                                            }
                                            else {
                                                appendCoworker_1(coworkerFooter_1, classValue, firstName, lastName);
                                            }
                                            break;
                                    }
                                }
                            }
                        };
                        var buildDepartments_1 = function (userDepartment) {
                            departmentSelect_1.innerHTML = '';
                            var departmentsTotal = departmentsData.children.length;
                            for (var i = 0; i < departmentsTotal; i++) {
                                var department = "".concat(departmentsData.children[i].id);
                                var option = document.createElement('option');
                                option.value = UseValufy_1.UseValufy.forString(department);
                                option.textContent = UseCapify_1.UseCapify.forString(' ', department);
                                if (userDepartment === UseCapify_1.UseCapify.forString(' ', department)) {
                                    option.selected = true;
                                }
                                else {
                                    option.selected = false;
                                }
                                departmentSelect_1.append(option);
                            }
                            buildCoworkers_1(departmentSelect_1.selectedOptions[0].value, false);
                        };
                        buildDepartments_1(findDepartment(findUser()));
                        coworkerButtons = coworkerFooter_1.getElementsByTagName('span');
                        var recall_1 = function (coworkerButtons) {
                            $(coworkerButtons).on('click', function () {
                                indexSidebar.style.display = 'none';
                                new GetEvent_1.GetEvent.forPage('coworker-main', GetPath_1.GetPath.forHTML('main'));
                            });
                        };
                        $(departmentSelect_1).on('change', function () {
                            buildCoworkers_1(departmentSelect_1.selectedOptions[0].value, true);
                            var coworkerButtons = coworkerFooter_1.getElementsByTagName('span');
                            recall_1(coworkerButtons);
                        });
                        recall_1(coworkerButtons);
                        break;
                    case 'default-sidebar':
                        break;
                    case 'employees-sidebar':
                        indexSidebar.querySelector('#view-employees header span .text').textContent = "".concat(findUser());
                        indexSidebar.querySelector('#view-employees header span').className = 'active-colleague';
                        var buildEmployees = function () {
                            var employeesFooter = indexSidebar.querySelector('#view-employees footer');
                            userDepartment = findDepartment(findUser());
                            employeesFooter.innerHTML = '';
                            employeesData = indexData.querySelector('#employees-data');
                            var employeesTotal = employeesData.getElementsByTagName('article').length;
                            for (var i = 0; i < employeesTotal; i++) {
                                var firstName = getData(i, 'first-name');
                                var middleName = getData(i, 'middle-name');
                                var lastName = getData(i, 'last-name');
                                var department = getData(i, 'department');
                                var occupation = getData(i, 'occupation');
                                var role = getData(i, 'role');
                                var classValue = UseValufy_1.UseValufy.forString("".concat(firstName, " ").concat(lastName));
                                if (userDepartment === department) {
                                    if ("".concat(firstName, " ").concat(lastName) !== "".concat(findUser())) {
                                        $(employeesFooter).append("<span class=\"".concat(classValue, "\"\n                                                  onClick=\"$('.active-colleague').removeClass('active-colleague'); $(this).addClass('active-colleague');\">\n                                              <h1 class=\"notification\">0</h1>\n                                              <h1 class=\"text\">").concat(firstName, " ").concat(lastName, "</h1>\n                                            </span>"));
                                    }
                                }
                                var employeesButton = employeesFooter.querySelector('span');
                            }
                        };
                        buildEmployees();
                        break;
                }
            }
            return forSidebar;
        }());
        DataRead.forSidebar = forSidebar;
        var forOverlay = (function () {
            function forOverlay(page) {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var ticketsContainer = indexMain.querySelector('#tickets-container');
                var activeTicket = ticketsContainer.querySelector('.active-ticket');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var logButton = indexOverlay.querySelector('#log-ticket button');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var deleteButton = indexOverlay.querySelector('#delete-ticket button');
                var moveButton = indexOverlay.querySelector('#move-ticket button');
                var saveButton = indexOverlay.querySelector('#save-ticket button');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var resolvedMark = indexOverlay.querySelector('.resolved-mark');
                var deletedMark = indexOverlay.querySelector('.deleted-mark');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                var assignedDate = indexOverlay.querySelector('#assigned-date');
                var resolvedDate = indexOverlay.querySelector('#resolved-date');
                var deletedDate = indexOverlay.querySelector('#deleted-date');
                var indexData = document.querySelector('#index-data');
                var departmentsData;
                var departmentsTotal;
                var employeesData;
                var ticketsData;
                var userDepartment;
                var userName;
                switch (page) {
                    case 'log-overlay':
                        departmentsData = indexData.querySelector('#departments-data');
                        employeesData = indexData.querySelector('#employees-data');
                        ticketsData = indexData.querySelector('#tickets-data');
                        userDepartment = findDepartment(findUser());
                        $(departmentSelect)
                            .on('click', function () {
                            if (colleagueSelect.length === 1) {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                            }
                            else {
                                logButton.className = '';
                                assignButton.className = '';
                            }
                        })
                            .on('change', function () {
                            logButton.parentElement.style.display = 'grid';
                            assignButton.parentElement.style.display = 'none';
                            pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                            assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                            if (colleagueSelect.length === 1) {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                            }
                            else {
                                logButton.className = '';
                                assignButton.className = '';
                            }
                            buildColleagues(departmentSelect.selectedOptions[0].value, 'user');
                        });
                        buildDepartments(findDepartment(findUser()));
                        break;
                    case 'logged-pending':
                        departmentsData = indexData.querySelector('#departments-data');
                        departmentsTotal = departmentsData.children.length;
                        var ticketStatus = activeTicket.children[3].children[0].innerHTML;
                        var ticketRating = activeTicket.children[3].children[1].innerHTML;
                        var subjectText = activeTicket.children[3].children[2].innerHTML;
                        var descriptionText = activeTicket.children[3].children[3].innerHTML;
                        var senderName = activeTicket.children[3].children[4].innerHTML;
                        var senderDepartment = activeTicket.children[3].children[5].innerHTML;
                        var receiverName = activeTicket.children[3].children[6].innerHTML;
                        var receiverDepartment = activeTicket.children[3].children[7].innerHTML;
                        var dateShort = activeTicket.children[3].children[8].innerHTML;
                        var datePending = activeTicket.children[3].children[9].innerHTML;
                        var dateAssigned = activeTicket.children[3].children[10].innerHTML;
                        var dateResolved = activeTicket.children[3].children[11].innerHTML;
                        var noteResolved = activeTicket.children[3].children[12].innerHTML;
                        var dateDeleted = activeTicket.children[3].children[13].innerHTML;
                        var noteDeleted = activeTicket.children[3].children[14].innerHTML;
                        ticketSubject.value = "".concat(subjectText);
                        ticketDescription.innerHTML = "".concat(descriptionText);
                        pendingDate.innerHTML = "".concat(datePending);
                        $(departmentSelect).on('change', function () {
                            buildColleagues(departmentSelect.value, 'user');
                        });
                        buildDepartments(receiverDepartment);
                        break;
                    case 'manage-pending':
                        departmentsData = indexData.querySelector('#departments-data');
                        departmentsTotal = departmentsData.children.length;
                        var ticketStatus = activeTicket.children[3].children[0].innerHTML;
                        var ticketRating = activeTicket.children[3].children[1].innerHTML;
                        var subjectText = activeTicket.children[3].children[2].innerHTML;
                        var descriptionText = activeTicket.children[3].children[3].innerHTML;
                        var senderName = activeTicket.children[3].children[4].innerHTML;
                        var senderDepartment = activeTicket.children[3].children[5].innerHTML;
                        var receiverName = activeTicket.children[3].children[6].innerHTML;
                        var receiverDepartment = activeTicket.children[3].children[7].innerHTML;
                        var dateShort = activeTicket.children[3].children[8].innerHTML;
                        var datePending = activeTicket.children[3].children[9].innerHTML;
                        var dateAssigned = activeTicket.children[3].children[10].innerHTML;
                        var dateResolved = activeTicket.children[3].children[11].innerHTML;
                        var noteResolved = activeTicket.children[3].children[12].innerHTML;
                        var dateDeleted = activeTicket.children[3].children[13].innerHTML;
                        var noteDeleted = activeTicket.children[3].children[14].innerHTML;
                        ticketSubject.value = "".concat(subjectText);
                        ticketDescription.innerHTML = "".concat(descriptionText);
                        pendingDate.innerHTML = "".concat(datePending);
                        $(departmentSelect).on('change', function () {
                            buildColleagues(departmentSelect.value, 'none');
                        });
                        buildDepartments(findDepartment(findUser()));
                        break;
                }
            }
            return forOverlay;
        }());
        DataRead.forOverlay = forOverlay;
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
        function getData(index, data) {
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
        function getTicket(info) {
            var activeTicket = document.querySelector('#index-main #tickets-container .active-ticket');
            switch (info) {
                case 'ticket-status':
                    var ticketStatus = activeTicket.children[3].children[0].innerHTML;
                    return ticketStatus;
                case 'ticket-rating':
                    var ticketRating = activeTicket.children[3].children[1].innerHTML;
                    return ticketRating;
                case 'subject-text':
                    var subjectText = activeTicket.children[3].children[2].innerHTML;
                    return subjectText;
                case 'description-text':
                    var descriptionText = activeTicket.children[3].children[3].innerHTML;
                    return descriptionText;
                case 'sender-name':
                    var senderName = activeTicket.children[3].children[4].innerHTML;
                    return senderName;
                case 'sender-department':
                    var senderDepartment = activeTicket.children[3].children[5].innerHTML;
                    return senderDepartment;
                case 'receiver-name':
                    var receiverName = activeTicket.children[3].children[6].innerHTML;
                    return receiverName;
                case 'receiver-department':
                    var receiverDepartment = activeTicket.children[3].children[7].innerHTML;
                    return receiverDepartment;
                case 'date-short':
                    var dateShort = activeTicket.children[3].children[8].innerHTML;
                    return dateShort;
                case 'date-pending':
                    var datePending = activeTicket.children[3].children[9].innerHTML;
                    return datePending;
                case 'date-assigned':
                    var dateAssigned = activeTicket.children[3].children[10].innerHTML;
                    return dateAssigned;
                case 'date-resolved':
                    var dateResolved = activeTicket.children[3].children[11].innerHTML;
                    return dateResolved;
                case 'note-resolved':
                    var noteResolved = activeTicket.children[3].children[12].innerHTML;
                    return noteResolved;
                case 'date-deleted':
                    var dateDeleted = activeTicket.children[3].children[13].innerHTML;
                    return dateDeleted;
                case 'note-deleted':
                    var noteDeleted = activeTicket.children[3].children[14].innerHTML;
                    return noteDeleted;
            }
        }
        function buildColleagues(selectedDepartment, filter) {
            var indexMain = document.querySelector('#index-main');
            var indexOverlay = document.querySelector('#index-overlay');
            var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
            colleagueSelect.innerHTML = "<option value=\"select-colleague\" selected disabled>Select Colleague</option>";
            var employeesData = document.querySelector('#employees-data');
            var employeesTotal = employeesData.children.length;
            switch (filter) {
                case 'none':
                    for (var i = 0; i < employeesTotal; i++) {
                        var firstName = getData(i, 'first-name');
                        var middleName = getData(i, 'middle-name');
                        var lastName = getData(i, 'last-name');
                        var department = getData(i, 'department');
                        var occupation = getData(i, 'occupation');
                        var role = getData(i, 'role');
                        if (UseValufy_1.UseValufy.forString(department) === "".concat(selectedDepartment)) {
                            var classValue = "".concat(firstName.toLowerCase(), "-").concat(lastName.toLowerCase());
                            var mainHeader = indexMain.getElementsByTagName('header');
                            var activeName;
                            if (typeof mainHeader[0] !== "".concat(undefined)) {
                                activeName = mainHeader[0].lastChild.textContent;
                            }
                            var indexName = "".concat(firstName, " ").concat(lastName);
                            var userName = findUser();
                            if (userName === indexName) {
                                $(colleagueSelect).append("<option value=\"".concat(UseValufy_1.UseValufy.forString(indexName), "\" selected>").concat(firstName, " ").concat(lastName, "</option>"));
                            }
                            else {
                                $(colleagueSelect).append("<option value=\"".concat(UseValufy_1.UseValufy.forString(indexName), "\">").concat(firstName, " ").concat(lastName, "</option>"));
                            }
                        }
                    }
                    break;
                case 'user':
                    for (var i = 0; i < employeesTotal; i++) {
                        var firstName = getData(i, 'first-name');
                        var middleName = getData(i, 'middle-name');
                        var lastName = getData(i, 'last-name');
                        var department = getData(i, 'department');
                        var occupation = getData(i, 'occupation');
                        var role = getData(i, 'role');
                        if (UseValufy_1.UseValufy.forString(department) === "".concat(selectedDepartment)) {
                            var classValue = "".concat(firstName.toLowerCase(), "-").concat(lastName.toLowerCase());
                            var mainHeader = indexMain.getElementsByTagName('header');
                            var activeName;
                            if (typeof mainHeader[0] !== "".concat(undefined)) {
                                activeName = mainHeader[0].lastChild.textContent;
                            }
                            var indexName = "".concat(firstName, " ").concat(lastName);
                            var userName = findUser();
                            if (userName !== indexName) {
                                $(colleagueSelect).append("<option value=\"".concat(UseValufy_1.UseValufy.forString(indexName), "\">").concat(firstName, " ").concat(lastName, "</option>"));
                            }
                        }
                    }
                    break;
            }
        }
        function buildDepartments(userDepartment) {
            var indexMain = document.querySelector('#index-main');
            var indexOverlay = document.querySelector('#index-overlay');
            var departmentSelect = indexOverlay.querySelector('#department-form select');
            var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
            var indexData = document.querySelector('#index-data');
            var departmentsData = indexData.querySelector('#departments-data');
            departmentSelect.innerHTML = '';
            var departmentsTotal = departmentsData.children.length;
            for (var i = 0; i < departmentsTotal; i++) {
                var department = "".concat(departmentsData.children[i].id);
                var option = document.createElement('option');
                option.value = UseValufy_1.UseValufy.forString(department);
                option.textContent = UseCapify_1.UseCapify.forString(' ', department);
                if (userDepartment === UseCapify_1.UseCapify.forString(' ', department)) {
                    option.selected = true;
                }
                else {
                    option.selected = false;
                }
                departmentSelect.append(option);
            }
            if (indexOverlay.className === 'log-overlay' || indexOverlay.className === 'logged-pending') {
                buildColleagues(departmentSelect.selectedOptions[0].value, 'user');
            }
            else {
                buildColleagues(departmentSelect.selectedOptions[0].value, 'none');
            }
        }
        function userDepartment() {
            return "".concat(findDepartment(findUser()));
        }
    })(DataRead = exports.DataRead || (exports.DataRead = {}));
});

//# sourceMappingURL=dist/code/tools/DataRead.js.map
