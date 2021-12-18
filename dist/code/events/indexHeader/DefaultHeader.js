define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHeader = void 0;
    var DefaultHeader;
    (function (DefaultHeader) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var loggedButton = document.querySelector('#logged-tickets button');
                var logButton = document.querySelector('#log-a-ticket button');
                var manageButton = document.querySelector('#manage-tickets button');
                $(loggedButton).on('click', function () {
                    new GetEvent_1.GetEvent.forPage('logged-main', GetPath_1.GetPath.forHTML('main'));
                    manageButton.className = '';
                    loggedButton.className = 'active-page';
                });
                $(logButton).on('click', function () {
                    new GetEvent_1.GetEvent.forPage('log-overlay', GetPath_1.GetPath.forHTML('overlay'));
                });
                $(manageButton).on('click', function () {
                    new GetEvent_1.GetEvent.forPage('manage-main', GetPath_1.GetPath.forHTML('main'));
                    loggedButton.className = '';
                    manageButton.className = 'active-page';
                });
            }
            return initiateEvents;
        }());
        DefaultHeader.initiateEvents = initiateEvents;
    })(DefaultHeader = exports.DefaultHeader || (exports.DefaultHeader = {}));
});

//# sourceMappingURL=dist/code/events/indexHeader/DefaultHeader.js.map
