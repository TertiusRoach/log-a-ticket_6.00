define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedAssigned = void 0;
    var LoggedAssigned;
    (function (LoggedAssigned) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                var ticketsMain = indexMain.querySelector('#tickets-container');
                var activeTicket = ticketsMain.querySelector('.active-ticket');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var indexData = document.querySelector('#index-data');
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                console.log('--LoggedAssigned.js Loaded');
            }
            return initiateEvents;
        }());
        LoggedAssigned.initiateEvents = initiateEvents;
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
    })(LoggedAssigned = exports.LoggedAssigned || (exports.LoggedAssigned = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LoggedAssigned.js.map
