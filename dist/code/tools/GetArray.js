define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetArray = void 0;
    var GetArray;
    (function (GetArray) {
        function departments() {
            return [
                {
                    department: 'Technical',
                    employeesTotal: 4,
                    employeeA: 'Jane Lester',
                    employeeB: 'Hammad Dean',
                    employeeC: 'Saffron Hansen',
                    employeeD: 'Dale Sutton',
                },
                {
                    department: 'Admin',
                    employeesTotal: 3,
                    employeeA: 'Eshan Booker',
                    employeeB: 'Theodore Russell',
                    employeeC: 'Kady Deacon',
                },
                {
                    department: 'Maintenance',
                    employeesTotal: 2,
                    employeeA: 'Tasneem Kemp',
                    employeeB: 'Conrad Guy',
                },
                {
                    department: 'Human Resources',
                    employeesTotal: 1,
                    employeeA: 'Danish Copeland',
                },
            ];
        }
        GetArray.departments = departments;
        var departmentReference = (function () {
            function departmentReference() {
            }
            return departmentReference;
        }());
        function employees() {
            return [
                {
                    firstName: 'Jane',
                    middleName: undefined,
                    lastName: 'Lester',
                    department: 'Technical',
                    occupation: 'Technology Lead',
                    role: 'Manager',
                    email: 'jane@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Hammad',
                    middleName: undefined,
                    lastName: 'Dean',
                    department: 'Technical',
                    occupation: 'Software Developer',
                    role: 'Employee',
                    email: 'hammad@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Saffron',
                    middleName: undefined,
                    lastName: 'Hansen',
                    department: 'Technical',
                    occupation: 'Graphic Designer',
                    role: 'Employee',
                    email: 'saffron@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Dale',
                    middleName: undefined,
                    lastName: 'Sutton',
                    department: 'Technical',
                    occupation: 'Studio Technician',
                    role: 'Employee',
                    email: 'dale@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Eshan',
                    middleName: undefined,
                    lastName: 'Booker',
                    department: 'Admin',
                    occupation: 'Head of Admin',
                    role: 'Manager',
                    email: 'eshan@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Theodore',
                    middleName: undefined,
                    lastName: 'Russell',
                    department: 'Admin',
                    occupation: 'Bookkeeper',
                    role: 'Employee',
                    email: 'theodore@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Kady',
                    middleName: 'Isla',
                    lastName: 'Deacon',
                    department: 'Admin',
                    occupation: 'Scheduler',
                    role: 'Manager',
                    email: 'kady@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Tasneem',
                    middleName: 'Namrata',
                    lastName: 'Kemp',
                    department: 'Maintenance',
                    occupation: 'Janitor',
                    role: 'Employee',
                    email: 'tasneem@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Conrad',
                    middleName: undefined,
                    lastName: 'Guy',
                    department: 'Maintenance',
                    occupation: 'Handyman',
                    role: 'Employee',
                    email: 'conrad@email.com',
                    phone: undefined,
                },
                {
                    firstName: 'Danish',
                    middleName: undefined,
                    lastName: 'Copeland',
                    department: 'Human Resources',
                    occupation: 'Head of HR',
                    role: 'Manager',
                    email: 'danish@email.com',
                    phone: undefined,
                },
            ];
        }
        GetArray.employees = employees;
        var employeeReference = (function () {
            function employeeReference() {
            }
            return employeeReference;
        }());
        function tickets() {
            return [];
        }
        GetArray.tickets = tickets;
        var ticketReference = (function () {
            function ticketReference() {
            }
            return ticketReference;
        }());
    })(GetArray = exports.GetArray || (exports.GetArray = {}));
});

//# sourceMappingURL=dist/code/tools/GetArray.js.map
