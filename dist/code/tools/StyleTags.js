define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StyleTags = void 0;
    var StyleTags;
    (function (StyleTags) {
        var primaryDark = '#084887';
        var primaryMedium = '#4c72a4';
        var primaryLight = '#909cc2';
        var secondaryDark = '#f58a07';
        var secondaryMedium = '#f8af58';
        var secondaryLight = '#fcd5aa';
        var tertiaryDark = '#024d04';
        var tertiaryMedium = '#08870c';
        var tertiaryLight = '#94be94';
        var pendingDefault = '#f8af58';
        var pendingOpacity = 'rgba(245, 138, 7, 0.15)';
        var assignedDefault = '#4c72a4';
        var assignedOpacity = 'rgba(144, 156, 194, 0.75)';
        var resolvedDefault = '#08870c';
        var resolvedOpacity = 'rgba(8, 135, 12, 0.15)';
        var deletedDefault = '#f95555';
        var deletedOpacity = 'rgba(249, 85, 85, 0.15)';
        var ticketOdd = '#eef0f6';
        var ticketEven = '#cdd2e3';
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
        var initiateEvents = (function () {
            function initiateEvents(pagePath, pageName) {
                var folderName = pagePath.split('/')[1];
                var segment = folderName.split('-')[1];
                switch (segment) {
                    case 'body':
                        break;
                    case 'header':
                        if ('default-header' === pageName) {
                            var highlightButton_1 = function (button) {
                                $("".concat(button, " svg")).css('color', "".concat(secondaryDark));
                                $("".concat(button, " svg")).css('cursor', 'default');
                                $("".concat(button, " h4")).css('color', "".concat(secondaryDark));
                                $("".concat(button, " h4")).css('cursor', 'default');
                            };
                            var downplayButton_1 = function (button) {
                                $(button.childNodes[1]).css('color', '');
                                $(button.childNodes[4]).css('color', '');
                                $(button.childNodes[1]).css('cursor', 'pointer');
                                $(button.childNodes[4]).css('cursor', 'pointer');
                                $('#user-container h1:nth-child(2)').css('color', '');
                                $('#user-container span').css('background', '');
                                $('.active-colleague').removeClass('active-colleague');
                            };
                            $('#log-a-ticket').on('click', function () {
                                $("#log-a-ticket svg").css('color', "".concat(secondaryDark));
                                $("#log-a-ticket svg").css('cursor', 'default');
                                $("#log-a-ticket h4").css('color', "".concat(secondaryDark));
                                $("#log-a-ticket h4").css('cursor', 'default');
                            });
                            $('#logged-tickets').on('click', function () {
                                highlightButton_1('#logged-tickets');
                                downplayButton_1(headerJS.children[2]);
                            });
                            $('#manage-tickets').on('click', function () {
                                highlightButton_1('#manage-tickets');
                                downplayButton_1(headerJS.children[1]);
                            });
                            $('#log-a-ticket h4')
                                .on('mouseenter', function () {
                                $('#log-a-ticket').css('color', "".concat(secondaryDark));
                            })
                                .on('mouseleave', function () {
                                $('#log-a-ticket').css('color', '');
                            });
                            $('#logged-tickets h4')
                                .on('mouseenter', function () {
                                $('#logged-tickets').css('color', "".concat(secondaryDark));
                            })
                                .on('mouseleave', function () {
                                $('#logged-tickets').css('color', '');
                            });
                            $('#manage-tickets h4')
                                .on('mouseenter', function () {
                                $('#manage-tickets').css('color', "".concat(secondaryDark));
                            })
                                .on('mouseleave', function () {
                                $('#manage-tickets').css('color', '');
                            });
                        }
                        break;
                    case 'main':
                        var highlightNotification_1 = function (status) {
                            var ticketsContainerJS = document.querySelector('#tickets-container');
                            if ("".concat(status, "-tickets") !== ticketsContainerJS.className) {
                                ticketsContainerJS.className = "".concat(status, "-tickets");
                            }
                            switch (status) {
                                case 'pending':
                                    $('[id*="notification"] h2').css('background', "".concat(pendingDefault));
                                    break;
                                case 'assigned':
                                    $('[id*="notification"] h2').css('background', "".concat(assignedDefault));
                                    break;
                                case 'resolved':
                                    $('[id*="notification"] h2').css('background', "".concat(resolvedDefault));
                                    break;
                                case 'deleted':
                                    $('[id*="notification"] h2').css('background', "".concat(deletedDefault));
                                    break;
                                case 'everything':
                                    $('[id*="notification"] h2').css('background', '');
                                    break;
                            }
                        };
                        $('#pending-tab').on('click', function () {
                            highlightNotification_1('pending');
                        });
                        $('#assigned-tab').on('click', function () {
                            highlightNotification_1('assigned');
                        });
                        $('#resolved-tab').on('click', function () {
                            highlightNotification_1('resolved');
                        });
                        $('#deleted-tab').on('click', function () {
                            highlightNotification_1('deleted');
                        });
                        $('#everything-tab').on('click', function () {
                            highlightNotification_1('everything');
                        });
                        break;
                    case 'sidebar':
                        var downplayHeader_1 = function (button) {
                            $(button.childNodes[1]).css('color', '');
                            $(button.childNodes[4]).css('color', '');
                            $(button.childNodes[1]).css('cursor', 'pointer');
                            $(button.childNodes[4]).css('cursor', 'pointer');
                        };
                        $('#employees > header').on('click', function () {
                            $('#user-container h1:nth-child(2)').css('color', "".concat(secondaryDark));
                            $('#user-container h1:nth-child(2)').css('cursor', 'default');
                            $('#user-container span').css('background', "".concat(primaryMedium));
                            downplayHeader_1(headerJS.children[1]);
                            downplayHeader_1(headerJS.children[2]);
                        });
                        $('#employees > div').on('click', function () {
                            $('#user-container h1:nth-child(2)').css('color', '');
                            $('#user-container h1:nth-child(2)').css('cursor', 'pointer');
                            $('#user-container span').css('background', '');
                            downplayHeader_1(headerJS.children[1]);
                            downplayHeader_1(headerJS.children[2]);
                        });
                        break;
                    case 'overlay':
                        if ('colleague-assigned' === pageName) {
                        }
                        if ('colleague-deleted' === pageName) {
                        }
                        if ('colleague-resolved' === pageName) {
                        }
                        if ('default-overlay' === pageName) {
                            $('#manager-tickets').on('click', function () {
                                highlightHeader_1('#logged-tickets');
                            });
                            $('#employee-tickets').on('click', function () {
                                highlightHeader_1('#manage-tickets');
                            });
                            var highlightHeader_1 = function (button) {
                                $("".concat(button, " svg")).css('color', "".concat(secondaryDark));
                                $("".concat(button, " svg")).css('cursor', 'default');
                                $("".concat(button, " h4")).css('color', "".concat(secondaryDark));
                                $("".concat(button, " h4")).css('cursor', 'default');
                            };
                            $('#manager-tickets h1')
                                .on('mouseenter', function () {
                                $('#manager-tickets').css('color', "".concat(secondaryDark));
                            })
                                .on('mouseleave', function () {
                                $('#manager-tickets').css('color', '');
                            });
                            $('#employee-tickets h1')
                                .on('mouseenter', function () {
                                $('#employee-tickets').css('color', "".concat(secondaryDark));
                            })
                                .on('mouseleave', function () {
                                $('#employee-tickets').css('color', '');
                            });
                        }
                        if ('delete-overlay' === pageName) {
                        }
                        if ('log-overlay' === pageName) {
                            $('#close-overlay').on('click', function () {
                                $("#log-a-ticket svg").css('color', '');
                                $("#log-a-ticket svg").css('cursor', '');
                                $("#log-a-ticket h4").css('color', '');
                                $("#log-a-ticket h4").css('cursor', '');
                            });
                            $('#overlay-background').on('click', function () {
                                $("#log-a-ticket svg").css('color', '');
                                $("#log-a-ticket svg").css('cursor', '');
                                $("#log-a-ticket h4").css('color', '');
                                $("#log-a-ticket h4").css('cursor', '');
                            });
                        }
                        if ('logged-assigned' === pageName) {
                        }
                        if ('logged-deleted' === pageName) {
                        }
                        if ('logged-pending' === pageName) {
                        }
                        if ('logged-resolved' === pageName) {
                        }
                        if ('manage-deleted' === pageName) {
                        }
                        if ('manage-pending' === pageName) {
                        }
                        if ('resolve-overlay' === pageName) {
                        }
                        if ('user-assigned' === pageName) {
                        }
                        if ('user-deleted' === pageName) {
                        }
                        if ('user-resolved' === pageName) {
                        }
                        break;
                }
            }
            return initiateEvents;
        }());
        StyleTags.initiateEvents = initiateEvents;
        console.log('--style.js Loaded');
    })(StyleTags = exports.StyleTags || (exports.StyleTags = {}));
});

//# sourceMappingURL=dist/code/tools/StyleTags.js.map
