define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedAssigned = void 0;
    var LoggedAssigned;
    (function (LoggedAssigned) {
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log('--LoggedAssigned.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedAssigned.initiateEvents = initiateEvents;
    })(LoggedAssigned = exports.LoggedAssigned || (exports.LoggedAssigned = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LoggedAssigned.js.map
