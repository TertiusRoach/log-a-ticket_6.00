define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedMain = void 0;
    var LoggedMain;
    (function (LoggedMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('logged-main', 'pending');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var loggedButton = indexHeader.querySelector('#logged-tickets button');
                var manageButton = indexHeader.querySelector('#manage-tickets button');
                var indexMain = document.querySelector('#index-main');
                var openCoworkers = indexMain.querySelector('#open-coworkers');
                var pendingTab = indexMain.querySelector('#pending-tab');
                var assignedTab = indexMain.querySelector('#assigned-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                $(ticketsMain).on('click', function () {
                    var activeTicket = document.querySelector('.active-ticket');
                    var activeStatus = activeTicket.classList[0];
                    new GetEvent_1.GetEvent.forPage("logged-".concat(activeStatus), GetPath_1.GetPath.forHTML('overlay'));
                    indexOverlay.style.display = 'grid';
                });
                $(openCoworkers).on('click', function () {
                    loggedButton.className = '';
                    manageButton.className = '';
                    new GetEvent_1.GetEvent.forPage('coworker-main', GetPath_1.GetPath.forHTML('main'));
                });
                $(pendingTab)
                    .on('click', function () {
                    ticketsMain.className = 'pending-tickets';
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(assignedTab)
                    .on('click', function () {
                    ticketsMain.className = 'assigned-tickets';
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
        LoggedMain.initiateEvents = initiateEvents;
    })(LoggedMain = exports.LoggedMain || (exports.LoggedMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/LoggedMain.js.map
