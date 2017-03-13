myApp.factory('EmployeeFactory', ['$http', function($http) {


var employees ={list: []};


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

function deleteEmployee(employeeid) {
$http({
  method: 'DELETE',
  url: '/employee/' + employeeid,
}).then(function(response) {
  getEmployee();
});
}

  function updateEmployee(employeesid) {
    $http({
      method: 'PUT',
      url: '/employee/' + employeeid
    }).then(function(response) {
    getEmployee();
    });
  }




//
// var total = 0;
//     for (var i = 0; i < self.employeeArray.length; i++) {
//       total += Number(self.employeeArray[i].salary);
//     }
//
//     total = total / 12;
//     self.employeeSalaryTotal = total;
//
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

    // uncompleteTask: uncompleteTask
  };
}]);
