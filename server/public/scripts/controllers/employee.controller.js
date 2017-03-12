
myApp.controller('EmployeeController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
  console.log('The EmployeeController was loaded');
  var self = this;
  self.newEmployee = {};
  self.monthlySalary = EmployeeFactory.monthlySalary;

  self.employees = EmployeeFactory.employees;


  self.addEmployee = function() {
    EmployeeFactory.addEmployee(self.newEmployee);

    };

    self.deleteEmployee = function(employeeId) {
  EmployeeFactory.deleteEmployee(employeeId);
};
// //
// self.calculateSalary= function() {
//   EmployeeFactory.calculateSalary(self.monthlySalary);
// };


}]);

// self.updateEmployee = function(employeeId) {
// EmployeeFactory.updateEmployee(employeeId);
// };
