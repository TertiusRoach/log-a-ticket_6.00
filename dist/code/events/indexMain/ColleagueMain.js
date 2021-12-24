define(["require", "exports", "code/tools/DataRead"], function (require, exports, DataRead_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColleagueMain = void 0;
    var ColleagueMain;
    (function (ColleagueMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var openEmployees = indexMain.querySelector('#open-employees');
                var assignedTab = indexMain.querySelector('#assigned-tab');
                var resolvedTab = indexMain.querySelector('#resolved-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var mainHeader = indexMain.querySelector('#colleague-name');
                var indexSidebar = document.querySelector('#index-sidebar');
                var activeColleague = indexSidebar.querySelector('.active-colleague .text').textContent;
                var employeeFooter = indexSidebar.querySelector('#view-employees footer');
                var employeeButtons = employeeFooter.getElementsByTagName('span');
                mainHeader.textContent = "".concat(activeColleague);
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                new DataRead_1.DataRead.forMain('colleague-main', 'assigned');
                $(assignedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('colleague-main', 'assigned');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(resolvedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('colleague-main', 'resolved');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('colleague-main', 'deleted');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(openEmployees).on('click', function () {
                    indexSidebar.style.display = 'grid';
                });
                console.log('--ColleagueMain.js Loaded');
            }
            return initiateEvents;
        }());
        ColleagueMain.initiateEvents = initiateEvents;
    })(ColleagueMain = exports.ColleagueMain || (exports.ColleagueMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/ColleagueMain.js.map
