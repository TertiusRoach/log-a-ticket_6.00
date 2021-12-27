define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserMain = void 0;
    var UserMain;
    (function (UserMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('user-main', 'assigned');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var openEmployees = indexMain.querySelector('#open-employees');
                var assignedTab = indexMain.querySelector('#assigned-tab');
                var resolvedTab = indexMain.querySelector('#resolved-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                $(ticketsMain).on('click', function () {
                    var activeTicket = document.querySelector('.active-ticket');
                    var activeStatus = activeTicket.classList[0];
                    new GetEvent_1.GetEvent.forPage("user-".concat(activeStatus), GetPath_1.GetPath.forHTML('overlay'));
                    indexOverlay.style.display = 'grid';
                });
                $(openEmployees).on('click', function () {
                    indexSidebar.style.display = 'grid';
                });
                $(assignedTab)
                    .on('click', function () {
                    ticketsMain.className = 'assigned-tickets';
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(resolvedTab)
                    .on('click', function () {
                    ticketsMain.className = 'resolved-tickets';
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
        UserMain.initiateEvents = initiateEvents;
    })(UserMain = exports.UserMain || (exports.UserMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/UserMain.js.map
