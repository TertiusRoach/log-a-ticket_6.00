define(["require", "exports", "code/tools/GetArray"], function (require, exports, GetArray_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaceData = void 0;
    var ReplaceData;
    (function (ReplaceData) {
        var bodyPathHTML = 'html/index-body';
        var bodyPathTS = 'code/events/indexBody';
        var bodyJS = document.querySelector('#index-body');
        var bodyJQ = $('#index-body');
        var headerPathHTML = 'html/index-header';
        var headerPathTS = 'code/events/indexHeader';
        var headerJS = document.querySelector('#index-header');
        var headerJQ = $('#index-header');
        var mainPathHTML = 'html/index-main';
        var mainPathTS = 'code/events/indexMain';
        var mainJS = document.querySelector('#index-main');
        var mainJQ = $('#index-main');
        var sidebarPathHTML = 'html/index-sidebar';
        var sidebarPathTS = 'code/events/indexSidebar';
        var sidebarJS = document.querySelector('#index-sidebar');
        var sidebarJQ = $('#index-sidebar');
        var overlayPathHTML = 'html/index-overlay';
        var overlayPathTS = 'code/events/indexOverlay';
        var overlayJS = document.querySelector('#index-overlay');
        var overlayJQ = $('#index-overlay');
        var initiateBlock = (function () {
            function initiateBlock(pageBlock) {
                switch (pageBlock) {
                    case 'body':
                        break;
                    case 'header':
                        break;
                    case 'main':
                        var replaceText = function () {
                            var userSelectJS = document.querySelector('.default-sidebar header h1:nth-child(2)');
                            var userSelectJQ = $('.default-sidebar header h1:nth-child(2)');
                            var colleagueSelectJS = document.querySelector('.active-colleague h3:nth-child(2)');
                            var colleagueSelectJQ = $('.active-colleague h3:nth-child(2)');
                            var pageName = mainJS.classList[0];
                            switch (pageName) {
                                case 'logged-main':
                                    $('#user-name').text(userSelectJS.textContent);
                                    break;
                                case 'manage-main':
                                    var employeesTotal = GetArray_1.GetEmployee.employees().length;
                                    for (var i = 0; i < employeesTotal; i++) {
                                        var firstName = GetArray_1.GetEmployee.employees()[i].firstName;
                                        var lastName = GetArray_1.GetEmployee.employees()[i].lastName;
                                        if ("".concat(firstName, " ").concat(lastName) === userSelectJS.textContent) {
                                            $('[class*="main"] header h1').text("".concat(GetArray_1.GetEmployee.employees()[i].department));
                                        }
                                    }
                                    break;
                                case 'user-main':
                                    $('#user-name').text(userSelectJS.textContent);
                                    break;
                                case 'colleague-main':
                                    $('#colleague-name').text(colleagueSelectJS.textContent);
                                    break;
                            }
                        };
                        replaceText();
                        var countTickets_1 = function () {
                            var activeTabJS = document.querySelector('.active-tab');
                            var activeTabJQ = $('.active-tab');
                            var pendingTotalJQ = $('#tickets-container .pending').length;
                            var assignedTotalJQ = $('#tickets-container .assigned').length;
                            var resolvedTotalJQ = $('#tickets-container .resolved').length;
                            var deletedTotalJQ = $('#tickets-container .deleted').length;
                            var everythingTotalJQ = pendingTotalJQ + assignedTotalJQ + resolvedTotalJQ + deletedTotalJQ;
                            var tabStatusJS = activeTabJS.id.split('-')[0];
                            switch (tabStatusJS) {
                                case 'pending':
                                    $('[id*="notification"] h2').text(pendingTotalJQ);
                                    break;
                                case 'assigned':
                                    $('[id*="notification"] h2').text(assignedTotalJQ);
                                    break;
                                case 'resolved':
                                    $('[id*="notification"] h2').text(resolvedTotalJQ);
                                    break;
                                case 'deleted':
                                    $('[id*="notification"] h2').text(deletedTotalJQ);
                                    break;
                                case 'everything':
                                    $('[id*="notification"] h2').text(everythingTotalJQ);
                                    break;
                            }
                        };
                        countTickets_1();
                        $('[id*="tab"]').on('click', function () {
                            countTickets_1();
                        });
                        break;
                    case 'sidebar':
                        break;
                    case 'overlay':
                        break;
                }
            }
            return initiateBlock;
        }());
        ReplaceData.initiateBlock = initiateBlock;
    })(ReplaceData = exports.ReplaceData || (exports.ReplaceData = {}));
});

//# sourceMappingURL=dist/code/tools/ReplaceData.js.map
