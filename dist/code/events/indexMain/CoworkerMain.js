define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoworkerMain = void 0;
    var CoworkerMain;
    (function (CoworkerMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('coworker-main', 'resolved');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var openCoworkers = indexMain.querySelector('#open-coworkers');
                var resolvedTab = indexMain.querySelector('#resolved-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                $(ticketsMain).on('click', function () {
                    var activeTicket = document.querySelector('.active-ticket');
                    var activeStatus = activeTicket.classList[0];
                    new GetEvent_1.GetEvent.forPage("coworker-".concat(activeStatus), GetPath_1.GetPath.forHTML('overlay'));
                    indexOverlay.style.display = 'grid';
                });
                $(openCoworkers).on('click', function () {
                    indexSidebar.style.display = 'grid';
                });
                $(resolvedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('coworker-main', 'resolved');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('coworker-main', 'deleted');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
            }
            return initiateEvents;
        }());
        CoworkerMain.initiateEvents = initiateEvents;
    })(CoworkerMain = exports.CoworkerMain || (exports.CoworkerMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/CoworkerMain.js.map
