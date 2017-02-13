$(document).ready(function(){ // waits for DOM to completly load
  $('#submitNewEmployee').on('click', function(){ //event listener on submitNewEmployee button
    // Declaring variables and retreiving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    // add new employee row to DOM
    $('#employeeTableBody').append(
   '<tr>' +
      '<td>' + firstName +'</td>' +
      '<td>' + lastName +'</td>' +
      '<td>' + idNumber +'</td>' +
      '<td>' + jobTitle +'</td>' +
      '<td>' + annualSalary +'</td>' +
      '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + '">Delete</button></td>' +
    '</tr>'
  );

    // Add monthly salary expenses to the DOM
    var newEmployeeMonthlyExpenses = annualSalary/ 12;
    var previousMonthlyExpenses = $('monthlyExpenses').text(); //.val is for inputs
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    // Clear out input boxes
    $('.employeeFormInput').val('');
  });
// $() is the selector. Adding listener for clicking delete employee buttons
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    // Removing employee salary from total
    var deletedEmployeeSalary = $(this).data('salary');
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary/ 12;
    var previousMonthlyExpenses = $('monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);
    // selecting and deleting the row from table
    $(this).parent().parent().remove();

  });
});

// .text is to

// .val is for input
