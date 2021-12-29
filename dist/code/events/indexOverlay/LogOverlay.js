define(["require", "exports", "code/tools/DataRead", "code/tools/GetColor", "code/tools/UseDatefy"], function (require, exports, DataRead_1, GetColor_1, UseDatefy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogOverlay = void 0;
    var LogOverlay;
    (function (LogOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forOverlay('log-overlay');
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var activeButton = indexHeader.querySelector('.active-page');
                var logAticket = indexHeader.querySelector('#log-a-ticket button');
                var indexMain = document.querySelector('#index-main');
                indexMain.style.display = 'none';
                var indexSidebar = document.querySelector('#index-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var logButton = indexOverlay.querySelector('#log-ticket button');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var departmentForm = indexOverlay.querySelector('#department-form');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                var assignDate = indexOverlay.querySelector('#pending-date');
                pendingDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                assignDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                var indexData = document.querySelector('#index-data');
                function checkState(button) {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    switch (button) {
                        case 'log-ticket':
                            if (colleagueSelect.length === 1) {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                            }
                            else if (subjectJQ === '' || descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                            }
                            else if (subjectJQ !== '' && descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                            }
                            else if (subjectJQ === '' && descriptionJQ !== '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                            }
                            else {
                                logButton.className = '';
                                assignButton.className = '';
                            }
                            break;
                    }
                }
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    var page = block.split('-')[1];
                    document.querySelector("#".concat(block)).innerHTML = '';
                    container.style.display = 'none';
                    activeButton.className = '';
                    document.querySelector("#".concat(block)).className = "default-".concat(page);
                }
                function toggleButton(colleague) {
                    if (colleague !== 'select-colleague') {
                        logButton.parentElement.style.display = 'none';
                        assignButton.parentElement.style.display = 'grid';
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    }
                }
                $(departmentSelect)
                    .on('click', function () {
                    if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                })
                    .on('change', function () {
                    checkState('log-ticket');
                    toggleButton(colleagueSelect.value);
                });
                $(colleagueSelect)
                    .on('click', function () {
                    if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                })
                    .on('change', function () {
                    checkState('log-ticket');
                    toggleButton(colleagueSelect.value);
                });
                $(ticketSubject).on('keyup', function () {
                    checkState('log-ticket');
                    toggleButton(colleagueSelect.value);
                });
                $(ticketDescription).on('keyup', function () {
                    checkState('log-ticket');
                    toggleButton(colleagueSelect.value);
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
