define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath", "code/tools/UseCapify", "code/tools/UseValufy"], function (require, exports, GetEvent_1, GetPath_1, UseCapify_1, UseValufy_1) {
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
                                var firstName = get(i, 'first-name');
                                var middleName = get(i, 'middle-name');
                                var lastName = get(i, 'last-name');
                                var department = get(i, 'department');
                                var occupation = get(i, 'occupation');
                                var role = get(i, 'role');
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
                        var buildDropdown = function (userDepartment) {
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
                        buildDropdown(findDepartment(findUser()));
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
                                var firstName = get(i, 'first-name');
                                var middleName = get(i, 'middle-name');
                                var lastName = get(i, 'last-name');
                                var department = get(i, 'department');
                                var occupation = get(i, 'occupation');
                                var role = get(i, 'role');
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
    })(DataRead = exports.DataRead || (exports.DataRead = {}));
});

//# sourceMappingURL=dist/code/tools/DataRead.js.map
