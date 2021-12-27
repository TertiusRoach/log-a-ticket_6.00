define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedResolved = void 0;
    var LoggedResolved;
    (function (LoggedResolved) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                var activeTicket = indexMain.querySelector('.active-ticket');
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var indexData = document.querySelector('#index-data');
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    var status = activeTicket.classList[0];
                    activeTicket.className = "".concat(status);
                    container.style.display = 'none';
                    container.innerHTML = '';
                    container.className = "default-".concat(block.split('-')[1]);
                }
                $(closeOverlay).on('click', function () {
                    logButton.className = '';
                    closeContainer('index-overlay');
                });
                console.log('--LoggedResolved.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedResolved.initiateEvents = initiateEvents;
    })(LoggedResolved = exports.LoggedResolved || (exports.LoggedResolved = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LoggedResolved.js.map
