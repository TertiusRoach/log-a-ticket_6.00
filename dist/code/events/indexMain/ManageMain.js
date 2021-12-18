define(["require", "exports", "code/tools/DataRead"], function (require, exports, DataRead_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManageMain = void 0;
    var ManageMain;
    (function (ManageMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var userSelect = document.querySelector('#user-form select');
                var userName = userSelect.selectedOptions[0].textContent;
                var ticketsMain = document.querySelector('#tickets-container');
                var ticketsData = document.querySelector('#tickets-data');
                var pendingTab = document.querySelector('#pending-tab');
                var assignedTab = document.querySelector('#assigned-tab');
                var deletedTab = document.querySelector('#deleted-tab');
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
                console.log('--ManageMain.js Loaded');
            }
            return initiateEvents;
        }());
        ManageMain.initiateEvents = initiateEvents;
    })(ManageMain = exports.ManageMain || (exports.ManageMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/ManageMain.js.map
