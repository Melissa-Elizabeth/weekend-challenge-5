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

// function uncompleteTask(taskId){
//   $http({
//     method: 'PUT',
//     url: '/tasks/uncomplete/' + taskId
//   }).then(function(response) {
//     getTasks();
//   });

  return {
    employees: employees,
    getEmployee: getEmployee,
    updateEmployee: updateEmployee,
    addEmployee: addEmployee,
    deleteEmployee: deleteEmployee,

    // uncompleteTask: uncompleteTask
  };
}]);
