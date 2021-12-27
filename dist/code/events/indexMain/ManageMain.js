define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManageMain = void 0;
    var ManageMain;
    (function (ManageMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('manage-main', 'pending');
                var indexBody = document.querySelector('#index-body');
                var userSelect = indexBody.querySelector('#user-form select');
                var userName = userSelect.selectedOptions[0].textContent;
                var indexHeader = document.querySelector('#index-header');
                var loggedButton = indexHeader.querySelector('#logged-tickets button');
                var manageButton = indexHeader.querySelector('#manage-tickets button');
                var indexMain = document.querySelector('#index-main');
                var openUser = indexMain.querySelector('#open-employees');
                var pendingTab = indexMain.querySelector('#pending-tab');
                var assignedTab = indexMain.querySelector('#assigned-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                var ticketsData = indexData.querySelector('#tickets-data');
                $(ticketsMain).on('click', function () {
                    var activeTicket = document.querySelector('.active-ticket');
                    var activeStatus = activeTicket.classList[0];
                    new GetEvent_1.GetEvent.forPage("manage-".concat(activeStatus), GetPath_1.GetPath.forHTML('overlay'));
                    indexOverlay.style.display = 'grid';
                });
                $(openUser).on('click', function () {
                    loggedButton.className = '';
                    manageButton.className = '';
                    new GetEvent_1.GetEvent.forPage('user-main', GetPath_1.GetPath.forHTML('main'));
                });
                $(pendingTab)
                    .on('click', function () {
                    ticketsMain.className = 'pending-tickets';
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    ticketsMain.className = 'deleted-tickets';
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
            }
            return initiateEvents;
        }());
        ManageMain.initiateEvents = initiateEvents;
    })(ManageMain = exports.ManageMain || (exports.ManageMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/ManageMain.js.map
