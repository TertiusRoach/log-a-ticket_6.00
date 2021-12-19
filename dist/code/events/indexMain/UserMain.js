define(["require", "exports", "code/tools/DataRead", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, DataRead_1, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserMain = void 0;
    var UserMain;
    (function (UserMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('user-main', 'assigned');
                var openEmployees = document.querySelector('#open-employees');
                var assignedTab = document.querySelector('#assigned-tab');
                var resolvedTab = document.querySelector('#resolved-tab');
                var deletedTab = document.querySelector('#deleted-tab');
                $(openEmployees).on('mouseenter', function () {
                    var openSidebar = openEmployees.children[0];
                    $(openSidebar).on('click', function () {
                        new GetEvent_1.GetEvent.forPage('employees-sidebar', GetPath_1.GetPath.forHTML('sidebar'));
                    });
                });
                $(assignedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('user-main', 'assigned');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(resolvedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('user-main', 'resolved');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('user-main', 'deleted');
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
