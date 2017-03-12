myApp.factory('EmployeeFactory', ['$http', function($http) {

  // var testArrayVariable = ['queso', 'bagel', 'donald bagel', 'salsa'];
  // testArrayVariable.pop();

var employees ={list: []};
var monthlySalary = (employees.annual_salary/12);
console.log(monthlySalary);
  getEmployee();

  function getEmployee() {
    $http({
      method: 'GET',
      url: '/employee'
    }).then(function(response) {
      console.log(response.data);
      employees.list = response.data;
    });
  }

function addEmployee(newEmployee) {
  $http({
    method: 'POST',
    url: '/employee',
    data: newEmployee
  }).then(function(response){
    console.log(response);
  getEmployee();

  });
}

function deleteEmployee(taskId) {
$http({
  method: 'DELETE',
  url: '/employee/' + employeeId
}).then(function(response) {
  getEmployee();
});
}

  function updateEmployee(employeeId) {
    $http({
      method: 'PUT',
      url: '/employee/' + employeeId
    }).then(function(response) {
    getEmployee();
    });
  }
  //
  // function calculateSalary() {
  // var totalSalary = 0;
  // for (var i = 0; i < employees.list.length; i++) {
  //   totalSalary += employees.list[i].annual_salary;
  //   monthlySalary = totalSalary/12;
// }
//
// }
//
// function uncompleteTask(taskId){
//   $http({
//     method: 'PUT',
//     url: '/tasks/uncomplete/' + taskId
//   }).then(function(response) {
//     getTasks();
//   });
// }

// this is the public API, if it's not in here, your controller won't see it
  return {
    employees: employees,
    getEmployee: getEmployee,
    updateEmployee: updateEmployee,
    addEmployee: addEmployee,
    deleteEmployee: deleteEmployee,
    // calculateSalary: calculateSalary,
    monthlySalary: monthlySalary
    // uncompleteTask: uncompleteTask
  };
}]);
