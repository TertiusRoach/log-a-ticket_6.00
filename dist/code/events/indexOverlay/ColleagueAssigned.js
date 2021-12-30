define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColleagueAssigned = void 0;
    var ColleagueAssigned;
    (function (ColleagueAssigned) {
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
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    container.innerHTML = '';
                    container.className = '';
                    container.className = "default-".concat(block.split('-')[1]);
                    container.style.display = 'none';
                    var status = activeTicket.classList[0];
                    activeTicket.className = "".concat(status);
                    indexMain.style.display = 'grid';
                }
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                });
                console.log('--ColleagueAssigned.js Loaded');
            }
            return initiateEvents;
        }());
        ColleagueAssigned.initiateEvents = initiateEvents;
    })(ColleagueAssigned = exports.ColleagueAssigned || (exports.ColleagueAssigned = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/ColleagueAssigned.js.map
