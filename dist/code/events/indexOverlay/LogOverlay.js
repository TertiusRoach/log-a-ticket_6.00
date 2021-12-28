define(["require", "exports", "code/tools/UseDatefy"], function (require, exports, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogOverlay = void 0;
    var LogOverlay;
    (function (LogOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log("Subject: ".concat($('#ticket-subject').val()));
                console.log("Description: ".concat($('#ticket-description').val()));
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var logAticket = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var logButton = indexOverlay.querySelector('#log-ticket button');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                pendingDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                var indexData = document.querySelector('#index-data');
                function checkState(button) {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    switch (button) {
                        case 'log-ticket':
                            if (subjectJQ === '' || descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                            }
                            else if (subjectJQ !== '' && descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                            }
                            else if (subjectJQ === '' && descriptionJQ !== '') {
                                logButton.className = 'disabled-button';
                            }
                            else {
                                logButton.className = '';
                            }
                            break;
                    }
                }
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    document.querySelector("#".concat(block)).innerHTML = '';
                    document.querySelector("#".concat(block)).className = '';
                    document.querySelector("#".concat(block)).className = "default-".concat(block.split('-')[1]);
                    container.style.display = 'none';
                }
                $(ticketSubject).on('keyup', function () {
                    checkState('log-ticket');
                });
                $(ticketDescription).on('keyup', function () {
                    checkState('log-ticket');
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                    indexMain.style.display = 'grid';
                });
                console.log('--LogOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        LogOverlay.initiateEvents = initiateEvents;
    })(LogOverlay = exports.LogOverlay || (exports.LogOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LogOverlay.js.map
