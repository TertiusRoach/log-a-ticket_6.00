define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedResolved = void 0;
    var LoggedResolved;
    (function (LoggedResolved) {
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log('--LoggedResolved.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedResolved.initiateEvents = initiateEvents;
    })(LoggedResolved = exports.LoggedResolved || (exports.LoggedResolved = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LoggedResolved.js.map
