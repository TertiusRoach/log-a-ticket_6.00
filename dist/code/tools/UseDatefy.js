define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseDatefy = void 0;
    var UseDatefy;
    (function (UseDatefy) {
        function forToday(format) {
            switch (format) {
                case '2000':
                    break;
                case '00 Weekday, Month YYYY':
                    return '00 Weekday, Month YYYY';
                    break;
                default:
                    return "No function selected for todays' format";
            }
        }
        UseDatefy.forToday = forToday;
    })(UseDatefy = exports.UseDatefy || (exports.UseDatefy = {}));
});

//# sourceMappingURL=dist/code/tools/UseDatefy.js.map
