define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseValufy = void 0;
    var UseValufy;
    (function (UseValufy) {
        function forSentence(departmentName) {
            var department = departmentName.split(' ');
            var arrayTotal = department.length;
            switch (arrayTotal) {
                case 1:
                    return "".concat(department[0].toLowerCase());
                case 2:
                    return "".concat(department[0].toLowerCase(), "-").concat(department[1].toLowerCase());
                case 3:
                    return "".concat(department[0].toLowerCase(), "-").concat(department[1].toLowerCase(), "-").concat(department[2].toLowerCase());
                case 4:
                    return "".concat(department[0].toLowerCase(), "-").concat(department[1].toLowerCase(), "-").concat(department[2].toLowerCase(), "-").concat(department[3].toLowerCase());
                case 5:
                    return "".concat(department[0].toLowerCase(), "-").concat(department[1].toLowerCase(), "-").concat(department[2].toLowerCase(), "-").concat(department[4].toLowerCase());
            }
        }
        UseValufy.forSentence = forSentence;
        function forName(fullName) { }
        UseValufy.forName = forName;
    })(UseValufy = exports.UseValufy || (exports.UseValufy = {}));
});

//# sourceMappingURL=dist/code/tools/UseValufy.js.map
