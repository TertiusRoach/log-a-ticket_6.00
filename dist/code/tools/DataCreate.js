define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataCreate = void 0;
    var DataCreate;
    (function (DataCreate) {
        var initiateCode = (function () {
            function initiateCode(blockName) {
                switch (blockName) {
                    case 'index-data':
                        var iframe = document.querySelector('#index-data');
                        var indexData = iframe.contentDocument || iframe.contentWindow.document;
                        break;
                }
            }
            return initiateCode;
        }());
        DataCreate.initiateCode = initiateCode;
    })(DataCreate = exports.DataCreate || (exports.DataCreate = {}));
});

//# sourceMappingURL=dist/code/tools/DataCreate.js.map
