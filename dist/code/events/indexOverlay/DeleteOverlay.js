define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeleteOverlay = void 0;
    var DeleteOverlay;
    (function (DeleteOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log('--DeleteOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        DeleteOverlay.initiateEvents = initiateEvents;
        function closeContainer(block) {
            var indexMain = document.querySelector('#index-main');
            var ticketsMain = indexMain.querySelector('#tickets-container');
            var activeTicket = ticketsMain.querySelector('.active-ticket');
            var container = document.querySelector("#".concat(block));
            container.innerHTML = '';
            container.className = '';
            container.style.display = 'none';
            container.className = "default-".concat(block.split('-')[1]);
            activeTicket.className = activeTicket.classList[0];
            indexMain.style.display = 'grid';
        }
    })(DeleteOverlay = exports.DeleteOverlay || (exports.DeleteOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DeleteOverlay.js.map
