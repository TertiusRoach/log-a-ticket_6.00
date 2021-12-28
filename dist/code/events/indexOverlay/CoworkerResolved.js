define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoworkerResolved = void 0;
    var CoworkerResolved;
    (function (CoworkerResolved) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var indexData = document.querySelector('#index-data');
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    document.querySelector("#".concat(block)).innerHTML = '';
                    document.querySelector("#".concat(block)).className = '';
                    document.querySelector("#".concat(block)).className = "default-".concat(block.split('-')[1]);
                    container.style.display = 'none';
                }
                $(closeOverlay).on('click', function () {
                    logButton.className = '';
                    closeContainer('index-overlay');
                    indexMain.style.display = 'grid';
                });
                console.log('--CoworkerResolved.js Loaded');
            }
            return initiateEvents;
        }());
        CoworkerResolved.initiateEvents = initiateEvents;
    })(CoworkerResolved = exports.CoworkerResolved || (exports.CoworkerResolved = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/CoworkerResolved.js.map
