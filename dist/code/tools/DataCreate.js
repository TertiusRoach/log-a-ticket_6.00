define(["require", "exports", "code/tools/GetArray"], function (require, exports, GetArray_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataCreate = void 0;
    var DataCreate;
    (function (DataCreate) {
        var forBlock = (function () {
            function forBlock(arrayName) {
                var indexData = document.querySelector('#index-data');
                var employeesContainer = document.querySelector('#employees-data');
                var ticketsContainer = document.querySelector('#tickets-data');
                switch (arrayName) {
                    case 'employees':
                        $(employeesContainer).empty();
                        var employeesTotal = GetArray_1.GetArray.employees().length;
                        for (var i = 0; i < employeesTotal; i++) {
                        }
                        break;
                    case 'tickets':
                        $(ticketsContainer).empty();
                        var ticketsTotal = GetArray_1.GetArray.tickets().length;
                        var _loop_1 = function (i) {
                            var GetTickets = GetArray_1.GetArray.tickets()[i];
                            var ticketStatus = GetTickets.ticketStatus;
                            var ticketRating = GetTickets.ticketRating;
                            var subjectText = GetTickets.subjectText;
                            var descriptionText = GetTickets.descriptionText;
                            var senderName = GetTickets.senderName;
                            var senderDepartment = GetTickets.senderDepartment;
                            var receiverName = GetTickets.receiverName;
                            var receiverDepartment = GetTickets.receiverDepartment;
                            var dateShort = GetTickets.dateShort;
                            var datePending = GetTickets.datePending;
                            var dateAssigned = GetTickets.dateAssigned;
                            var dateResolved = GetTickets.dateResolved;
                            var noteResolved = GetTickets.noteResolved;
                            var dateDeleted = GetTickets.dateDeleted;
                            var noteDeleted = GetTickets.noteDeleted;
                            var receiverDefault = function () {
                                switch (receiverName) {
                                    case "".concat(undefined):
                                        return receiverDepartment;
                                    default:
                                        return receiverName;
                                }
                            };
                            $('#tickets-data').append("<article class=\"ticket ".concat(ticketStatus.toLowerCase(), "\" onClick=\"$('.active-ticket').removeClass('active-ticket'); $(this).addClass('active-ticket');\">\n                <header>\n                  <p class=\"shortdate\">").concat(dateShort, "</p>\n                  <p class=\"subject\">").concat(subjectText, "</p>\n                  <p class=\"receiver\">").concat(receiverDefault(), "</p>\n                </header>                  \n                <footer style=\"display: none\">\n                  <p class=\"ticket-status\">").concat(ticketStatus, "</p>\n                  <p class=\"ticket-rating\">").concat(ticketRating, "</p>\n                  <p class=\"subject-text\">").concat(subjectText, "</p>\n                  <p class=\"description-text\">").concat(descriptionText, "</p>\n                  <p class=\"sender-name\">").concat(senderName, "</p>\n                  <p class=\"sender-department\">").concat(senderDepartment, "</p>\n                  <p class=\"receiver-name\">").concat(receiverName, "</p>\n                  <p class=\"receiver-department\">").concat(receiverDepartment, "</p>\n                  <p class=\"date-short\">").concat(dateShort, "</p>\n                  <p class=\"date-pending\">").concat(datePending, "</p>\n                  <p class=\"date-assigned\">").concat(dateAssigned, "</p>\n                  <p class=\"date-resolved\">").concat(dateResolved, "</p>\n                  <p class=\"note-resolved\">").concat(noteResolved, "</p>\n                  <p class=\"date-deleted\">").concat(dateDeleted, "</p>\n                  <p class=\"note-deleted\">").concat(noteDeleted, "</p>\n                </footer>\n              </article>"));
                        };
                        for (var i = 0; i < ticketsTotal; i++) {
                            _loop_1(i);
                        }
                        break;
                }
            }
            return forBlock;
        }());
        DataCreate.forBlock = forBlock;
    })(DataCreate = exports.DataCreate || (exports.DataCreate = {}));
});

//# sourceMappingURL=dist/code/tools/DataCreate.js.map
