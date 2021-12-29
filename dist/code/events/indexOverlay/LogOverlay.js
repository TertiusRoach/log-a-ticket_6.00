define(["require", "exports", "code/tools/DataRead", "code/tools/DataUpdate", "code/tools/GetColor", "code/tools/UseDatefy"], function (require, exports, DataRead_1, DataUpdate_1, GetColor_1, UseDatefy_1) {
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
                var closeOverlay = indexOverlay.querySelector('#close-overlay');
                var logButton = indexOverlay.querySelector('#log-ticket button');
                var assignButton = indexOverlay.querySelector('#assign-ticket button');
                var ticketSubject = indexOverlay.querySelector('#ticket-subject');
                var ticketDescription = indexOverlay.querySelector('#ticket-description');
                var departmentSelect = indexOverlay.querySelector('#department-form select');
                var colleagueSelect = indexOverlay.querySelector('#colleague-form select');
                var pendingMark = indexOverlay.querySelector('.pending-mark');
                var assignedMark = indexOverlay.querySelector('.assigned-mark');
                var pendingDate = indexOverlay.querySelector('#pending-date');
                var assignDate = indexOverlay.querySelector('#assigned-date');
                var mainButton = '[id*="-ticket"] button';
                pendingDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                var indexData = document.querySelector('#index-data');
                function checkState(button) {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    switch (button) {
                        case 'log-ticket':
                            if (colleagueSelect.length === 1) {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignDate.className = 'disabled-text';
                            }
                            else if (subjectJQ === '' || descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignDate.className = 'disabled-text';
                            }
                            else if (subjectJQ !== '' && descriptionJQ === '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignDate.className = 'disabled-text';
                            }
                            else if (subjectJQ === '' && descriptionJQ !== '') {
                                logButton.className = 'disabled-button';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = 'disabled-text';
                                assignDate.className = 'disabled-text';
                            }
                            else if (colleagueSelect.value === 'select-colleague') {
                                logButton.className = '';
                                assignButton.className = 'disabled-button';
                                pendingDate.className = '';
                                assignDate.className = 'disabled-text';
                            }
                            else if (colleagueSelect.value !== 'select-colleague') {
                                assignDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                            }
                            else {
                                logButton.className = '';
                                assignButton.className = '';
                                pendingDate.className = '';
                                assignDate.className = '';
                            }
                            break;
                    }
                }
                function closeContainer(block) {
                    var container = document.querySelector("#".concat(block));
                    var page = block.split('-')[1];
                    document.querySelector("#".concat(block)).innerHTML = '';
                    document.querySelector("#".concat(block)).className = "default-".concat(page);
                    container.style.display = 'none';
                    activeButton.className = '';
                }
                function toggleButton(colleague) {
                    if (colleague !== 'select-colleague') {
                        logButton.parentElement.style.display = 'none';
                        assignButton.parentElement.style.display = 'grid';
                        pendingMark.style.background = "".concat(GetColor_1.GetColor.primaryMedium());
                        assignedMark.style.background = "".concat(GetColor_1.GetColor.primaryDark());
                    }
                }
                $(mainButton).on('click', function () {
                    if (logButton.className !== 'disabled-button') {
                        switch (assignButton.className) {
                            case 'disabled-button':
                                new DataUpdate_1.DataUpdate.forBlock('pending');
                                break;
                            default:
                                new DataUpdate_1.DataUpdate.forBlock('assigned');
                        }
                    }
                });
                $(departmentSelect)
                    .on('change', function () {
                    assignDate.innerText = undefined;
                    assignDate.style.display = 'none';
                })
                    .on('click', function () {
                    if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                });
                $(colleagueSelect)
                    .on('change', function () {
                    assignDate.innerText = UseDatefy_1.UseDatefy.forToday('Weekday, 00 Month YYYY');
                    assignDate.style.display = 'grid';
                    assignDate.className = '';
                    assignButton.className = '';
                })
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
                $(ticketSubject)
                    .on('keydown', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ === '' || descriptionJQ === '') {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        pendingDate.className = 'disabled-text';
                        assignDate.className = 'disabled-text';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                })
                    .on('keyup', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ !== '' || descriptionJQ !== '') {
                        if (colleagueSelect.value === 'select-colleague') {
                            logButton.className = '';
                            pendingDate.className = '';
                        }
                        else {
                            logButton.className = '';
                            pendingDate.className = '';
                            assignButton.className = '';
                            assignDate.className = '';
                        }
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                });
                $(ticketDescription)
                    .on('keydown', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ === '' || descriptionJQ === '') {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        pendingDate.className = 'disabled-text';
                        assignDate.className = 'disabled-text';
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                })
                    .on('keyup', function () {
                    var subjectJQ = "".concat($('#ticket-subject').val());
                    var descriptionJQ = "".concat($('#ticket-description').val());
                    if (subjectJQ !== '' || descriptionJQ !== '') {
                        if (colleagueSelect.value === 'select-colleague') {
                            logButton.className = '';
                            pendingDate.className = '';
                        }
                        else {
                            logButton.className = '';
                            pendingDate.className = '';
                            assignButton.className = '';
                            assignDate.className = '';
                        }
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else if (colleagueSelect.length === 1) {
                        logButton.className = 'disabled-button';
                        assignButton.className = 'disabled-button';
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                    else {
                        checkState('log-ticket');
                        toggleButton(colleagueSelect.value);
                    }
                });
                $(closeOverlay).on('click', function () {
                    closeContainer('index-overlay');
                    indexMain.style.display = 'grid';
                });
                checkState('log-ticket');
                console.log('--LogOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        LogOverlay.initiateEvents = initiateEvents;
    })(LogOverlay = exports.LogOverlay || (exports.LogOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/LogOverlay.js.map
