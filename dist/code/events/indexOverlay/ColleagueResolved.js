define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColleagueResolved = void 0;
    var ColleagueResolved;
    (function (ColleagueResolved) {
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
                console.log('--ColleagueResolved.js Loaded');
            }
            return initiateEvents;
        }());
        ColleagueResolved.initiateEvents = initiateEvents;
    })(ColleagueResolved = exports.ColleagueResolved || (exports.ColleagueResolved = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/ColleagueResolved.js.map
