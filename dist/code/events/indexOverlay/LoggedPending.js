define(["require", "exports", "code/tools/DataRead", "code/tools/GetColor", "code/tools/UseDatefy"], function (require, exports, DataRead_1, GetColor_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedPending = void 0;
    var LoggedPending;
    (function (LoggedPending) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('logged-pending');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logAticket = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var activeTicket = ticketsMain.querySelector('.active-ticket');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var deleteButton = indexOverlay.querySelector('#delete-ticket button');
                var moveButton = indexOverlay.querySelector('#move-ticket button');
                var saveButton = indexOverlay.querySelector('#save-ticket button');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var deletedMark = indexOverlay.querySelector('.deleted-mark');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                var assignedDate = indexOverlay.querySelector('#assigned-date');
                var deletedDate = indexOverlay.querySelector('#deleted-date');
                var indexData = document.querySelector('#index-data');
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    container.innerHTML = '';
                    container.className = '';
                    container.className = "default-".concat(block.split('-')[1]);
                    container.style.display = 'none';
                    var status = activeTicket.classList[0];
                    activeTicket.className = "".concat(status);
                    indexMain.style.display = 'grid';
                }
                function resetDefault() {
                    var activeTicket = ticketsMain.querySelector('.active-ticket');
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
                    if (colleagueSelect.value === 'select-colleague') {
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedDate.textContent = undefined;
                        assignButton.parentElement.style.display = 'none';
                        deleteButton.parentElement.style.display = 'flex';
                        moveButton.parentElement.style.display = 'none';
                        saveButton.parentElement.style.display = 'none';
                    }
                    else if (colleagueSelect.value !== 'select-colleague') {
                        assignedDate.textContent = "".concat(UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY'));
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                        assignButton.parentElement.style.display = 'grid';
                        assignedDate.className = '';
                        assignButton.className = '';
                        deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        deleteButton.parentElement.style.display = 'none';
                        moveButton.parentElement.style.display = 'none';
                        saveButton.parentElement.style.display = 'none';
                    }
                }
                $(departmentSelect).on('change', function () {
                    resetDefault();
                });
                $(colleagueSelect).on('click', function () {
                    resetDefault();
                });
                $(assignButton)
                    .on('mouseenter', function () {
                    assignButton.style.color = "".concat(GetColor_1.GetColor.primaryLight());
                    assignedDate.style.display = 'grid';
                })
                    .on('mouseleave', function () {
                    assignButton.style.color = '';
                    assignedDate.style.display = 'none';
                });
                $(deleteButton)
                    .on('mouseenter', function () {
                    deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deleteButton.style.color = "".concat(GetColor_1.GetColor.deletedDefault());
                    deletedDate.textContent = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                    deletedDate.style.display = 'grid';
                    deletedDate.className = '';
                })
                    .on('mouseleave', function () {
                    pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deletedMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                    deleteButton.style.color = '';
                    deletedDate.style.display = 'none';
                    deletedDate.textContent = 'undefined';
                    deletedDate.className = 'disabled-text';
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                console.log('--LoggedPending.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedPending.initiateEvents = initiateEvents;
    })(LoggedPending = exports.LoggedPending || (exports.LoggedPending = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LoggedPending.js.map
