define(["require", "exports", "code/tools/GetArray"], function (require, exports, GetArray_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuildData = void 0;
    var BuildData;
    (function (BuildData) {
        var initiateCode = (function () {
            function initiateCode(sidebarJS, sidebarJQ) {
                $('#metadata').empty();
                var ticketsTotal = GetArray_1.GetTicket.tickets().length;
                for (var i = 0; i < ticketsTotal; i++) {
                    $('#metadata').append("<div>\n            <p class=\"ticket-status\">".concat(GetArray_1.GetTicket.tickets()[i].ticketStatus, "</p>\n            <p class=\"ticket-rating\">").concat(GetArray_1.GetTicket.tickets()[i].ticketRating, "</p>\n            <p class=\"subject-text\">").concat(GetArray_1.GetTicket.tickets()[i].subjectText, "</p>\n            <p class=\"description-text\">").concat(GetArray_1.GetTicket.tickets()[i].descriptionText, "</p>\n            <p class=\"sender-name\">").concat(GetArray_1.GetTicket.tickets()[i].senderName, "</p>\n            <p class=\"sender-department\">").concat(GetArray_1.GetTicket.tickets()[i].senderDepartment, "</p>\n            <p class=\"receiver-name\">").concat(GetArray_1.GetTicket.tickets()[i].receiverName, "</p>\n            <p class=\"receiver-department\">").concat(GetArray_1.GetTicket.tickets()[i].receiverDepartment, "</p>\n            <p class=\"date-short\">").concat(GetArray_1.GetTicket.tickets()[i].dateShort, "</p>\n            <p class=\"date-pending\">").concat(GetArray_1.GetTicket.tickets()[i].datePending, "</p>\n            <p class=\"date-assigned\">").concat(GetArray_1.GetTicket.tickets()[i].dateAssigned, "</p>\n            <p class=\"date-resolved\">").concat(GetArray_1.GetTicket.tickets()[i].dateResolved, "</p>\n            <p class=\"note-resolved\">").concat(GetArray_1.GetTicket.tickets()[i].noteResolved, "</p>\n            <p class=\"date-deleted\">").concat(GetArray_1.GetTicket.tickets()[i].dateDeleted, "</p>\n            <p class=\"note-deleted\">").concat(GetArray_1.GetTicket.tickets()[i].noteDeleted, "</p>\n          </div>"));
                }
            }
            return initiateCode;
        }());
        BuildData.initiateCode = initiateCode;
    })(BuildData = exports.BuildData || (exports.BuildData = {}));
});

//# sourceMappingURL=dist/code/tools/BuildData.js.map
