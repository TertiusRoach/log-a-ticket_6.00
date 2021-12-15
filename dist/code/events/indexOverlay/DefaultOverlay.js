define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultOverlay = void 0;
    var DefaultOverlay;
    (function (DefaultOverlay) {
        function tag(element) {
            switch (element) {
                case 'default-overlay':
                    return document.querySelector('.default-overlay');
                case 'manager-button':
                    return document.querySelector('#manager-tickets button');
                case 'employee-button':
                    return document.querySelector('#employee-tickets button');
            }
        }
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log(tag('default-overlay'));
                console.log('--DefaultOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        DefaultOverlay.initiateEvents = initiateEvents;
    })(DefaultOverlay = exports.DefaultOverlay || (exports.DefaultOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DefaultOverlay.js.map
