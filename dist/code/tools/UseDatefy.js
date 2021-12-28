define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseDatefy = void 0;
    var UseDatefy;
    (function (UseDatefy) {
        function forToday(format) {
            var presentDate = Date();
            switch (format) {
                case '2000':
                    return '2000';
                case '00 Weekday, Month YYYY':
                    var result = void 0;
                    var monthDay = presentDate.split(' ')[2];
                    var weekdayEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var weekdagAF = ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'];
                    var weekday = weekdayEN[new Date().getDay()];
                    var weekdag = weekdagAF[new Date().getDay()];
                    var monthEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var maandAF = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
                    var month = monthEN[new Date().getMonth()];
                    var maand = maandAF[new Date().getMonth()];
                    var year = presentDate.split(' ')[3];
                    return "".concat(monthDay, " ").concat(weekday, ", ").concat(month, " ").concat(year);
                default:
                    return 'No function for selected format';
            }
        }
        UseDatefy.forToday = forToday;
    })(UseDatefy = exports.UseDatefy || (exports.UseDatefy = {}));
});

//# sourceMappingURL=dist/code/tools/UseDatefy.js.map
