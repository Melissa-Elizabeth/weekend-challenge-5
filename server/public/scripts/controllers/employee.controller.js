
myApp.controller('EmployeeController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
  console.log('The EmployeeController was loaded');
  var self = this;
  self.employees = EmployeeFactory.employees;


  self.calculateSalary = function () {
    var salary = 0;
    for (var i = 0; i < self.employees.list.length; i++) {
      salary += parseInt(self.employees.list[i].annual_salary);
    }
    salary = salary / 12;
    return salary.toFixed(2);
  };




  self.addEmployee = function() {
    EmployeeFactory.addEmployee(self.newEmployee);

  };

  self.deleteEmployee = function(employeeid) {
    EmployeeFactory.deleteEmployee(employeeid);
  };

}]);
