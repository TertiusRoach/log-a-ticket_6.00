define(["require", "exports", "code/tools/DataRead", "code/tools/UseValufy"], function (require, exports, DataRead_1, UseValufy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoworkerMain = void 0;
    var CoworkerMain;
    (function (CoworkerMain) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var indexHeader = document.querySelector('#index-header');
                var indexMain = document.querySelector('#index-main');
                var mainHeader = indexMain.querySelector('#coworker-header');
                var openCoworkers = indexMain.querySelector('#open-coworkers');
                var resolvedTab = indexMain.querySelector('#resolved-tab');
                var deletedTab = indexMain.querySelector('#deleted-tab');
                var indexSidebar = document.querySelector('#index-sidebar');
                var activeColleague = indexSidebar.querySelector('.active-colleague .text');
                mainHeader.innerHTML = "<span class=\"notification\">\n                                <h2 style=\"background: #08870c\">0</h2>\n                              </span>\n                              <h1 class=\"text ".concat(UseValufy_1.UseValufy.forString(activeColleague.innerText), "\">").concat(activeColleague.innerText, "</h1>");
                var indexOverlay = document.querySelector('#index-overlay');
                var indexData = document.querySelector('#index-data');
                new DataRead_1.DataRead.forMain('coworker-main', 'resolved');
                $(openCoworkers).on('click', function () {
                    indexSidebar.style.display = 'grid';
                });
                $(resolvedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('coworker-main', 'resolved');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
                $(deletedTab)
                    .on('click', function () {
                    new DataRead_1.DataRead.forMain('coworker-main', 'deleted');
                })
                    .on('mouseenter', function () { })
                    .on('mouseleave', function () { });
            }
            return initiateEvents;
        }());
        CoworkerMain.initiateEvents = initiateEvents;
    })(CoworkerMain = exports.CoworkerMain || (exports.CoworkerMain = {}));
});

//# sourceMappingURL=dist/code/events/indexMain/CoworkerMain.js.map
