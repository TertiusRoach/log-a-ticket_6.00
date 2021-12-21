define(["require", "exports", "code/tools/DataRead"], function (require, exports, DataRead_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmployeesSidebar = void 0;
    var EmployeesSidebar;
    (function (EmployeesSidebar) {
        var initiateEvents = (function () {
            function initiateEvents() {
                new DataRead_1.DataRead.forSidebar('employees-sidebar');
                var closeEmployees = document.querySelector('#close-employees');
                var indexSidebar = document.querySelector('#index-sidebar');
                $(closeEmployees).on('click', function () {
                    indexSidebar.style.display = 'none';
                });
                console.log('--EmployeesSidebar.js Loaded');
            }
            return initiateEvents;
        }());
        EmployeesSidebar.initiateEvents = initiateEvents;
    })(EmployeesSidebar = exports.EmployeesSidebar || (exports.EmployeesSidebar = {}));
});

//# sourceMappingURL=dist/code/events/indexSidebar/EmployeesSidebar.js.map
