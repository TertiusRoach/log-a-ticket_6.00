define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedMain = void 0;
    var LoggedMain;
    (function (LoggedMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('logged-main', 'pending');
                var loggedButton = document.querySelector('#logged-tickets button');
                var manageButton = document.querySelector('#manage-tickets button');
                var openCoworkers = document.querySelector('#open-coworkers');
                var pendingTab = document.querySelector('#pending-tab');
                var assignedTab = document.querySelector('#assigned-tab');
                var deletedTab = document.querySelector('#deleted-tab');
                $(openCoworkers).on('mouseenter', function () {
                    var openSidebar = openCoworkers.children[0];
                    $(openSidebar).on('click', function () {
                        loggedButton.className = '';
                        manageButton.className = '';
                        new GetEvent_1.GetEvent.forPage('coworker-main', GetPath_1.GetPath.forHTML('main'));
                    });
                });
                $(pendingTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('logged-main', 'pending');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(assignedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('logged-main', 'assigned');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('logged-main', 'deleted');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                console.log('--LoggedMain.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedMain.initiateEvents = initiateEvents;
    })(LoggedMain = exports.LoggedMain || (exports.LoggedMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/LoggedMain.js.map
