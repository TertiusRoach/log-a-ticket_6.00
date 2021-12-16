define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Start = void 0;
    var Start;
    (function (Start) {
        new GetEvent_1.GetEvent.forPage('default-body', GetPath_1.GetPath.forHTML('body'));
        new GetEvent_1.GetEvent.forPage('default-header', GetPath_1.GetPath.forHTML('header'));
        new GetEvent_1.GetEvent.forPage('default-overlay', GetPath_1.GetPath.forHTML('overlay'));
    })(Start = exports.Start || (exports.Start = {}));
});

//# sourceMappingURL=dist/main.js.map
