define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultBody = void 0;
    var DefaultBody;
    (function (DefaultBody) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new GetEvent_1.GetEvent.forPage('default-data', GetPath_1.GetPath.forHTML('data'));
            }
            return initiateEvents;
        }());
        DefaultBody.initiateEvents = initiateEvents;
    })(DefaultBody = exports.DefaultBody || (exports.DefaultBody = {}));
});

//# sourceMappingURL=dist/code/events/indexBody/defaultBody.js.map
