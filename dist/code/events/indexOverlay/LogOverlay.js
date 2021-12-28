define(["require", "exports", "code/tools/UseDatefy"], function (require, exports, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogOverlay = void 0;
    var LogOverlay;
    (function (LogOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logButton = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                console.log(ticketSubject);
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                pendingDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                var indexData = document.querySelector('#index-data');
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    document.querySelector("#".concat(block)).innerHTML = '';
                    document.querySelector("#".concat(block)).className = '';
                    document.querySelector("#".concat(block)).className = "default-".concat(block.split('-')[1]);
                    container.style.display = 'none';
                }
                function enableButton(state) {
                    switch (state) {
                        case 'log-ticket':
                            break;
                    }
                }
                $(closeOverlay).on('click', function () {
                    logButton.className = '';
                    closeContainer('index-overlay');
                    indexMain.style.display = 'grid';
                });
                $(ticketSubject).on('keyup', function () {
                    var pressed = "".concat($('#ticket-subject').val()).split('').pop();
                    console.log(pressed);
                });
                console.log('--LogOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        LogOverlay.initiateEvents = initiateEvents;
    })(LogOverlay = exports.LogOverlay || (exports.LogOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LogOverlay.js.map
