define(["require", "exports", "code/tools/StyleTags", "code/tools/BuildTickets", "code/events/indexHeader/DefaultHeader", "code/events/indexMain/LoggedMain", "code/events/indexMain/ManageMain", "code/events/indexMain/UserMain", "code/events/indexMain/ColleagueMain", "code/events/indexSidebar/DefaultSidebar", "code/events/indexOverlay/ColleagueAssigned", "code/events/indexOverlay/ColleagueDeleted", "code/events/indexOverlay/ColleagueResolved", "code/events/indexOverlay/DefaultOverlay", "code/events/indexOverlay/DeleteOverlay", "code/events/indexOverlay/LoggedAssigned", "code/events/indexOverlay/LoggedDeleted", "code/events/indexOverlay/LoggedPending", "code/events/indexOverlay/LoggedResolved", "code/events/indexOverlay/LogOverlay", "code/events/indexOverlay/ManageDeleted", "code/events/indexOverlay/ManagePending", "code/events/indexOverlay/ResolveOverlay", "code/events/indexOverlay/UserAssigned", "code/events/indexOverlay/UserDeleted", "code/events/indexOverlay/UserResolved"], function (require, exports, StyleTags_1, BuildTickets_1, DefaultHeader_1, LoggedMain_1, ManageMain_1, UserMain_1, ColleagueMain_1, DefaultSidebar_1, ColleagueAssigned_1, ColleagueDeleted_1, ColleagueResolved_1, DefaultOverlay_1, DeleteOverlay_1, LoggedAssigned_1, LoggedDeleted_1, LoggedPending_1, LoggedResolved_1, LogOverlay_1, ManageDeleted_1, ManagePending_1, ResolveOverlay_1, UserAssigned_1, UserDeleted_1, UserResolved_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetCode = void 0;
    var GetCode;
    (function (GetCode) {
        function indexBody(events, bodyJS, bodyJQ) {
            var bodyPathHTML = 'html/index-body';
            switch (events) {
                case 'DefaultBody':
                    new StyleTags_1.StyleTags.initiateEvents(bodyPathHTML, 'default-body');
                    break;
            }
        }
        GetCode.indexBody = indexBody;
        function indexHeader(events, headerJS, headerJQ) {
            var headerPathHTML = 'html/index-header';
            switch (events) {
                case 'DefaultHeader':
                    new StyleTags_1.StyleTags.initiateEvents(headerPathHTML, 'default-header');
                    new DefaultHeader_1.DefaultHeader.initiateEvents();
                    break;
            }
        }
        GetCode.indexHeader = indexHeader;
        function indexMain(events, mainJS, mainJQ) {
            var mainPathHTML = 'html/index-main';
            switch (events) {
                case 'LoggedMain':
                    BuildTickets_1.BuildTickets.initiateCode(events);
                    new StyleTags_1.StyleTags.initiateEvents(mainPathHTML, 'logged-main');
                    new LoggedMain_1.LoggedMain.initiateEvents();
                    break;
                case 'ManageMain':
                    BuildTickets_1.BuildTickets.initiateCode(events);
                    new StyleTags_1.StyleTags.initiateEvents(mainPathHTML, 'manage-main');
                    new ManageMain_1.ManageMain.initiateEvents();
                    break;
                case 'UserMain':
                    BuildTickets_1.BuildTickets.initiateCode(events);
                    new StyleTags_1.StyleTags.initiateEvents(mainPathHTML, 'user-main');
                    new UserMain_1.UserMain.initiateEvents();
                    break;
                case 'ColleagueMain':
                    BuildTickets_1.BuildTickets.initiateCode(events);
                    new StyleTags_1.StyleTags.initiateEvents(mainPathHTML, 'colleague-main');
                    new ColleagueMain_1.ColleagueMain.initiateEvents();
                    break;
            }
        }
        GetCode.indexMain = indexMain;
        function indexSidebar(events, sidebarJS, sidebarJQ) {
            var sidebarPathHTML = 'html/index-sidebar';
            switch (events) {
                case 'DefaultSidebar':
                    new StyleTags_1.StyleTags.initiateEvents(sidebarPathHTML, 'default-sidebar');
                    new DefaultSidebar_1.DefaultSidebar.initiateEvents();
                    break;
            }
        }
        GetCode.indexSidebar = indexSidebar;
        function indexOverlay(getEvents, overlayJS, overlayJQ) {
            var overlayPathHTML = 'html/index-overlay';
            switch (getEvents) {
                case 'ColleagueAssigned':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'colleague-assigned');
                    new ColleagueAssigned_1.ColleagueAssigned.initiateEvents();
                    break;
                case 'ColleagueDeleted':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'colleague-deleted');
                    new ColleagueDeleted_1.ColleagueDeleted.initiateEvents();
                    break;
                case 'ColleagueResolved':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'colleague-resolved');
                    new ColleagueResolved_1.ColleagueResolved.initiateEvents();
                    break;
                case 'DefaultOverlay':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'default-overlay');
                    new DefaultOverlay_1.DefaultOverlay.initiateEvents();
                    break;
                case 'DeleteOverlay':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'delete-overlay');
                    new DeleteOverlay_1.DeleteOverlay.initiateEvents();
                    break;
                case 'LogOverlay':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'log-overlay');
                    new LogOverlay_1.LogOverlay.initiateEvents();
                    break;
                case 'LoggedAssigned':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'logged-assigned');
                    new LoggedAssigned_1.LoggedAssigned.initiateEvents();
                    break;
                case 'LoggedDeleted':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'logged-deleted');
                    new LoggedDeleted_1.LoggedDeleted.initiateEvents();
                    break;
                case 'LoggedPending':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'logged-pending');
                    new LoggedPending_1.LoggedPending.initiateEvents();
                    break;
                case 'LoggedResolved':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'logged-resolved');
                    new LoggedResolved_1.LoggedResolved.initiateEvents();
                    break;
                case 'ManageDeleted':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'manage-deleted');
                    new ManageDeleted_1.ManageDeleted.initiateEvents();
                    break;
                case 'ManagePending':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'manage-pending');
                    new ManagePending_1.ManagePending.initiateEvents();
                    break;
                case 'ResolveOverlay':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'resolve-overlay');
                    new ResolveOverlay_1.ResolveOverlay.initiateEvents();
                    break;
                case 'UserAssigned':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'user-assigned');
                    new UserAssigned_1.UserAssigned.initiateEvents();
                    break;
                case 'UserDeleted':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'user-deleted');
                    new UserDeleted_1.UserDeleted.initiateEvents();
                    break;
                case 'UserResolved':
                    new StyleTags_1.StyleTags.initiateEvents(overlayPathHTML, 'user-resolved');
                    new UserResolved_1.UserResolved.initiateEvents();
                    break;
            }
        }
        GetCode.indexOverlay = indexOverlay;
        var initiateBlock = (function () {
            function initiateBlock(pagePath, pageName) {
                var folderName = pagePath.split('/')[1];
                var segment = folderName.split('-')[1];
                switch (segment) {
                    case 'body':
                        var bodyJS = document.querySelector('#index-body');
                        var bodyJQ = $('#index-body');
                        new StyleTags_1.StyleTags.initiateEvents(pagePath, pageName);
                        GetCode.indexBody(pageName, bodyJS, bodyJQ);
                        break;
                    case 'header':
                        var headerJS = document.querySelector('#index-header');
                        var headerJQ = $('#index-header');
                        new StyleTags_1.StyleTags.initiateEvents(pagePath, pageName);
                        GetCode.indexHeader("".concat(pageName), headerJS, headerJQ);
                        break;
                    case 'main':
                        var mainJS = document.querySelector('#index-main');
                        var mainJQ = $('#index-main');
                        new StyleTags_1.StyleTags.initiateEvents(pagePath, pageName);
                        GetCode.indexMain(pageName, mainJS, mainJQ);
                        break;
                    case 'sidebar':
                        var sidebarJS = document.querySelector('#index-sidebar');
                        var sidebarJQ = $('#index-sidebar');
                        GetCode.indexSidebar(pageName, sidebarJS, sidebarJQ);
                        break;
                    case 'overlay':
                        var overlayJS = document.querySelector('#index-overlay');
                        var overlayJQ = $('#index-overlay');
                        new StyleTags_1.StyleTags.initiateEvents(pagePath, pageName);
                        GetCode.indexOverlay(pageName, overlayJS, overlayJQ);
                        break;
                }
            }
            return initiateBlock;
        }());
        GetCode.initiateBlock = initiateBlock;
    })(GetCode = exports.GetCode || (exports.GetCode = {}));
});

//# sourceMappingURL=dist/code/tools/~Sort Out/GetCode.js.map
