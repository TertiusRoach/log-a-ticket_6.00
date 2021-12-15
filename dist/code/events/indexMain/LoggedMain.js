define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedMain = void 0;
    var LoggedMain;
    (function (LoggedMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log('--LoggedMain.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedMain.initiateEvents = initiateEvents;
    })(LoggedMain = exports.LoggedMain || (exports.LoggedMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/LoggedMain.js.map
