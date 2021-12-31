define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResolveOverlay = void 0;
    var ResolveOverlay;
    (function (ResolveOverlay) {
        var initiateEvents = (function () {
            function initiateEvents() {
                console.log('--ResolveOverlay.js Loaded');
            }
            return initiateEvents;
        }());
        ResolveOverlay.initiateEvents = initiateEvents;
        function getTicket(info, container) {
            var activeTicket = container.querySelector('.active-ticket');
            switch (info) {
                case 'ticket-status':
                    var ticketStatus = activeTicket.children[3].children[0].innerHTML;
                    return ticketStatus;
                case 'ticket-rating':
                    var ticketRating = activeTicket.children[3].children[1].innerHTML;
                    return ticketRating;
                case 'subject-text':
                    var subjectText = activeTicket.children[3].children[2].innerHTML;
                    return subjectText;
                case 'description-text':
                    var descriptionText = activeTicket.children[3].children[3].innerHTML;
                    return descriptionText;
                case 'sender-name':
                    var senderName = activeTicket.children[3].children[4].innerHTML;
                    return senderName;
                case 'sender-department':
                    var senderDepartment = activeTicket.children[3].children[5].innerHTML;
                    return senderDepartment;
                case 'receiver-name':
                    var receiverName = activeTicket.children[3].children[6].innerHTML;
                    return receiverName;
                case 'receiver-department':
                    var receiverDepartment = activeTicket.children[3].children[7].innerHTML;
                    return receiverDepartment;
                case 'date-short':
                    var dateShort = activeTicket.children[3].children[8].innerHTML;
                    return dateShort;
                case 'date-pending':
                    var datePending = activeTicket.children[3].children[9].innerHTML;
                    return datePending;
                case 'date-assigned':
                    var dateAssigned = activeTicket.children[3].children[10].innerHTML;
                    return dateAssigned;
                case 'date-resolved':
                    var dateResolved = activeTicket.children[3].children[11].innerHTML;
                    return dateResolved;
                case 'note-resolved':
                    var noteResolved = activeTicket.children[3].children[12].innerHTML;
                    return noteResolved;
                case 'date-deleted':
                    var dateDeleted = activeTicket.children[3].children[13].innerHTML;
                    return dateDeleted;
                case 'note-deleted':
                    var noteDeleted = activeTicket.children[3].children[14].innerHTML;
                    return noteDeleted;
            }
        }
    })(ResolveOverlay = exports.ResolveOverlay || (exports.ResolveOverlay = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/ResolveOverlay.js.map
