define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManageMain = void 0;
    var ManageMain;
    (function (ManageMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var loggedButton = document.querySelector('#logged-tickets button');
                var manageButton = document.querySelector('#manage-tickets button');
                var openEmployees = document.querySelector('#open-employees');
                var pendingTab = document.querySelector('#pending-tab');
                var assignedTab = document.querySelector('#assigned-tab');
                var deletedTab = document.querySelector('#deleted-tab');
                var userSelect = document.querySelector('#user-form select');
                var userName = userSelect.selectedOptions[0].textContent;
                var ticketsMain = document.querySelector('#tickets-container');
                var ticketsData = document.querySelector('#tickets-data');
                $(openEmployees).on('mouseenter', function () {
                    var openSidebar = openEmployees.children[0];
                    $(openSidebar).on('click', function () {
                        loggedButton.className = '';
                        manageButton.className = '';
                        new GetEvent_1.GetEvent.forPage('user-main', GetPath_1.GetPath.forHTML('main'));
                    });
                });
                $(pendingTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('manage-main', 'pending');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('manage-main', 'deleted');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                new DataRead_1.DataRead.forMain('manage-main', 'pending');
            }
            return initiateEvents;
        }());
        ManageMain.initiateEvents = initiateEvents;
    })(ManageMain = exports.ManageMain || (exports.ManageMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/ManageMain.js.map
