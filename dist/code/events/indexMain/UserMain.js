define(["require", "exports", "code/tools/DataRead"], function (require, exports, DataRead_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserMain = void 0;
    var UserMain;
    (function (UserMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('user-main', 'assigned');
                var assignedTab = document.querySelector('#assigned-tab');
                var resolvedTab = document.querySelector('#resolved-tab');
                var deletedTab = document.querySelector('#deleted-tab');
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
                console.log('--UserMain.js Loaded');
            }
            return initiateEvents;
        }());
        UserMain.initiateEvents = initiateEvents;
    })(UserMain = exports.UserMain || (exports.UserMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/UserMain.js.map
