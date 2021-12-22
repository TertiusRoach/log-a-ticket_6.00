define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColleagueMain = void 0;
    var ColleagueMain;
    (function (ColleagueMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                console.log('--ColleagueMain.js Loaded');
            }
            return initiateEvents;
        }());
        ColleagueMain.initiateEvents = initiateEvents;
    })(ColleagueMain = exports.ColleagueMain || (exports.ColleagueMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/ColleagueMain.js.map
