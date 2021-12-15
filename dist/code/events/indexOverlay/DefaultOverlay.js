define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultOverlay = void 0;
    var DefaultOverlay;
    (function (DefaultOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var defaultOverlay = document.querySelector('.default-overlay');
                var managerButton = document.querySelector('#manager-tickets button');
                var employeeButton = document.querySelector('#employee-tickets button');
                new GetEvent_1.GetEvent.forPage('default-header', GetPath_1.GetPath.forHTML('header'));
                function highlight(button) {
                    var managerButton = defaultOverlay.parentElement.children[1].children[0].children[0];
                    var employeeButton = defaultOverlay.parentElement.children[1].children[2].children[0];
                    switch (button) {
                        case 'manager-button':
                            managerButton.className = 'active-page';
                            employeeButton.className = '';
                            break;
                        case 'employee-button':
                            managerButton.className = '';
                            employeeButton.className = 'active-page';
                            break;
                    }
                }
                $(managerButton).on('mouseenter', function () {
                    new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                    highlight('manager-button');
                });
                $(employeeButton).on('mouseenter', function () {
                    new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                    highlight('employee-button');
                });
                console.log('--DefaultOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        DefaultOverlay.initiateEvents = initiateEvents;
    })(DefaultOverlay = exports.DefaultOverlay || (exports.DefaultOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DefaultOverlay.js.map
