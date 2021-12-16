define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UseCapify = void 0;
    var UseCapify;
    (function (UseCapify) {
        function forValue(value) {
            var firstSplit = value.split('-')[0];
            var firstName = "".concat(firstSplit.charAt(0).toUpperCase() + firstSplit.slice(1));
            var lastSplit = value.split('-')[1];
            var lastName = "".concat(lastSplit.charAt(0).toUpperCase() + lastSplit.slice(1));
            return "".concat(firstName, " ").concat(lastName);
        }
        UseCapify.forValue = forValue;
    })(UseCapify = exports.UseCapify || (exports.UseCapify = {}));
});

//# sourceMappingURL=dist/code/tools/UseCapify.js.map
