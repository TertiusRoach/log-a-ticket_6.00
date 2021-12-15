define(["require", "exports", "code/tools/GetEvent", "code/tools/GetPath"], function (require, exports, GetEvent_1, GetPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Use = exports.Start = void 0;
    var Start;
    (function (Start) {
        new GetEvent_1.GetEvent.forPage('default-body', GetPath_1.GetPath.forHTML('body'));
        new GetEvent_1.GetEvent.forPage('default-overlay', GetPath_1.GetPath.forHTML('overlay'));
    })(Start = exports.Start || (exports.Start = {}));
    var Use;
    (function (Use) {
        function capitalize(employeeValue) {
            var firstSplit = employeeValue.split('-')[0];
            var firstName = "".concat(firstSplit.charAt(0).toUpperCase() + firstSplit.slice(1));
            var secondSplit = employeeValue.split('-')[1];
            var lastName = "".concat(secondSplit.charAt(0).toUpperCase() + secondSplit.slice(1));
            return "".concat(firstName, " ").concat(lastName);
        }
        Use.capitalize = capitalize;
        function valuing(employeeName) { }
        Use.valuing = valuing;
    })(Use = exports.Use || (exports.Use = {}));
});

//# sourceMappingURL=dist/main.js.map
