define(["require", "exports", "code/tools/DataRead"], function (require, exports, DataRead_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoworkerMain = void 0;
    var CoworkerMain;
    (function (CoworkerMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forMain('coworker-main', 'resolved');
                var resolvedTab = document.querySelector('#resolved-tab');
                var deletedTab = document.querySelector('#deleted-tab');
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
                console.log('--CoworkerMain.js Loaded');
            }
            return initiateEvents;
        }());
        CoworkerMain.initiateEvents = initiateEvents;
    })(CoworkerMain = exports.CoworkerMain || (exports.CoworkerMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/CoworkerMain.js.map
