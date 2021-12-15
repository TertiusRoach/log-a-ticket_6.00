define(["require", "exports", "code/tools/GetArray"], function (require, exports, GetArray_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuildTickets = void 0;
    var BuildTickets;
    (function (BuildTickets) {
        function initiateCode(pageName) {
            var metadataJS = document.querySelector('#metadata div');
            var metadataJQ = $('#metadata div');
            $('#tickets-container').empty();
            switch (pageName) {
                case 'logged-main':
                    var filterLogged = metadataJQ.length;
                    BuildTickets.getMetadata(filterLogged, pageName, metadataJS, metadataJQ);
                    break;
                case 'manage-main':
                    var filterManage = metadataJQ.length;
                    BuildTickets.getMetadata(filterManage, pageName, metadataJS, metadataJQ);
                    break;
                case 'user-main':
                    var filterUser = metadataJQ.length;
                    BuildTickets.getMetadata(filterUser, pageName, metadataJS, metadataJQ);
                    break;
                case 'colleague-main':
                    var filterColleague = metadataJQ.length;
                    BuildTickets.getMetadata(filterColleague, pageName, metadataJS, metadataJQ);
                    break;
            }
        }
        BuildTickets.initiateCode = initiateCode;
        function getMetadata(metadataTotal, pageName, metadataJS, metadataJQ) {
            var userSelectJS = document.querySelector('.default-sidebar header h1:nth-child(2)');
            var userSelectJQ = $('.default-sidebar header h1:nth-child(2)');
            var colleagueSelectJS = document.querySelector('.active-colleague h3:nth-child(2)');
            var colleagueSelectJQ = $('.active-colleague h3:nth-child(2)');
            var indexTotal = metadataTotal;
            switch (pageName) {
                case 'logged-main':
                    var _loop_1 = function (i) {
                        var ticketStatus = metadataJQ[i].children[0].innerHTML;
                        var ticketRating = metadataJQ[i].children[1].innerHTML;
                        var subjectText = metadataJQ[i].children[2].innerHTML;
                        var descriptionText = metadataJQ[i].children[3].innerHTML;
                        var senderName = metadataJQ[i].children[4].innerHTML;
                        var senderDepartment = metadataJQ[i].children[5].innerHTML;
                        var receiverName = metadataJQ[i].children[6].innerHTML;
                        var receiverDepartment = metadataJQ[i].children[7].innerHTML;
                        var dateShort = metadataJQ[i].children[8].innerHTML;
                        var datePending = metadataJQ[i].children[9].innerHTML;
                        var dateAssigned = metadataJQ[i].children[10].innerHTML;
                        var dateResolved = metadataJQ[i].children[11].innerHTML;
                        var noteResolved = metadataJQ[i].children[12].innerHTML;
                        var dateDeleted = metadataJQ[i].children[13].innerHTML;
                        var noteDeleted = metadataJQ[i].children[14].innerHTML;
                        var receiverUndefined = function () {
                            switch ("".concat(undefined)) {
                                case receiverName:
                                    return receiverDepartment;
                                default:
                                    return receiverName;
                            }
                        };
                        if (userSelectJS.innerHTML === senderName) {
                            $('#tickets-container').append("<article class=\"ticket ".concat(ticketStatus.toLowerCase(), "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                <p class=\"shortdate\">").concat(dateShort, "</p>\n                <p class=\"subject\">").concat(subjectText, "</p>\n                <p class=\"receiver\">").concat(receiverUndefined(), "</p>\n                \n                <footer style=\"display: none\">\n                  <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                  <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                  <p class=\"subject-text\">").concat(subjectText, "</p>\n                  <p class=\"description-text\">").concat(descriptionText, "</p>\n                  <p class=\"sender-name\">").concat(senderName, "</p>\n                  <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                  <p class=\"receiver-name\">").concat(receiverName, "</p>\n                  <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                  <p class=\"date-short\">").concat(dateShort, "</p>\n                  <p class=\"date-pending\">").concat(datePending, "</p>\n                  <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                  <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                  <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                  <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                  <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                </footer>\n              </article>"));
                        }
                    };
                    for (var i = 0; i < indexTotal; i++) {
                        _loop_1(i);
                    }
                    break;
                case 'manage-main':
                    var employeesTotal = GetArray_1.GetEmployee.employees().length;
                    var getDepartment = void 0;
                    for (var i = 0; i < employeesTotal; i++) {
                        if (userSelectJS.innerHTML === "".concat(GetArray_1.GetEmployee.employees()[i].firstName, " ").concat(GetArray_1.GetEmployee.employees()[i].lastName)) {
                            getDepartment = GetArray_1.GetEmployee.employees()[i].department;
                        }
                    }
                    var userDepartment = getDepartment;
                    for (var i = 0; i < indexTotal; i++) {
                        var ticketStatus = metadataJQ[i].children[0].innerHTML;
                        var ticketRating = metadataJQ[i].children[1].innerHTML;
                        var subjectText = metadataJQ[i].children[2].innerHTML;
                        var descriptionText = metadataJQ[i].children[3].innerHTML;
                        var senderName = metadataJQ[i].children[4].innerHTML;
                        var senderDepartment = metadataJQ[i].children[5].innerHTML;
                        var receiverName = metadataJQ[i].children[6].innerHTML;
                        var receiverDepartment = metadataJQ[i].children[7].innerHTML;
                        var dateShort = metadataJQ[i].children[8].innerHTML;
                        var datePending = metadataJQ[i].children[9].innerHTML;
                        var dateAssigned = metadataJQ[i].children[10].innerHTML;
                        var dateResolved = metadataJQ[i].children[11].innerHTML;
                        var noteResolved = metadataJQ[i].children[12].innerHTML;
                        var dateDeleted = metadataJQ[i].children[13].innerHTML;
                        var noteDeleted = metadataJQ[i].children[14].innerHTML;
                        if (userDepartment === receiverDepartment && receiverName === "".concat(undefined)) {
                            $('#tickets-container').append("<article class=\"ticket ".concat(ticketStatus.toLowerCase(), "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                <p class=\"shortdate\">").concat(dateShort, "</p>\n                <p class=\"subject\">").concat(subjectText, "</p>\n                <p class=\"sender\">").concat(senderName, "</p>\n                \n                <footer style=\"display: none\">\n                  <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                  <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                  <p class=\"subject-text\">").concat(subjectText, "</p>\n                  <p class=\"description-text\">").concat(descriptionText, "</p>\n                  <p class=\"sender-name\">").concat(senderName, "</p>\n                  <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                  <p class=\"receiver-name\">").concat(receiverName, "</p>\n                  <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                  <p class=\"date-short\">").concat(dateShort, "</p>\n                  <p class=\"date-pending\">").concat(datePending, "</p>\n                  <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                  <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                  <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                  <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                  <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                </footer>\n              </article>"));
                        }
                    }
                    break;
                case 'user-main':
                    for (var i = 0; i < indexTotal; i++) {
                        var ticketStatus = metadataJQ[i].children[0].innerHTML;
                        var ticketRating = metadataJQ[i].children[1].innerHTML;
                        var subjectText = metadataJQ[i].children[2].innerHTML;
                        var descriptionText = metadataJQ[i].children[3].innerHTML;
                        var senderName = metadataJQ[i].children[4].innerHTML;
                        var senderDepartment = metadataJQ[i].children[5].innerHTML;
                        var receiverName = metadataJQ[i].children[6].innerHTML;
                        var receiverDepartment = metadataJQ[i].children[7].innerHTML;
                        var dateShort = metadataJQ[i].children[8].innerHTML;
                        var datePending = metadataJQ[i].children[9].innerHTML;
                        var dateAssigned = metadataJQ[i].children[10].innerHTML;
                        var dateResolved = metadataJQ[i].children[11].innerHTML;
                        var noteResolved = metadataJQ[i].children[12].innerHTML;
                        var dateDeleted = metadataJQ[i].children[13].innerHTML;
                        var noteDeleted = metadataJQ[i].children[14].innerHTML;
                        if (userSelectJS.innerHTML === receiverName) {
                            $('#tickets-container').append("<article class=\"ticket ".concat(ticketStatus.toLowerCase(), "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                <p class=\"shortdate\">").concat(dateShort, "</p>\n                <p class=\"subject\">").concat(subjectText, "</p>\n                <p class=\"sender\">").concat(senderName, "</p>\n                \n                <footer style=\"display: none\">\n                  <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                  <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                  <p class=\"subject-text\">").concat(subjectText, "</p>\n                  <p class=\"description-text\">").concat(descriptionText, "</p>\n                  <p class=\"sender-name\">").concat(senderName, "</p>\n                  <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                  <p class=\"receiver-name\">").concat(receiverName, "</p>\n                  <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                  <p class=\"date-short\">").concat(dateShort, "</p>\n                  <p class=\"date-pending\">").concat(datePending, "</p>\n                  <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                  <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                  <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                  <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                  <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                </footer>\n              </article>"));
                        }
                    }
                    break;
                case 'colleague-main':
                    for (var i = 0; i < indexTotal; i++) {
                        var ticketStatus = metadataJQ[i].children[0].innerHTML;
                        var ticketRating = metadataJQ[i].children[1].innerHTML;
                        var subjectText = metadataJQ[i].children[2].innerHTML;
                        var descriptionText = metadataJQ[i].children[3].innerHTML;
                        var senderName = metadataJQ[i].children[4].innerHTML;
                        var senderDepartment = metadataJQ[i].children[5].innerHTML;
                        var receiverName = metadataJQ[i].children[6].innerHTML;
                        var receiverDepartment = metadataJQ[i].children[7].innerHTML;
                        var dateShort = metadataJQ[i].children[8].innerHTML;
                        var datePending = metadataJQ[i].children[9].innerHTML;
                        var dateAssigned = metadataJQ[i].children[10].innerHTML;
                        var dateResolved = metadataJQ[i].children[11].innerHTML;
                        var noteResolved = metadataJQ[i].children[12].innerHTML;
                        var dateDeleted = metadataJQ[i].children[13].innerHTML;
                        var noteDeleted = metadataJQ[i].children[14].innerHTML;
                        if (colleagueSelectJS.innerHTML === receiverName) {
                            $('#tickets-container').append("<article class=\"ticket ".concat(ticketStatus.toLowerCase(), "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n              <p class=\"shortdate\">").concat(dateShort, "</p>\n              <p class=\"subject\">").concat(subjectText, "</p>\n              <p class=\"sender\">").concat(senderName, "</p>\n              \n              <footer style=\"display: none\">\n                <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                <p class=\"subject-text\">").concat(subjectText, "</p>\n                <p class=\"description-text\">").concat(descriptionText, "</p>\n                <p class=\"sender-name\">").concat(senderName, "</p>\n                <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                <p class=\"receiver-name\">").concat(receiverName, "</p>\n                <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                <p class=\"date-short\">").concat(dateShort, "</p>\n                <p class=\"date-pending\">").concat(datePending, "</p>\n                <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n              </footer>\n            </article>"));
                        }
                    }
                    break;
            }
        }
        BuildTickets.getMetadata = getMetadata;
        var convert = function (To, string) {
            switch (To) {
                case 'toCamelCase':
                    break;
                case 'to Separate':
                    var firstLetter = string.split('-')[0].toLowerCase().charAt(0).toUpperCase();
                    var firstRemaining = string.split('-')[0].slice(1).toLowerCase();
                    var secondLetter = string.split('-')[1].toLowerCase().charAt(0).toUpperCase();
                    var secondRemaining = string.split('-')[1].slice(1).toLowerCase();
                    return "".concat(firstLetter + firstRemaining, " ").concat(secondLetter + secondRemaining);
                case 'to-value':
                    var firstValue = string.split(' ')[0].toLowerCase();
                    var secondValue = string.split(' ')[1].toLowerCase();
                    return "".concat(firstValue, "-").concat(secondValue);
            }
        };
    })(BuildTickets = exports.BuildTickets || (exports.BuildTickets = {}));
});

//# sourceMappingURL=dist/code/tools/BuildTickets.js.map
