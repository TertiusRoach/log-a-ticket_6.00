define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserMain = void 0;
    var UserMain;
    (function (UserMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                $('#index-main').css('display', 'none');
                console.log('--UserMain.js Loaded');
            }
            return initiateEvents;
        }());
        UserMain.initiateEvents = initiateEvents;
    })(UserMain = exports.UserMain || (exports.UserMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/UserMain.js.map
