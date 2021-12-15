define(["require", "exports", "code/tools/GetPage"], function (require, exports, GetPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Start = exports.Get = void 0;
    var Get;
    (function (Get) {
        function color(name) {
            switch (name) {
                case 'primary-dark':
                    return '#084887';
                case 'primary-medium':
                    return '#4c72a4';
                case 'primary-medium':
                    return '#909cc2';
                case 'secondary-dark':
                    return '#f58a07';
                case 'secondary-medium':
                    return '#f8af58';
                case 'secondary-medium':
                    return '#fcd5aa';
                case 'tertiary-dark':
                    return '#024d04';
                case 'tertiary-medium':
                    return '#08870c';
                case 'tertiary-medium':
                    return '#94be94';
                case 'pending-default':
                    return '#f8af58';
                case 'pending-opacity':
                    return 'rgba(245, 138, 7, 0.15)';
                case 'assigned-default':
                    return '#4c72a4';
                case 'assigned-opacity':
                    return 'rgba(144, 156, 194, 0.75)';
                case 'resolved-default':
                    return '#08870c';
                case 'resolved-opacity':
                    return 'rgba(8, 135, 12, 0.15)';
                case 'deleted-default':
                    return '#f95555';
                case 'deleted-opacity':
                    return 'rgba(249, 85, 85, 0.15)';
            }
        }
        Get.color = color;
        function path(path) {
            switch (path) {
                case 'body':
                    return 'html/index-body/';
                case 'header':
                    return 'html/index-header/';
                case 'main':
                    return 'html/index-main/';
                case 'sidebar':
                    return 'html/index-sidebar/';
                case 'overlay':
                    return 'html/index-overlay/';
                case 'data':
                    return 'html/index-data/';
            }
        }
        Get.path = path;
    })(Get = exports.Get || (exports.Get = {}));
    var Start;
    (function (Start) {
        new GetPage_1.GetPage.initiateCode(Get.path('body'), 'default-body');
        new GetPage_1.GetPage.initiateCode(Get.path('overlay'), 'default-overlay');
    })(Start = exports.Start || (exports.Start = {}));
});

//# sourceMappingURL=dist/main.js.map
